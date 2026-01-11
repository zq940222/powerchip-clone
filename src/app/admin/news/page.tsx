'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import type { News } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminNewsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news')
      const data = await res.json()
      if (data.success) {
        setNews(data.data)
      }
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('確定要刪除這則新聞嗎？')) return

    try {
      const res = await fetch(`/api/news/${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        setNews(news.filter((n) => n.id !== id))
      }
    } catch (error) {
      console.error('Error deleting news:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
        <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Loading data...</div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Content Management</span>
          <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">新聞管理</h1>
        </div>
        <Link href="/admin/news/new">
          <button className="bg-psmc-navy text-white hover:bg-psmc-cyan px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-psmc-navy/20 flex items-center gap-2 group">
            <span className="material-icons-outlined group-hover:rotate-90 transition-transform">add</span>
            新增新聞
          </button>
        </Link>
      </header>

      <Card className="border-none shadow-2xl shadow-slate-200/60 rounded-[40px] overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">文章標題</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">發布狀態</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">發布日期</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">管理操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {news.length > 0 ? (
                  news.map((item, index) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-4">
                          {item.coverImage ? (
                            <img src={item.coverImage} className="w-14 h-14 rounded-2xl object-cover shadow-md" alt="" />
                          ) : (
                            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300">
                              <span className="material-icons-outlined">image</span>
                            </div>
                          )}
                          <div className="max-w-md">
                            <p className="font-black text-psmc-navy truncate group-hover:text-psmc-cyan transition-colors">{item.titleZh}</p>
                            <p className="text-xs text-slate-400 uppercase font-black tracking-wider truncate mt-1">{item.titleEn}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className={cn(
                          "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                          item.published
                            ? "bg-green-100 text-green-600"
                            : "bg-amber-100 text-amber-600"
                        )}>
                          {item.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                          <span className="material-icons-outlined text-sm opacity-30">calendar_today</span>
                          {item.publishedAt ? formatDate(item.publishedAt, 'zh-TW') : '-'}
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <Link href={`/admin/news/${item.id}`}>
                            <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 hover:bg-psmc-navy hover:text-white transition-all flex items-center justify-center group/btn shadow-sm">
                              <span className="material-icons-outlined text-lg">edit</span>
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group/btn shadow-sm"
                          >
                            <span className="material-icons-outlined text-lg">delete_outline</span>
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-24 text-center">
                      <span className="material-icons-outlined text-6xl text-slate-200 mb-6 block">inbox</span>
                      <p className="text-slate-400 font-light italic">目前還沒有任何文章...</p>
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
