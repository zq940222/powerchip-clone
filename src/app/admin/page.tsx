'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import Link from 'next/link'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-psmc-cyan border-t-transparent rounded-full animate-spin" />
        <div className="text-slate-400 font-black uppercase tracking-widest text-xs">身分驗證中...</div>
      </div>
    )
  }

  if (!session) return null

  const stats = [
    { label: '新聞總數', value: '24', icon: 'feed', color: 'bg-blue-50 text-blue-500' },
    { label: '今日更新', value: '3', icon: 'update', color: 'bg-psmc-cyan/10 text-psmc-cyan' },
    { label: '系統用戶', value: '1', icon: 'people', color: 'bg-psmc-navy/5 text-psmc-navy' },
  ]

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">儀表板總覽</span>
          <h1 className="text-4xl font-black text-psmc-navy tracking-tight uppercase">
            歡迎回來, <span className="text-psmc-cyan">{session.user?.name}</span>
          </h1>
        </div>
        <div className="text-slate-400 text-sm font-medium">
          上次登入：{new Date().toLocaleTimeString('zh-TW')}
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden group">
              <CardContent className="p-8 flex items-center gap-6">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-500", stat.color)}>
                  <span className="material-icons-outlined text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">{stat.label}</p>
                  <p className="text-3xl font-black text-psmc-navy">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-psmc-navy mb-8 tracking-tight flex items-center gap-3 uppercase">
          <span className="w-1.5 h-6 bg-psmc-cyan rounded-full" />
          快速操作
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActionCard
            title="新聞管理"
            desc="建立、編輯或刪除前台新聞動態"
            href="/admin/news"
            icon="description"
          />
          <ActionCard
            title="前台預覽"
            desc="查看網站目前的前台渲染效果"
            href="/zh-TW"
            icon="open_in_new"
            external
          />
        </div>
      </div>
    </div>
  )
}

function ActionCard({ title, desc, href, icon, external }: { title: string; desc: string; href: string; icon: string; external?: boolean }) {
  return (
    <Link href={href} target={external ? "_blank" : undefined}>
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[40px] overflow-hidden hover:bg-psmc-navy hover:text-white transition-all duration-500 group">
        <CardContent className="p-10 flex items-start gap-8">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-psmc-navy group-hover:bg-psmc-cyan group-hover:text-white transition-all transform group-hover:rotate-6">
            <span className="material-icons-outlined text-2xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-slate-400 font-light group-hover:text-white/60 transition-colors">{desc}</p>
          </div>
          <span className="material-icons-outlined mt-1 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
            arrow_forward
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

// Support function for CN in local scope if needed
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
