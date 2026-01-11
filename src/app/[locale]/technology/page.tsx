'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface TechnologyPageProps {
  params: { locale: string }
}

export default function TechnologyPage({ params: { locale } }: TechnologyPageProps) {
  const technologies = [
    {
      zh: {
        title: 'DRAM 製程技術',
        desc: '提供先進的DRAM製程技術,包含DDR4、DDR5等主流記憶體製造服務'
      },
      en: {
        title: 'DRAM Process Technology',
        desc: 'Advanced DRAM process technology including DDR4, DDR5 and other mainstream memory manufacturing services'
      },
      icon: 'memory'
    },
    {
      zh: {
        title: 'Flash 製程技術',
        desc: '專業的Flash記憶體製造技術,應用於各類儲存解決方案'
      },
      en: {
        title: 'Flash Process Technology',
        desc: 'Professional Flash memory manufacturing technology for various storage solutions'
      },
      icon: 'sd_card'
    },
    {
      zh: {
        title: '特殊製程技術',
        desc: '提供多元化的特殊製程服務,滿足客戶特定應用需求'
      },
      en: {
        title: 'Specialty Process Technology',
        desc: 'Diversified specialty process services to meet specific customer application requirements'
      },
      icon: 'settings_input_composite'
    },
    {
      zh: {
        title: '先進封裝技術',
        desc: '整合先進封裝技術,提升產品效能與可靠度'
      },
      en: {
        title: 'Advanced Packaging Technology',
        desc: 'Integrated advanced packaging technology to enhance product performance and reliability'
      },
      icon: 'layers'
    }
  ]

  const capabilities = [
    {
      zh: { title: '製程節點', value: '12吋晶圓' },
      en: { title: 'Process Node', value: '12-inch Wafer' }
    },
    {
      zh: { title: '月產能', value: '130K' },
      en: { title: 'Monthly Capacity', value: '130K' }
    },
    {
      zh: { title: '晶圓廠數量', value: '3座 (P1/P2/P3)' },
      en: { title: 'Number of Fabs', value: '3 Fabs (P1/P2/P3)' }
    },
    {
      zh: { title: '研發人員', value: '2,000+' },
      en: { title: 'R&D Staff', value: '2,000+' }
    }
  ]

  const innovations = [
    {
      zh: {
        title: '持續技術創新',
        desc: '投入大量資源於研發,不斷突破技術瓶頸,提升製程能力'
      },
      en: {
        title: 'Continuous Innovation',
        desc: 'Significant R&D investment to continuously break through technical bottlenecks and enhance process capabilities'
      }
    },
    {
      zh: {
        title: '綠色製造',
        desc: '推動綠色製造,降低能源消耗,實現永續發展目標'
      },
      en: {
        title: 'Green Manufacturing',
        desc: 'Promoting green manufacturing to reduce energy consumption and achieve sustainability goals'
      }
    },
    {
      zh: {
        title: '智慧製造',
        desc: '導入AI與大數據分析,優化製程控制,提升良率與效率'
      },
      en: {
        title: 'Smart Manufacturing',
        desc: 'Implementing AI and big data analytics to optimize process control and improve yield and efficiency'
      }
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology_hero.png"
            alt="Technology Background"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-psmc-navy/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-psmc-navy via-psmc-navy/40 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Innovation at Scale</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
              {locale === 'zh-TW' ? '領先技術' : 'Technology'}
            </h1>
            <div className="w-24 h-2 bg-psmc-cyan mb-8 rounded-full" />
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW'
                ? '致力於推動半導體前沿技術,提供全方位的專業晶圓代工製程與解決方案。'
                : 'Committed to driving the frontiers of semiconductor technology, providing full-spectrum professional wafer foundry processes and solutions.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Bar */}
      <section className="py-24 relative -mt-24 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-[32px] p-10 shadow-2xl border border-slate-50 text-center hover:shadow-psmc-cyan/10 transition-shadow">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4">
                    {locale === 'zh-TW' ? cap.zh.title : cap.en.title}
                  </p>
                  <p className="text-3xl font-black text-psmc-navy">
                    {locale === 'zh-TW' ? cap.zh.value : cap.en.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies - Premium Grid */}
      <section className="py-32 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Core Competencies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy tracking-tight">
                {locale === 'zh-TW' ? '核心製程技術' : 'Process Technologies'}
              </h2>
            </div>
            <Link href={`/${locale}/technology/foundry`} className="group flex items-center gap-3 text-psmc-navy font-bold uppercase tracking-widest text-xs border-b-2 border-psmc-cyan pb-2 hover:text-psmc-cyan transition-colors">
              Explore Foundry Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group bg-slate-50 rounded-[40px] p-10 h-full hover:bg-psmc-navy transition-all duration-500 cursor-pointer">
                  <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center text-psmc-navy mb-10 group-hover:bg-psmc-cyan group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                    <span className="material-icons-outlined text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-psmc-navy mb-6 group-hover:text-white transition-colors">
                    {locale === 'zh-TW' ? tech.zh.title : tech.en.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                    {locale === 'zh-TW' ? tech.zh.desc : tech.en.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section - Split Layout */}
      <section className="py-32 bg-psmc-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">Future Ready</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
                  {locale === 'zh-TW' ? '創新與智慧製造' : 'Innovation & Smart Manufacturing'}
                </h2>
                <div className="space-y-10">
                  {innovations.map((inn, index) => (
                    <div key={index} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-full border border-psmc-cyan flex items-center justify-center shrink-0 text-psmc-cyan font-black group-hover:bg-psmc-cyan group-hover:text-psmc-navy transition-all">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">{locale === 'zh-TW' ? inn.zh.title : inn.en.title}</h4>
                        <p className="text-white/60 font-light leading-relaxed">{locale === 'zh-TW' ? inn.zh.desc : inn.en.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[60px] overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/technology_hero.png"
                  alt="Innovation"
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy to-transparent" />
                <div className="absolute bottom-16 left-16">
                  <p className="text-3xl font-black mb-2">2,000+</p>
                  <p className="text-psmc-cyan font-black uppercase tracking-widest text-xs">Dedicated R&D Experts</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-psmc-navy mb-8 tracking-tighter uppercase">Powering the Next Era</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how our advanced foundry services can bring your designs to life with unmatched precision and performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={`/${locale}/technology/foundry`}>
              <button className="bg-psmc-navy text-white hover:bg-psmc-cyan px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl">
                Foundry Services
              </button>
            </Link>
            <Link href={`/${locale}/technology/design`}>
              <button className="border-2 border-psmc-navy text-psmc-navy hover:bg-psmc-navy hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all">
                Design Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
