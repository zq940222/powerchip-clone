import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('pageSize') || '10')
    const category = searchParams.get('category')
    const published = searchParams.get('published')

    const where: Record<string, unknown> = {}

    if (category) {
      where.category = { slug: category }
    }

    if (published !== null) {
      where.published = published === 'true'
    }

    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        include: {
          category: true,
          author: {
            select: { id: true, name: true, email: true }
          }
        },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize
      }),
      prisma.news.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: news,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { success: false, error: { code: 'FETCH_ERROR', message: 'Failed to fetch news' } },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Unauthorized' } },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      titleZh,
      titleEn,
      contentZh,
      contentEn,
      excerptZh,
      excerptEn,
      coverImage,
      categoryId,
      published
    } = body

    const news = await prisma.news.create({
      data: {
        titleZh,
        titleEn,
        contentZh,
        contentEn,
        excerptZh,
        excerptEn,
        coverImage,
        categoryId: categoryId ? parseInt(categoryId) : null,
        authorId: parseInt(session.user.id),
        published: published || false,
        publishedAt: published ? new Date() : null
      },
      include: {
        category: true,
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: news,
      message: 'News created successfully'
    })
  } catch (error) {
    console.error('Error creating news:', error)
    return NextResponse.json(
      { success: false, error: { code: 'CREATE_ERROR', message: 'Failed to create news' } },
      { status: 500 }
    )
  }
}
