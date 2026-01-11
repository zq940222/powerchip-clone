'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HistoryPageProps {
  params: { locale: string }
}

export default function HistoryPage({ params: { locale } }: HistoryPageProps) {
  const milestones = [
    { year: '2019', zh: '力晶積成電子製造股份有限公司正式成立', en: 'PSMC officially established through structural reorganization' },
    { year: '2020', zh: '擴大晶圓代工業務,強化全球客戶服務體系', en: 'Expanded foundry business and enhanced global customer service' },
    { year: '2021', zh: '產能持續擴充,銅鑼新廠動土典禮', en: 'Continued capacity expansion; groundbreaking for the new Tongluo Fab' },
    { year: '2022', zh: '推動綠色製造,落實永續發展目標(ESG)', en: 'Promoted green manufacturing and prioritized ESG sustainable goals' },
    { year: '2023', zh: '技術研發突破,邁向智慧製造新紀元', en: 'Breakthroughs in R&D, ushering in the era of smart manufacturing' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about_hero.png"
            alt="History"
            className="w-full h-full object-cover scale-110 grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-psmc-navy/90" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Our Journey</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
              {locale === 'zh-TW' ? '歷史沿革' : 'History'}
            </h1>
            <div className="w-24 h-1.5 bg-psmc-cyan mx-auto mb-8 rounded-full" />
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed italic">
              "Understanding our roots to build the future of Silicon."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Premium Vertical Design */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
        <div className="container-custom">
          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex items-center gap-6 mb-6 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-5xl md:text-7xl font-black text-psmc-navy shadow-text opacity-10">{item.year}</span>
                    <div className="w-12 h-0.5 bg-psmc-cyan" />
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold text-psmc-navy mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {locale === 'zh-TW' ? item.zh : item.en}
                  </h3>
                </div>
                <div className="relative z-10 hidden md:block">
                  <div className="w-16 h-16 rounded-full bg-psmc-navy border-4 border-white shadow-2xl flex items-center justify-center text-psmc-cyan">
                    <span className="material-icons-outlined">flag</span>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - Large Typography */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-2xl max-w-none text-psmc-navy font-light leading-relaxed"
            >
              <p className="mb-12 border-l-8 border-psmc-cyan pl-10">
                {locale === 'zh-TW'
                  ? '力晶積成電子製造股份有限公司於2019年正式成立,承襲力晶科技多年累積的技術實力與製造經驗,專注於晶圓代工服務。我們致力於提供客戶最優質的製造服務,並持續投資先進製程技術研發。'
                  : 'Founded in 2019, Powerchip Semiconductor Manufacturing Corp. inherits decades of excellence from its predecessor, focusing on specialized foundry services and cutting-edge silicon innovation.'}
              </p>
              <p className="mb-12">
                {locale === 'zh-TW'
                  ? '成立至今,我們不斷擴充產能,提升技術能力,並積極拓展全球市場。我們相信,唯有持續創新與進步,才能在競爭激烈的半導體產業中立足。'
                  : 'Since our inception, we have scaled our capacity and technical mastery, expanding into critical global markets with a relentless focus on progress.'}
              </p>
              <p className="text-psmc-cyan font-bold italic text-3xl">
                {locale === 'zh-TW'
                  ? '未來,我們將繼續秉持「誠信、服務、品質、創新」的核心價值,與客戶共同成長,為半導體產業的發展貢獻心力。'
                  : 'The future of PSMC is built on Integrity, Service, Quality, and Innovation—partnering for success.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <Link href={`/${locale}/about/team`}>
            <button className="bg-psmc-navy text-white hover:bg-psmc-cyan px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:-translate-y-1">
              Meet Our Leadership
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
