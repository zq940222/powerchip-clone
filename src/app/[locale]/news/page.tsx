'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

interface News {
  id: number
  titleZh: string
  titleEn: string
  publishedAt: string | null
  coverImage: string | null
  category: {
    nameZh: string
    nameEn: string
    slug: string
  } | null
}

interface Category {
  id: number
  nameZh: string
  nameEn: string
  slug: string
}

interface NewsPageProps {
  params: { locale: string }
}

export default function NewsPage({ params: { locale } }: NewsPageProps) {
  const [news, setNews] = useState<News[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories')
        const json = await res.json()
        if (json.success && Array.isArray(json.data)) {
          setCategories(json.data)
        }
      } catch (err) {
        console.error('Failed to fetch categories:', err)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        const categoryParam = activeCategory ? `&category=${activeCategory}` : ''
        const url = `/api/news?published=true&pageSize=9&page=${pagination.page}${categoryParam}`
        const res = await fetch(url)
        const json = await res.json()
        if (json.success && Array.isArray(json.data)) {
          setNews(json.data)
          if (json.pagination && typeof json.pagination.totalPages === 'number') {
            setPagination(prev => ({ ...prev, totalPages: json.pagination.totalPages }))
          }
        }
      } catch (err) {
        console.error('Failed to fetch news:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [activeCategory, pagination.page])

  const handleCategoryChange = (slug: string | null) => {
    setActiveCategory(slug)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }))
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[450px] flex items-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src="/images/news_center_hero.png"
            alt="News Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-psmc-navy/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy via-psmc-navy/20 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Communication</span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
              {locale === 'zh-TW' ? '新聞中心' : 'News Center'}
            </h1>
            <div className="w-20 h-1.5 bg-psmc-cyan mx-auto mb-6 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'zh-TW' ? '即時掌握力積電的最新研發進展、企業動態與產業訊息。' : "Stay up to date with PSMC's latest developments, corporate news, and industry announcements."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Content */}
      <section className="py-24 relative z-20">
        <div className="container-custom">
          {/* Category Switcher */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(null)}
              className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all ${activeCategory === null
                ? 'bg-psmc-navy text-white shadow-xl shadow-psmc-navy/20'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
            >
              {locale === 'zh-TW' ? '全部新聞' : 'All News'}
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat.slug
                  ? 'bg-psmc-navy text-white shadow-xl shadow-psmc-navy/20'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
              >
                {locale === 'zh-TW' ? cat.nameZh : cat.nameEn}
              </motion.button>
            ))}
          </div>

          {/* News Grid */}
          <div className="relative min-h-[600px]">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence mode="popLayout">
                  {news.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Link href={`/${locale}/news/${item.id}`} className="group block h-full">
                        <Card className="h-full border-none shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-white flex flex-col">
                          <div className="relative h-64 overflow-hidden shrink-0">
                            <img
                              src={item.coverImage || '/images/placeholder_news.png'}
                              alt={locale === 'zh-TW' ? item.titleZh : item.titleEn}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-psmc-navy/80 backdrop-blur-md rounded-full text-[10px] font-black text-psmc-cyan uppercase tracking-widest">
                              {item.category ? (locale === 'zh-TW' ? item.category.nameZh : item.category.nameEn) : (locale === 'zh-TW' ? '未分類' : 'Uncategorized')}
                            </div>
                          </div>
                          <CardContent className="p-10 flex flex-col flex-1">
                            <div className="flex items-center gap-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                              <span className="material-icons-outlined text-sm">calendar_today</span>
                              {item.publishedAt ? formatDate(item.publishedAt, locale) : '-'}
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-psmc-navy group-hover:text-psmc-cyan transition-colors line-clamp-2 mb-6 leading-tight">
                              {locale === 'zh-TW' ? item.titleZh : item.titleEn}
                            </h3>
                            <div className="mt-auto flex items-center gap-3 text-psmc-navy font-black uppercase tracking-widest text-xs group-hover:gap-5 transition-all">
                              {locale === 'zh-TW' ? '閱讀全文' : 'Read Full Story'}
                              <span className="material-icons-outlined text-sm">arrow_forward</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {!loading && news.length === 0 && (
                  <div className="col-span-full text-center py-20 bg-slate-50 rounded-[40px]">
                    <span className="material-icons-outlined text-6xl text-slate-200 mb-6">feed</span>
                    <p className="text-slate-400 font-light">
                      {locale === 'zh-TW' ? '目前尚無相關新聞' : 'No news found in this category.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
          {!loading && pagination.totalPages > 1 && (
            <div className="mt-20 flex justify-center gap-4">
              {Array.from({ length: Math.max(0, pagination.totalPages) }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={`w-12 h-12 rounded-2xl font-black transition-all ${pagination.page === p
                    ? 'bg-psmc-navy text-white shadow-xl shadow-psmc-navy/20'
                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="bg-psmc-navy rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-psmc-cyan/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">Stay Connected</h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto font-light">
                Join our media list to receive the latest corporate news and technology updates directly in your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:ring-2 focus:ring-psmc-cyan transition-all outline-none font-bold"
                />
                <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
