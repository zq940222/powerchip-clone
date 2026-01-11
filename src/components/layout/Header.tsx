'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('common')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: locale === 'zh-TW' ? '關於力積電' : 'ABOUT PSMC',
      href: `/${locale}/about`,
      children: [
        { name: locale === 'zh-TW' ? '公司簡介' : 'Company Profile', href: `/${locale}/about` },
        { name: locale === 'zh-TW' ? '歷史沿革' : 'History', href: `/${locale}/about/history` },
        { name: locale === 'zh-TW' ? '經營團隊' : 'Leadership', href: `/${locale}/about/team` },
      ]
    },
    {
      name: locale === 'zh-TW' ? '服務' : 'SERVICES',
      href: `/${locale}/technology`,
      children: [
        { name: locale === 'zh-TW' ? '晶圓代工' : 'Foundry Services', href: `/${locale}/technology/foundry` },
        { name: locale === 'zh-TW' ? '設計服務' : 'Design Services', href: `/${locale}/technology/design` },
        { name: locale === 'zh-TW' ? '製造服務' : 'Manufacturing', href: `/${locale}/technology/manufacturing` },
      ]
    },
    {
      name: locale === 'zh-TW' ? '投資人' : 'INVESTORS',
      href: `/${locale}/investor`,
      children: [
        { name: locale === 'zh-TW' ? '公司治理' : 'Governance', href: `/${locale}/investor/governance` },
        { name: locale === 'zh-TW' ? '財務資訊' : 'Financial', href: `/${locale}/investor/financial` },
      ]
    },
    { name: locale === 'zh-TW' ? '人才招募' : 'CAREER', href: `/${locale}/contact` },
    { name: locale === 'zh-TW' ? '新聞動態' : 'INSIGHTS', href: `/${locale}/news` },
    { name: locale === 'zh-TW' ? '永續發展' : 'ESG', href: `/${locale}/about` },
  ]

  const switchLocale = locale === 'zh-TW' ? 'en' : 'zh-TW'
  const switchLocaleLabel = locale === 'zh-TW' ? 'EN' : '繁中'

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/'

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "glass-nav py-3" : "bg-gradient-to-b from-black/40 to-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-psmc-cyan rounded-xl flex items-center justify-center text-psmc-navy font-black text-xl group-hover:bg-white transition-all duration-300 transform group-hover:rotate-12 shadow-lg">P</div>
            <span className={cn(
              "text-2xl font-black tracking-tighter transition-colors drop-shadow-md",
              "text-white"
            )}>PSMC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <div key={item.name} className="relative group py-2">
                {item.children ? (
                  <button
                    className={cn(
                      'text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-1 drop-shadow-md',
                      'text-white/90 hover:text-psmc-cyan'
                    )}
                  >
                    {item.name}
                    <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300 text-psmc-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 drop-shadow-md',
                      'text-white/90 hover:text-psmc-cyan'
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Premium Dropdown */}
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-psmc-navy/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden">
                      <div className="p-4 grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-psmc-cyan rounded-xl transition-all duration-200 group/item"
                          >
                            <span>{child.name}</span>
                            <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Active Indicator Line */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-psmc-cyan transition-all duration-500 rounded-full",
                  pathname.includes(item.href) ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </div>
            ))}

            {/* Language Switcher */}
            <div className={cn(
              "flex items-center gap-4 border-l pl-8 ml-2 h-6",
              "border-white/10"
            )}>
              <Link
                href={pathname.replace(`/${locale}`, `/${switchLocale}`)}
                className={cn(
                  "text-[10px] font-black tracking-widest px-3 py-1.5 rounded-lg border transition-all duration-300",
                  "border-psmc-cyan text-psmc-cyan hover:bg-psmc-cyan hover:text-white"
                )}
              >
                {switchLocaleLabel}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-3 rounded-2xl transition-all duration-300",
              "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "")} />
              <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "opacity-0 translate-x-10" : "")} />
              <span className={cn("w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-psmc-navy text-white z-40 transition-all duration-500 ease-in-out transform",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="pt-24 px-6 pb-10 h-full overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-white/5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-psmc-cyan uppercase tracking-[0.2em]">
                    {item.name}
                  </span>
                  {!item.children && (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/50"
                    >
                      →
                    </Link>
                  )}
                </div>
                {item.children && (
                  <div className="grid gap-4 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            href={pathname.replace(`/${locale}`, `/${switchLocale}`)}
            className="mt-10 block w-full py-4 text-center border-2 border-psmc-cyan text-psmc-cyan font-bold rounded-2xl uppercase tracking-[0.2em] hover:bg-psmc-cyan hover:text-white transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {switchLocale === 'en' ? 'Switch to English' : '切換至繁體中文'}
          </Link>
        </div>
      </div>
    </header>
  )
}
