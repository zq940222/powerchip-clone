'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ManufacturingPageProps {
  params: { locale: string }
}

export default function ManufacturingPage({ params: { locale } }: ManufacturingPageProps) {
  const facilities = [
    {
      name: 'Fab P1',
      zh: {
        desc: '第一座12吋晶圓廠,專注於DRAM及記憶體製造',
        capacity: '45K / Month',
        technology: 'Advanced DRAM'
      },
      en: {
        desc: 'First 12-inch wafer fab focusing on DRAM and memory manufacturing',
        capacity: '45K / Month',
        technology: 'Advanced DRAM'
      }
    },
    {
      name: 'Fab P2',
      zh: {
        desc: '第二座12吋晶圓廠,提供多元化晶圓代工服務',
        capacity: '45K / Month',
        technology: 'Logic & Specialty'
      },
      en: {
        desc: 'Second 12-inch wafer fab providing diversified foundry services',
        capacity: '45K / Month',
        technology: 'Logic & Specialty'
      }
    },
    {
      name: 'Fab P3',
      zh: {
        desc: '第三座12吋晶圓廠,擴充整體產能與技術能力',
        capacity: '40K / Month',
        technology: 'Next-Gen Process'
      },
      en: {
        desc: 'Third 12-inch wafer fab expanding overall capacity and capabilities',
        capacity: '40K / Month',
        technology: 'Next-Gen Process'
      }
    }
  ]

  const capabilities = [
    {
      zh: { title: '先進設備', desc: '配備業界最先進的半導體製造設備' },
      en: { title: 'Advanced Equipment', desc: 'Industry-leading semiconductor fabrication tools' },
      icon: 'precision_manufacturing'
    },
    {
      zh: { title: '品質管控', desc: '完善的品質管理系統,全程精密監控' },
      en: { title: 'Quality Control', desc: 'Total quality management from raw material to wafer' },
      icon: 'fact_check'
    },
    {
      zh: { title: '自動化生產', desc: '高度自動化的生產線,提升極致效率' },
      en: { title: 'Automated Line', desc: 'Smart factory automation reducing human variance' },
      icon: 'smart_toy'
    },
    {
      zh: { title: '環境控制', desc: '極致嚴格的無塵室環境,確保零瑕疵' },
      en: { title: 'Environment', desc: 'Extreme cleanroom standards for stable yield' },
      icon: 'ac_unit'
    }
  ]

  const processes = [
    { step: '01', title: locale === 'zh-TW' ? '晶圓準備' : 'Preparation', icon: 'settings_input_component' },
    { step: '02', title: locale === 'zh-TW' ? '薄膜沉積' : 'Deposition', icon: 'layers' },
    { step: '03', title: locale === 'zh-TW' ? '微影製程' : 'Lithography', icon: 'blur_on' },
    { step: '04', title: locale === 'zh-TW' ? '蝕刻製程' : 'Etching', icon: 'architecture' },
    { step: '05', title: locale === 'zh-TW' ? '離子植入' : 'Implantation', icon: 'grain' },
    { step: '06', title: locale === 'zh-TW' ? '化學機械研磨' : 'CMP', icon: 'cleaning_services' },
    { step: '07', title: locale === 'zh-TW' ? '金聯化製程' : 'Metallization', icon: 'cable' },
    { step: '08', title: locale === 'zh-TW' ? '測試檢驗' : 'Test & QA', icon: 'verified' }
  ]

  const stats = [
    { label: locale === 'zh-TW' ? '月總產能' : 'Total Capacity', value: '130K+' },
    { label: locale === 'zh-TW' ? '晶圓尺寸' : 'Wafer Size', value: '12-inch' },
    { label: locale === 'zh-TW' ? '製造據點' : 'Fab Units', value: '3' },
    { label: locale === 'zh-TW' ? '製造團隊' : 'Experts', value: '4,900+' }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology_manufacturing_hero.png"
            alt="Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-psmc-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-psmc-navy via-psmc-navy/20 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Industrial Prowess</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter">
              {locale === 'zh-TW' ? '製造能力' : 'Manufacturing'}
            </h1>
            <div className="w-24 h-2 bg-psmc-cyan mb-8 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW' ? '世界級製造設施與卓越生產流程,為全球客戶提供最穩定可靠的晶圓產品。' : 'World-class manufacturing facilities and optimized production flows, delivering the most reliable wafer products to global clients.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 relative -mt-24 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-[40px] p-12 text-center shadow-2xl border border-slate-50 hover:shadow-psmc-cyan/10 transition-shadow group">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-4 group-hover:text-psmc-cyan transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-black text-psmc-navy">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Facilities - 3D Card Style */}
      <section className="py-32">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Global Units</span>
            <h2 className="text-4xl md:text-5xl font-black text-psmc-navy tracking-tight uppercase">Production Facilities</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {facilities.map((fab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="group relative bg-slate-50 rounded-[60px] p-16 h-full hover:bg-psmc-navy transition-all duration-700 overflow-hidden text-center cursor-default">
                  <div className="w-24 h-24 rounded-[32px] bg-white shadow-xl flex items-center justify-center text-psmc-navy font-black text-3xl mx-auto mb-10 group-hover:bg-psmc-cyan group-hover:text-white transition-all duration-500">
                    P{index + 1}
                  </div>
                  <h3 className="text-3xl font-black text-psmc-navy mb-6 group-hover:text-white transition-colors">{fab.name}</h3>
                  <p className="text-slate-500 font-light mb-10 leading-relaxed group-hover:text-white/70 transition-colors">
                    {locale === 'zh-TW' ? fab.zh.desc : fab.en.desc}
                  </p>
                  <div className="space-y-4 pt-10 border-t border-slate-200 group-hover:border-white/10">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                      <span className="text-slate-400 group-hover:text-psmc-cyan">{locale === 'zh-TW' ? '產能' : 'Capacity'}</span>
                      <span className="text-psmc-navy group-hover:text-white">{locale === 'zh-TW' ? fab.zh.capacity : fab.en.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                      <span className="text-slate-400 group-hover:text-psmc-cyan">{locale === 'zh-TW' ? '核心技術' : 'Technology'}</span>
                      <span className="text-psmc-navy group-hover:text-white">{locale === 'zh-TW' ? fab.zh.technology : fab.en.technology}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid - Modern Dark Section */}
      <section className="py-32 bg-psmc-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">Industrial Vanguards</span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight uppercase leading-tight">Manufacturing Advantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {capabilities.map((cap, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-psmc-cyan mb-6 group-hover:bg-psmc-cyan group-hover:text-psmc-navy transition-all">
                        <span className="material-icons-outlined text-3xl">{cap.icon}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{locale === 'zh-TW' ? cap.zh.title : cap.en.title}</h4>
                      <p className="text-white/50 text-sm font-light leading-relaxed">{locale === 'zh-TW' ? cap.zh.desc : cap.en.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-4 gap-4">
              {processes.map((proc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-psmc-cyan/20 transition-all group"
                >
                  <span className="material-icons-outlined text-white/30 group-hover:text-psmc-cyan transition-colors">{proc.icon}</span>
                  <span className="text-[10px] font-black uppercase text-white/50 text-center px-2 group-hover:text-white line-clamp-1">{proc.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Large Clean View */}
      <section className="py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-2xl prose-slate max-w-none text-psmc-navy font-light leading-relaxed"
            >
              <h2 className="text-4xl md:text-5xl font-black text-psmc-navy mb-12 tracking-tighter uppercase border-b-8 border-psmc-cyan inline-block pb-4">卓越製造</h2>
              <p className="mb-10 first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-psmc-cyan">
                {locale === 'zh-TW'
                  ? '力積電擁有三座世界級的12吋晶圓廠,總月產能達130K,是台灣最大的記憶體製造商之一。我們的生產設施配備業界最先進的製造設備,包括最新一代的微影機、蝕刻機、薄膜沉積設備等,確保製程的精準度與穩定性。'
                  : 'PSMC operates three world-class 12-inch wafer fabs with a total monthly capacity of 130K. Our production facilities are equipped with the latest generation lithography systems and advanced automation.'}
              </p>
              <p className="mb-10">
                {locale === 'zh-TW'
                  ? '透過導入AI與大數據分析,我們不斷優化製程參數,提升良率與產能利用率。同時,我們也致力於降低能源消耗與環境衝擊,實現永續發展目標。'
                  : 'By integrating AI and big data analytics, we continuously optimize process parameters to achieve industry-leading yield and capacity utilization while prioritizing sustainability.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-black text-psmc-navy mb-10 tracking-tighter uppercase">Witness the Scale</h2>
          <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Our doors are open to global partners. Discover the future of semiconductor manufacturing with PSMC.
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="bg-psmc-navy text-white hover:bg-psmc-cyan px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:-translate-y-1">
              Contact our Production Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
