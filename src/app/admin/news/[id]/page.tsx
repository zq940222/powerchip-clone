'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import NewsForm from '../_components/NewsForm'

interface EditNewsPageProps {
  params: { id: string }
}

export default function EditNewsPage({ params }: EditNewsPageProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newsData, setNewsData] = useState<any>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news/${params.id}`)
        const data = await res.json()
        if (data.success) {
          setNewsData(data.data)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [params.id])

  const handleSubmit = async (formData: any, publish: boolean) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/news/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, published: publish }),
      })

      const data = await res.json()
      if (data.success) {
        router.push('/admin/news')
      } else {
        alert('儲存失敗：' + data.error?.message)
      }
    } catch (error) {
      console.error('Error saving news:', error)
      alert('儲存失敗')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
        <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Fetching Article...</div>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Editorial</span>
          <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">編輯新聞</h1>
        </div>
        <Link href="/admin/news">
          <button className="text-slate-400 hover:text-psmc-navy font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
            <span className="material-icons-outlined text-sm">arrow_back</span>
            返回列表
          </button>
        </Link>
      </header>

      {newsData && <NewsForm initialData={newsData} onSubmit={handleSubmit} loading={saving} />}
    </div>
  )
}
