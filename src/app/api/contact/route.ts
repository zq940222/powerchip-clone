import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const PAGE_KEY = 'contact_info'

export async function GET() {
    try {
        const content = await prisma.pageContent.findUnique({
            where: { pageKey: PAGE_KEY }
        })

        if (!content) {
            // Return default structure if not found
            return NextResponse.json({
                success: true,
                data: {
                    addressZh: '台灣新竹科學園區力行一路12號',
                    addressEn: 'No. 12, Li-Hsin 1st Rd., Hsinchu Science Park, Taiwan',
                    phone: '+886-3-578-0000',
                    fax: '+886-3-578-0001',
                    serviceEmail: 'service@powerchip.com',
                    irEmail: 'ir@powerchip.com'
                }
            })
        }

        // Parse JSON from content fields
        const dataZh = JSON.parse(content.contentZh || '{}')
        const dataEn = JSON.parse(content.contentEn || '{}')

        return NextResponse.json({
            success: true,
            data: {
                addressZh: dataZh.address || '',
                addressEn: dataEn.address || '',
                phone: dataZh.phone || '',
                fax: dataZh.fax || '',
                serviceEmail: dataZh.serviceEmail || '',
                irEmail: dataZh.irEmail || ''
            }
        })
    } catch (error) {
        console.error('Error fetching contact info:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch contact info' },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const body = await request.json()
        const { addressZh, addressEn, phone, fax, serviceEmail, irEmail } = body

        // Prepare JSON for storage
        const contentZh = JSON.stringify({
            address: addressZh,
            phone,
            fax,
            serviceEmail,
            irEmail
        })

        const contentEn = JSON.stringify({
            address: addressEn,
            phone, // basic contact info usually shared
            fax,
            serviceEmail,
            irEmail
        })

        const content = await prisma.pageContent.upsert({
            where: { pageKey: PAGE_KEY },
            update: {
                contentZh,
                contentEn,
                titleZh: '聯絡資訊',
                titleEn: 'Contact Info'
            },
            create: {
                pageKey: PAGE_KEY,
                contentZh,
                contentEn,
                titleZh: '聯絡資訊',
                titleEn: 'Contact Info'
            }
        })

        return NextResponse.json({ success: true, data: content })
    } catch (error) {
        console.error('Error updating contact info:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to update contact info' },
            { status: 500 }
        )
    }
}
