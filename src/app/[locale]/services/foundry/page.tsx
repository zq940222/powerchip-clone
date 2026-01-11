'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface FoundryPageProps {
  params: { locale: string }
}

export default function FoundryPage({ params: { locale } }: FoundryPageProps) {
  const services = [
    {
      zh: {
        title: '邏輯製程',
        desc: '提供 40nm 至 0.11μm 邏輯製程服務,適用於各類晶片設計',
        features: ['高效能運算', '低功耗設計', '混合訊號整合']
      },
      en: {
        title: 'Logic Process',
        desc: 'Offering 40nm to 0.11μm logic process services for various chip designs',
        features: ['High-performance computing', 'Low-power design', 'Mixed-signal integration']
      },
      icon: 'psychology'
    },
    {
      zh: {
        title: '電源管理IC',
        desc: '專業的電源管理晶片製造服務,支援多種應用場景',
        features: ['高壓製程', '低雜訊設計', '高效能轉換']
      },
      en: {
        title: 'Power Management IC',
        desc: 'Professional power management chip manufacturing services for various applications',
        features: ['High-voltage process', 'Low-noise design', 'High-efficiency conversion']
      },
      icon: 'power'
    },
    {
      zh: {
        title: '影像感測器',
        desc: '先進的影像感測器製程技術,提供高品質影像解決方案',
        features: ['背照式技術', '高靈敏度', '低照度性能']
      },
      en: {
        title: 'Image Sensor',
        desc: 'Advanced image sensor process technology providing high-quality imaging solutions',
        features: ['Backside illumination', 'High sensitivity', 'Low-light performance']
      },
      icon: 'camera_alt'
    },
    {
      zh: {
        title: '特殊應用IC',
        desc: '客製化特殊應用晶片製造,滿足特定產業需求',
        features: ['客製化設計', '快速量產', '彈性製程']
      },
      en: {
        title: 'Specialty Application IC',
        desc: 'Customized specialty application chip manufacturing for specific industry needs',
        features: ['Customized design', 'Fast mass production', 'Flexible process']
      },
      icon: 'extension'
    }
  ]

  const advantages = [
    {
      zh: {
        title: '完整製程平台',
        desc: '從40nm至0.11μm,提供完整的製程技術選擇'
      },
      en: {
        title: 'Complete Process Platform',
        desc: 'From 40nm to 0.11μm, offering complete process technology options'
      }
    },
    {
      zh: {
        title: '高良率保證',
        desc: '嚴格的品質管控系統,確保產品良率與可靠度'
      },
      en: {
        title: 'High Yield Guarantee',
        desc: 'Rigorous quality control system ensuring product yield and reliability'
      }
    },
    {
      zh: {
        title: '快速交付',
        desc: '優化的生產流程,提供快速且彈性的交付服務'
      },
      en: {
        title: 'Fast Delivery',
        desc: 'Optimized production process providing fast and flexible delivery services'
      }
    },
    {
      zh: {
        title: '技術支援',
        desc: '專業的技術團隊,提供從設計到量產的全程支援'
      },
      en: {
        title: 'Technical Support',
        desc: 'Professional technical team providing full support from design to mass production'
      }
    }
  ]

  const applications = [
    { zh: '物聯網 (IoT)', en: 'Internet of Things (IoT)' },
    { zh: '消費性電子', en: 'Consumer Electronics' },
    { zh: '汽車電子', en: 'Automotive Electronics' },
    { zh: '通訊設備', en: 'Communication Equipment' },
    { zh: '工業控制', en: 'Industrial Control' },
    { zh: '穿戴式裝置', en: 'Wearable Devices' }
  ]

  return (
    <div className="bg-white text-psmc-navy">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology_foundry_hero.png"
            alt="Foundry Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-psmc-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy via-psmc-navy/20 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Manufacturing Excellence</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {locale === 'zh-TW' ? '晶圓代工服務' : 'Foundry Services'}
            </h1>
            <div className="w-20 h-1.5 bg-psmc-cyan mb-6 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW' ? '提供卓越的晶圓製造服務，滿足客戶多元化的半導體解決方案。' : 'Providing exceptional wafer manufacturing services to meet diverse semiconductor solutions.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Key Stats */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-10 rounded-[32px] shadow-2xl h-full border border-slate-50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-icons-outlined text-6xl text-psmc-navy">verified</span>
                  </div>
                  <h3 className="text-xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">{locale === 'zh-TW' ? adv.zh.title : adv.en.title}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{locale === 'zh-TW' ? adv.zh.desc : adv.en.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-32">
        <div className="container-custom text-center md:text-left">
          <div className="mb-24 text-center">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Core Process Platforms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-50 rounded-[48px] p-12 h-full flex flex-col md:flex-row gap-10 group hover:bg-psmc-navy transition-all duration-700">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-psmc-navy shrink-0 group-hover:bg-psmc-cyan group-hover:text-white transition-all duration-500">
                    <span className="material-icons-outlined text-4xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-psmc-navy mb-6 group-hover:text-white transition-colors">
                      {locale === 'zh-TW' ? service.zh.title : service.en.title}
                    </h3>
                    <p className="text-slate-500 font-light text-lg mb-8 leading-relaxed group-hover:text-white/70 transition-colors">
                      {locale === 'zh-TW' ? service.zh.desc : service.en.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {(locale === 'zh-TW' ? service.zh.features : service.en.features).map((feat, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-psmc-navy group-hover:text-psmc-cyan group-hover:bg-white/5 transition-all">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">Target Markets</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight uppercase">Application Fields</h2>
              <div className="grid grid-cols-2 gap-6">
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-psmc-cyan transition-all cursor-pointer group"
                  >
                    <div className="w-2 h-2 rounded-full bg-psmc-cyan group-hover:scale-150 transition-transform" />
                    <span className="font-bold text-psmc-navy">{locale === 'zh-TW' ? app.zh : app.en}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-10 bg-psmc-cyan/10 blur-[100px] rounded-full" />
                <img
                  src="/images/technology_foundry_hero.png"
                  alt="Application"
                  className="rounded-[60px] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-32">
        <div className="container-custom">
          <motion.div
            className="bg-psmc-navy rounded-[60px] p-16 md:p-32 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-psmc-cyan/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Partner with us</h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                Join the global leaders who trust PSMC for their critical semiconductor manufacturing needs.
              </p>
              <Link href={`/${locale}/contact`}>
                <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-cyan/40">
                  Get in touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
