export type Locale = 'zh-TW' | 'en'

export interface News {
  id: number
  titleZh: string
  titleEn: string
  contentZh: string
  contentEn: string
  excerptZh: string | null
  excerptEn: string | null
  coverImage: string | null
  published: boolean
  publishedAt: Date | null
  categoryId: number | null
  authorId: number
  createdAt: Date
  updatedAt: Date
  category?: NewsCategory
  author?: User
}

export interface NewsCategory {
  id: number
  nameZh: string
  nameEn: string
  slug: string
  createdAt: Date
}

export interface User {
  id: number
  email: string
  name: string
  role: 'ADMIN' | 'EDITOR'
  createdAt: Date
  updatedAt: Date
}

export interface PageContent {
  id: number
  pageKey: string
  titleZh: string
  titleEn: string
  contentZh: string
  contentEn: string
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  message?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
