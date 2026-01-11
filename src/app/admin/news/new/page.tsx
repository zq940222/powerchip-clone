'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import NewsForm from '../_components/NewsForm'

export default function NewNewsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (formData: any, publish: boolean) => {
    setLoading(true)
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
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
      setLoading(false)
    }
  }

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">New Entry</span>
          <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">新增新聞</h1>
        </div>
        <Link href="/admin/news">
          <button className="text-slate-400 hover:text-psmc-navy font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
            <span className="material-icons-outlined text-sm">arrow_back</span>
            返回列表
          </button>
        </Link>
      </header>

      <NewsForm onSubmit={handleSubmit} loading={loading} />
    </div>
  )
}
