'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PressReleasesPage({ params: { locale } }: { params: { locale: string } }) {
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch news from API
    fetch(`/api/news?pageSize=12&published=true`)
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.data)) {
          setNews(json.data)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  // Mock news data if API fails
  const mockNews = [
    {
      id: 1,
      titleZh: '力積電宣布2024年第四季財報',
      titleEn: 'PSMC Announces Q4 2024 Financial Results',
      publishedAt: '2024-01-15',
      category: locale === 'zh-TW' ? '財務報告' : 'Financial Report'
    },
    {
      id: 2,
      titleZh: '力積電擴大產能投資計劃',
      titleEn: 'PSMC Expands Capacity Investment Plan',
      publishedAt: '2024-01-10',
      category: locale === 'zh-TW' ? '公司公告' : 'Company Announcement'
    },
    {
      id: 3,
      titleZh: '力積電獲得ISO 27001認證',
      titleEn: 'PSMC Achieves ISO 27001 Certification',
      publishedAt: '2024-01-05',
      category: locale === 'zh-TW' ? '獎項榮譽' : 'Awards & Recognition'
    },
    {
      id: 4,
      titleZh: '力積電與國際大廠簽署合作協議',
      titleEn: 'PSMC Signs Cooperation Agreement with Major International Partner',
      publishedAt: '2023-12-20',
      category: locale === 'zh-TW' ? '合作夥伴' : 'Partnership'
    },
    {
      id: 5,
      titleZh: '力積電推出新一代先進製程技術',
      titleEn: 'PSMC Launches New Generation Advanced Process Technology',
      publishedAt: '2023-12-15',
      category: locale === 'zh-TW' ? '技術創新' : 'Technology Innovation'
    },
    {
      id: 6,
      titleZh: '力積電參加2023半導體產業展',
      titleEn: 'PSMC Participates in 2023 Semiconductor Industry Exhibition',
      publishedAt: '2023-12-10',
      category: locale === 'zh-TW' ? '活動參展' : 'Event Participation'
    }
  ]

  const displayNews = news.length > 0 ? news : mockNews

  const categories = [
    locale === 'zh-TW' ? '全部' : 'All',
    locale === 'zh-TW' ? '財務報告' : 'Financial Report',
    locale === 'zh-TW' ? '公司公告' : 'Company Announcement',
    locale === 'zh-TW' ? '技術創新' : 'Technology Innovation',
    locale === 'zh-TW' ? '合作夥伴' : 'Partnership'
  ]

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy via-blue-800 to-psmc-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,194,224,0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '新聞稿' : 'Press Releases'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '最新的公司動態與重要訊息'
                : 'Latest company updates and important announcements'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-psmc-cyan text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 animate-pulse">
                  <div className="w-24 h-4 bg-slate-200 rounded-full mb-6" />
                  <div className="w-full h-8 bg-slate-200 rounded-lg mb-4" />
                  <div className="w-2/3 h-8 bg-slate-200 rounded-lg mb-8" />
                  <div className="w-32 h-4 bg-slate-200 rounded-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${locale}/insights/press/${item.id}`}
                    className="group block bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-psmc-cyan transition-all h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-1 h-6 bg-psmc-cyan rounded-full" />
                      <span className="text-xs font-black text-psmc-cyan uppercase tracking-widest">
                        {new Date(item.publishedAt).toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US')}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-psmc-navy group-hover:text-psmc-cyan transition-colors leading-tight mb-6 flex-grow">
                      {locale === 'zh-TW' ? item.titleZh : item.titleEn}
                    </h3>

                    {item.category && (
                      <div className="inline-block bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        {item.category}
                      </div>
                    )}

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        {locale === 'zh-TW' ? '閱讀全文' : 'Read More'}
                      </span>
                      <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-psmc-navy group-hover:bg-psmc-cyan group-hover:text-white transition-all">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && displayNews.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-6">📰</div>
              <h3 className="text-2xl font-bold text-psmc-navy mb-4">
                {locale === 'zh-TW' ? '目前沒有新聞' : 'No News Available'}
              </h3>
              <p className="text-slate-600">
                {locale === 'zh-TW' ? '請稍後再查看' : 'Please check back later'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'zh-TW' ? '訂閱新聞通知' : 'Subscribe to News Updates'}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '訂閱我們的新聞通知,第一時間掌握力積電最新動態'
                : 'Subscribe to our news updates to stay informed about PSMC\'s latest developments'}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-psmc-navy transition-all shadow-lg hover:shadow-xl"
            >
              {locale === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
