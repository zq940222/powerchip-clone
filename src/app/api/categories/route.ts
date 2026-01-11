import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const categories = await prisma.newsCategory.findMany({
            orderBy: { nameZh: 'asc' }
        })

        return NextResponse.json({
            success: true,
            data: categories
        })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { success: false, error: { code: 'FETCH_ERROR', message: 'Failed to fetch categories' } },
            { status: 500 }
        )
    }
}
