import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const news = await prisma.news.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        category: true,
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    if (!news) {
      return NextResponse.json(
        { success: false, error: { code: 'NOT_FOUND', message: 'News not found' } },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: news
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { success: false, error: { code: 'FETCH_ERROR', message: 'Failed to fetch news' } },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const existingNews = await prisma.news.findUnique({
      where: { id: parseInt(params.id) }
    })

    if (!existingNews) {
      return NextResponse.json(
        { success: false, error: { code: 'NOT_FOUND', message: 'News not found' } },
        { status: 404 }
      )
    }

    const news = await prisma.news.update({
      where: { id: parseInt(params.id) },
      data: {
        titleZh,
        titleEn,
        contentZh,
        contentEn,
        excerptZh,
        excerptEn,
        coverImage,
        categoryId: categoryId ? parseInt(categoryId) : null,
        published,
        publishedAt: published && !existingNews.published ? new Date() : existingNews.publishedAt
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
      message: 'News updated successfully'
    })
  } catch (error) {
    console.error('Error updating news:', error)
    return NextResponse.json(
      { success: false, error: { code: 'UPDATE_ERROR', message: 'Failed to update news' } },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Unauthorized' } },
        { status: 401 }
      )
    }

    await prisma.news.delete({
      where: { id: parseInt(params.id) }
    })

    return NextResponse.json({
      success: true,
      message: 'News deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting news:', error)
    return NextResponse.json(
      { success: false, error: { code: 'DELETE_ERROR', message: 'Failed to delete news' } },
      { status: 500 }
    )
  }
}
