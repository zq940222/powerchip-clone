'use client'

import Hero from '@/components/sections/Hero'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HomePageProps {
  params: { locale: string }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const services = [
    { icon: 'memory', name: locale === 'zh-TW' ? '晶圓代工服務' : 'Foundry Services', href: '/services/foundry' },
    { icon: 'architecture', name: locale === 'zh-TW' ? '設計服務' : 'Design Services', href: '/services/design' },
    { icon: 'build', name: locale === 'zh-TW' ? '檢修服務' : 'Overhaul Services', href: '/services/overhaul' },
    { icon: 'precision_manufacturing', name: locale === 'zh-TW' ? '製造服務' : 'Manufacturing', href: '/services/manufacturing' },
    { icon: 'biotech', name: locale === 'zh-TW' ? '記憶體測試' : 'Memory Testing', href: '/services/memory-testing' },
  ]

  // Mock news since this is now a Client Component for premium animations
  // In a real scenario, we'd fetch this from an API or use a separate Server Component for the news section
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    fetch(`/api/news?pageSize=3&published=true`)
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.data)) {
          setNews(json.data)
        }
      })
      .catch(() => { })
  }, [])

  return (
    <div className="overflow-hidden">
      <Hero locale={locale} />

      {/* Quick Services Bar */}
      <section className="bg-psmc-navy text-white py-16 relative z-10 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-psmc-cyan/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${locale}${service.href}`} className="group cursor-pointer block text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-psmc-cyan group-hover:scale-110 group-hover:rotate-6">
                      <span className="material-icons-outlined text-3xl text-psmc-cyan group-hover:text-psmc-navy transition-colors">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 group-hover:text-psmc-cyan transition-colors leading-relaxed">
                      {service.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight on Sustainability - ESG Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden py-24">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/images/sustainability_nature.png"
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-psmc-teal/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-psmc-navy via-psmc-navy/60 to-transparent" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-xl text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-psmc-teal-bright text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 rounded-full shadow-lg">
                ESG Focus
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
                {locale === 'zh-TW' ? '聚焦永續發展' : 'Spotlight on Sustainability'}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-light">
                {locale === 'zh-TW'
                  ? '力積電致力於環境友善措施並履行企業公民責任。我們相信為半導體產業打造更綠色的未來。'
                  : 'PSMC is committed to environmentally friendly measures and fulfilling corporate citizen responsibility. We believe in building a greener future for the semiconductor industry.'}
              </p>
              <Link href={`/${locale}/about`}>
                <button className="bg-white text-psmc-teal hover:bg-psmc-cyan hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-cyan/30 flex items-center gap-4 group">
                  {locale === 'zh-TW' ? '我們的價值' : 'Our Values'}
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Story Section */}
      <section className="bg-psmc-navy py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/images/investment_globe.png"
            alt="Digital Globe"
            className="w-full h-full object-contain object-right"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div
              className="flex-1 hidden md:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-psmc-cyan/20 blur-[100px] rounded-full" />
                <img
                  src="/images/investment_globe.png"
                  alt="Investment Story"
                  className="w-full max-w-lg mx-auto relative z-10 drop-shadow-[0_0_80px_rgba(0,194,224,0.4)]"
                />
              </div>
            </motion.div>

            <div className="flex-1 text-white">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">
                  {locale === 'zh-TW' ? '投資人服務' : 'Investor Relations'}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">
                  {locale === 'zh-TW' ? '力積電的投資故事' : 'Investment Story of PSMC'}
                </h2>
                <p className="text-lg text-white/70 mb-12 leading-relaxed font-light">
                  {locale === 'zh-TW'
                    ? '建立高效管理團隊；為客戶提供優質產品和服務，提升人們的生活品質，創造股東價值。'
                    : 'Establish efficient management teams; provide customers with quality products and services to improve people\'s quality of life and create shareholder value.'}
                </p>
                <Link href={`/${locale}/investors`}>
                  <button className="bg-psmc-cyan text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-psmc-navy transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-psmc-cyan focus:ring-offset-2 group flex items-center gap-4">
                    {locale === 'zh-TW' ? '了解更多' : 'Learn More'}
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] group">
                <img
                  src="/images/career_teamwork.png"
                  alt="Bright Career"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-3xl font-bold">Join Our Elite Team</p>
                  <p className="text-white/80 font-light">Shape the future of Silicon</p>
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-psmc-crimson text-xs font-black tracking-[0.4em] uppercase mb-6 block">
                  {locale === 'zh-TW' ? '人才招募' : 'Career Opportunities'}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-10 leading-tight tracking-tighter">
                  {locale === 'zh-TW' ? '開啟您的光明職涯' : 'Start Your Bright Career'}
                </h2>
                <p className="text-lg text-slate-500 mb-12 leading-relaxed font-light">
                  {locale === 'zh-TW'
                    ? '我們相信人才對於維持公司競爭優勢至關重要。加入我們，共同塑造科技與創新的未來。'
                    : 'We believe that talents are crucial to maintaining competitive advantages for a company. Join us in shaping the future of technology and innovation.'}
                </p>
                <Link href={`/${locale}/contact`}>
                  <button className="bg-psmc-crimson text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-psmc-navy transition-all shadow-[0_20px_40px_rgba(211,47,47,0.3)] hover:shadow-psmc-navy/30 flex items-center gap-4 group">
                    {locale === 'zh-TW' ? '加入我們' : 'Join Us Now'}
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - Premium Cards */}
      <section className="py-32 bg-psmc-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Insights</span>
              <h2 className="text-4xl md:text-6xl font-bold text-psmc-navy tracking-tighter">Latest Updates</h2>
            </div>
            <Link href={`/${locale}/insights`} className="group flex items-center gap-3 text-psmc-navy font-bold uppercase tracking-widest text-xs border-b-2 border-psmc-cyan pb-2 hover:text-psmc-cyan transition-colors">
              Read All Insights
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${locale}/insights/press/${item.id}`} className="group block bg-white rounded-[32px] p-10 shadow-xl hover:shadow-2xl transition-all h-full border border-slate-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-1 h-6 bg-psmc-cyan rounded-full" />
                    <span className="text-xs font-black text-psmc-cyan uppercase tracking-widest">
                      {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString(locale) : 'Update'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-psmc-navy group-hover:text-psmc-cyan transition-colors leading-tight mb-8">
                    {locale === 'zh-TW' ? item.titleZh : item.titleEn}
                  </h3>
                  <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Read Article</span>
                    <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-psmc-navy group-hover:bg-psmc-cyan group-hover:text-white transition-all">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Default Cards if no news */}
            {news.length === 0 && Array(3).fill(0).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-[32px] p-10 shadow-xl h-full border border-slate-100 opacity-50 animate-pulse">
                  <div className="w-24 h-4 bg-slate-200 rounded-full mb-8" />
                  <div className="w-full h-8 bg-slate-200 rounded-lg mb-4" />
                  <div className="w-2/3 h-8 bg-slate-200 rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About PSMC Card - Large Horizontal Overlay */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="relative rounded-[40px] overflow-hidden bg-psmc-navy p-12 md:p-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-psmc-navy via-psmc-navy/80 to-transparent z-10" />
              <motion.div
                className="w-1/2 ml-auto h-full bg-psmc-cyan/5 blur-[120px] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-20 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase">
                {locale === 'zh-TW' ? '我們是力積電' : 'We are PSMC'}
              </h2>
              <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed font-light">
                {locale === 'zh-TW'
                  ? '定位為專業的晶圓代工服務提供者，秉持誠信、優質服務、高品質和創新的企業文化，迎接未來的挑戰。'
                  : 'Positioned as a professional wafer foundry service provider and upholding our corporate culture of integrity, excellent service, high quality and innovation to face the upcoming challenge.'}
              </p>
              <Link href={`/${locale}/about`}>
                <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl flex items-center gap-4 group">
                  {locale === 'zh-TW' ? '企業簡介' : 'Company Profile'}
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
