'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface DesignPageProps {
  params: { locale: string }
}

export default function DesignPage({ params: { locale } }: DesignPageProps) {
  const services = [
    {
      zh: {
        title: 'IP 設計服務',
        desc: '提供經過驗證的矽智財(IP)解決方案,加速產品開發時程',
        features: ['記憶體IP', '介面IP', '類比IP', '客製化IP開發']
      },
      en: {
        title: 'IP Design Services',
        desc: 'Providing proven silicon IP solutions to accelerate product development',
        features: ['Memory IP', 'Interface IP', 'Analog IP', 'Custom IP development']
      },
      icon: 'auto_awesome'
    },
    {
      zh: {
        title: 'ASIC 設計服務',
        desc: '完整的ASIC設計服務,從規格定義到晶片驗證',
        features: ['規格定義', 'RTL設計', '驗證與測試', '佈局設計']
      },
      en: {
        title: 'ASIC Design Services',
        desc: 'Complete ASIC design services from specification to chip verification',
        features: ['Specification', 'RTL design', 'Verification & testing', 'Layout design']
      },
      icon: 'architecture'
    },
    {
      zh: {
        title: 'DFT 設計服務',
        desc: '可測試性設計服務,提升良率與測試效率',
        features: ['掃描鏈插入', 'BIST設計', '邊界掃描', '故障分析']
      },
      en: {
        title: 'DFT Design Services',
        desc: 'Design-for-Test services to improve yield and test efficiency',
        features: ['Scan chain insertion', 'BIST design', 'Boundary scan', 'Fault analysis']
      },
      icon: 'api'
    },
    {
      zh: {
        title: '技術諮詢服務',
        desc: '專業的技術諮詢,協助客戶優化設計與製程',
        features: ['製程選擇建議', '設計審查', '良率提升', '成本優化']
      },
      en: {
        title: 'Technical Consulting',
        desc: 'Professional technical consulting to optimize design and process',
        features: ['Process selection', 'Design review', 'Yield improvement', 'Cost optimization']
      },
      icon: 'support_agent'
    }
  ]

  const tools = [
    {
      zh: { name: 'PDK', desc: '製程設計套件,提供完整的製程參數與模型' },
      en: { name: 'PDK', desc: 'Process Design Kit with complete process parameters and models' }
    },
    {
      zh: { name: 'Design Rule', desc: '設計規則手冊,確保設計符合製程要求' },
      en: { name: 'Design Rule', desc: 'Design rule manual ensuring design meets process requirements' }
    },
    {
      zh: { name: 'SPICE Model', desc: '精準的電路模擬模型,支援設計驗證' },
      en: { name: 'SPICE Model', desc: 'Accurate circuit simulation models for design verification' }
    },
    {
      zh: { name: 'Standard Cell', desc: '標準元件庫,加速數位電路設計' },
      en: { name: 'Standard Cell', desc: 'Standard cell library accelerating digital circuit design' }
    }
  ]

  const workflow = [
    {
      step: '01',
      zh: { title: '需求分析', desc: '與客戶討論專案需求,定義產品規格' },
      en: { title: 'Requirement Analysis', desc: 'Discuss project requirements and define product specifications' }
    },
    {
      step: '02',
      zh: { title: '設計開發', desc: '進行電路設計、模擬與驗證' },
      en: { title: 'Design Development', desc: 'Conduct circuit design, simulation and verification' }
    },
    {
      step: '03',
      zh: { title: '佈局實現', desc: '完成實體佈局設計與優化' },
      en: { title: 'Layout Implementation', desc: 'Complete physical layout design and optimization' }
    },
    {
      step: '04',
      zh: { title: '測試驗證', desc: '進行功能驗證與測試' },
      en: { title: 'Test & Verification', desc: 'Conduct functional verification and testing' }
    },
    {
      step: '05',
      zh: { title: '量產準備', desc: '協助將設計導入量產流程' },
      en: { title: 'Mass Production', desc: 'Assist in bringing the design into mass production' }
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology_design_hero.png"
            alt="Design Services Background"
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
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Creative Integration</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
              {locale === 'zh-TW' ? '設計服務' : 'Design Services'}
            </h1>
            <div className="w-24 h-2 bg-psmc-cyan mb-8 rounded-full" />
            <p className="text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW'
                ? '全方位的設計支援與資源，助您的創新構想跨越技術門檻。'
                : 'Comprehensive design support and resources to help your innovative ideas cross the technical threshold.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Grid - Tools */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-10 rounded-[32px] shadow-2xl h-full border border-slate-50 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-psmc-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-black text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">{tool.zh.name || tool.en.name}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{locale === 'zh-TW' ? tool.zh.desc : tool.en.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown - Premium Rows */}
      <section className="py-32 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">End-to-End Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy tracking-tight uppercase">Professional Design Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-50 rounded-[40px] p-12 hover:bg-psmc-navy transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="material-icons-outlined text-[120px]">{service.icon}</span>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-psmc-navy mb-10 group-hover:bg-psmc-cyan group-hover:text-white transition-all">
                    <span className="material-icons-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-psmc-navy mb-6 group-hover:text-white transition-colors">
                    {locale === 'zh-TW' ? service.zh.title : service.en.title}
                  </h3>
                  <p className="text-slate-500 font-light text-lg mb-10 leading-relaxed group-hover:text-white/70 transition-colors">
                    {locale === 'zh-TW' ? service.zh.desc : service.en.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {(locale === 'zh-TW' ? service.zh.features : service.en.features).map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-2 text-sm font-bold text-psmc-navy group-hover:text-psmc-cyan transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-psmc-cyan" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Workflow - Vertical Timeline */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-6 block">Our Process</span>
                <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-8 tracking-tighter">Design for Success</h2>
                <p className="text-slate-500 font-light leading-relaxed text-lg italic">
                  "From initial concept to full-scale production readiness, our structured design workflow ensures maximum efficiency and success."
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8">
              {workflow.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex gap-8 items-center hover:shadow-xl transition-all group"
                >
                  <div className="text-5xl font-black text-slate-100 group-hover:text-psmc-cyan/20 transition-colors shrink-0">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-psmc-navy mb-2">{locale === 'zh-TW' ? item.zh.title : item.en.title}</h4>
                    <p className="text-slate-500 font-light">{locale === 'zh-TW' ? item.zh.desc : item.en.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-psmc-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-psmc-cyan/10 to-transparent" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter uppercase">Design Your Future</h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light">
            Leverage our expert design teams and proven IP blocks to bring your next-generation chip to market faster.
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="bg-white text-psmc-navy hover:bg-psmc-cyan hover:text-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl">
              Start Collaboration
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
