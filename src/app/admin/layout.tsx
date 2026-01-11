'use client'

import { SessionProvider, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 min-h-screen">
        <SessionProvider>
          <AdminContentWrapper>{children}</AdminContentWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}

function AdminContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) return <>{children}</>

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-psmc-navy text-white shrink-0 hidden lg:flex flex-col shadow-2xl relative z-20">
        <div className="p-8">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-psmc-cyan rounded-xl flex items-center justify-center text-psmc-navy font-black text-xl group-hover:bg-white transition-all transform group-hover:rotate-12">P</div>
            <span className="text-xl font-black tracking-tighter">管理後台</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarLink href="/admin" icon="dashboard" label="儀表板" active={pathname === '/admin'} />
          <SidebarLink href="/admin/news" icon="article" label="新聞管理" active={pathname.startsWith('/admin/news')} />
          <SidebarLink href="/admin/contact" icon="contact_support" label="聯絡資訊" active={pathname === '/admin/contact'} />
          <SidebarLink href="/admin/users" icon="group" label="帳號設定" active={pathname === '/admin/users'} />
          <div className="pt-8 pb-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">支援服務</div>
          <SidebarLink href="/" icon="visibility" label="查看前台" external />
        </nav>

        <div className="p-6 border-t border-white/5 bg-white/5 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-psmc-cyan flex items-center justify-center text-psmc-navy font-bold">
              {session?.user?.name?.[0] || 'A'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">{session?.user?.name || 'Administrator'}</p>
              <p className="text-[10px] text-white/40 uppercase font-black">{session?.user?.role || '管理員'}</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-white/60 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all group"
          >
            <span className="material-icons-outlined text-xl group-hover:rotate-12 transition-transform">logout</span>
            <span>登出系統</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-psmc-navy text-white p-4 flex items-center justify-between">
          <span className="font-black text-lg">PSMC 管理後台</span>
          <button className="material-icons-outlined">menu</button>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50 custom-scrollbar">
          <div className="max-w-6xl mx-auto p-8 lg:p-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, label, active, external }: { href: string; icon: string; label: string; active?: boolean; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={cn(
        "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group",
        active
          ? "bg-psmc-cyan text-psmc-navy shadow-lg shadow-psmc-cyan/20"
          : "text-white/60 hover:bg-white/5 hover:text-white"
      )}
    >
      <span className={cn(
        "material-icons-outlined transition-all",
        active ? "scale-110" : "group-hover:scale-110"
      )}>
        {icon}
      </span>
      <span className="font-bold tracking-tight">{label}</span>
      {external && <span className="material-icons-outlined text-sm ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-white/40">open_in_new</span>}
    </Link>
  )
}
