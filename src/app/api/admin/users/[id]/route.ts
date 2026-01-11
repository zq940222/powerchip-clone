import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
        }

        const userId = parseInt(params.id)
        const currentUserId = parseInt(session.user.id)
        const isAdmin = session.user.role === 'ADMIN'

        // Only Admin can edit other users. Users can edit themselves.
        if (!isAdmin && userId !== currentUserId) {
            return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 })
        }

        const { name, email, password, role } = await request.json()
        const updateData: any = { name, email }

        if (password) {
            updateData.password = await bcrypt.hash(password, 10)
        }

        // Only Admin can change roles
        if (isAdmin && role) {
            updateData.role = role
        }

        const user = await prisma.user.update({
            where: { id: userId },
            data: updateData
        })

        return NextResponse.json({ success: true, data: user })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update user' }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || session.user.role !== 'ADMIN') {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
        }

        const userId = parseInt(params.id)

        // Prevent deleting self
        if (userId === parseInt(session.user.id)) {
            return NextResponse.json({ success: false, error: 'Cannot delete yourself' }, { status: 400 })
        }

        await prisma.user.delete({
            where: { id: userId }
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete user' }, { status: 500 })
    }
}
