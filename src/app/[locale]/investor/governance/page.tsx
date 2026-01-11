'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GovernancePageProps {
  params: { locale: string }
}

export default function GovernancePage({ params: { locale } }: GovernancePageProps) {
  const principles = [
    {
      zh: {
        title: '保障股東權益',
        desc: '確保股東權益，提供透明且即時的資訊揭露'
      },
      en: {
        title: 'Protect Shareholder Rights',
        desc: 'Ensure shareholder rights with transparent and timely information disclosure'
      }
    },
    {
      zh: {
        title: '強化董事會職能',
        desc: '提升董事會運作效能，落實公司治理'
      },
      en: {
        title: 'Strengthen Board Functions',
        desc: 'Enhance board effectiveness and implement corporate governance'
      }
    },
    {
      zh: {
        title: '發揮監察人功能',
        desc: '健全監督機制，確保公司營運合規'
      },
      en: {
        title: 'Enhance Supervisory Functions',
        desc: 'Sound supervision mechanism ensuring compliant operations'
      }
    },
    {
      zh: {
        title: '尊重利害關係人',
        desc: '重視各利害關係人權益，促進永續發展'
      },
      en: {
        title: 'Respect Stakeholders',
        desc: 'Value stakeholder rights and promote sustainable development'
      }
    },
    {
      zh: {
        title: '提升資訊透明度',
        desc: '建立有效的內部控制與稽核制度'
      },
      en: {
        title: 'Enhance Information Transparency',
        desc: 'Establish effective internal control and audit systems'
      }
    }
  ]

  const boardStructure = [
    {
      zh: { role: '董事長', name: '黃崇仁', term: '2022-2025' },
      en: { role: 'Chairman', name: 'Frank Huang', term: '2022-2025' }
    },
    {
      zh: { role: '董事', name: '董事成員', term: '2022-2025' },
      en: { role: 'Directors', name: 'Board Members', term: '2022-2025' }
    },
    {
      zh: { role: '獨立董事', name: '獨立董事成員', term: '2022-2025' },
      en: { role: 'Independent Directors', name: 'Independent Board Members', term: '2022-2025' }
    }
  ]

  const committees = [
    {
      zh: {
        title: '審計委員會',
        desc: '負責公司財務報告、內部控制與稽核制度的監督',
        members: '由全體獨立董事組成'
      },
      en: {
        title: 'Audit Committee',
        desc: 'Responsible for supervising financial reporting, internal control, and audit systems',
        members: 'Composed of all independent directors'
      }
    },
    {
      zh: {
        title: '薪資報酬委員會',
        desc: '訂定並定期檢討董事及經理人績效評估與薪資報酬',
        members: '由獨立董事組成'
      },
      en: {
        title: 'Compensation Committee',
        desc: 'Establish and review performance evaluation and compensation for directors and managers',
        members: 'Composed of independent directors'
      }
    },
    {
      zh: {
        title: '永續發展委員會',
        desc: '推動企業永續發展策略，監督ESG執行成效',
        members: '由董事及管理階層組成'
      },
      en: {
        title: 'Sustainability Committee',
        desc: 'Promote corporate sustainability strategy and supervise ESG performance',
        members: 'Composed of directors and management'
      }
    }
  ]

  const policies = [
    {
      zh: { title: '公司章程', icon: '📋' },
      en: { title: 'Articles of Incorporation', icon: '📋' }
    },
    {
      zh: { title: '董事會議事規則', icon: '📝' },
      en: { title: 'Board Meeting Rules', icon: '📝' }
    },
    {
      zh: { title: '股東會議事規則', icon: '👥' },
      en: { title: 'Shareholder Meeting Rules', icon: '👥' }
    },
    {
      zh: { title: '誠信經營守則', icon: '⚖️' },
      en: { title: 'Ethical Management Code', icon: '⚖️' }
    },
    {
      zh: { title: '內部重大資訊處理', icon: '🔒' },
      en: { title: 'Internal Material Info', icon: '🔒' }
    },
    {
      zh: { title: '內部稽核制度', icon: '🔍' },
      en: { title: 'Internal Audit System', icon: '🔍' }
    }
  ]

  const features = [
    {
      zh: { title: '董事會成員', value: '9位' },
      en: { title: 'Board Members', value: '9' }
    },
    {
      zh: { title: '獨立董事', value: '3位' },
      en: { title: 'Independent Directors', value: '3' }
    },
    {
      zh: { title: '功能性委員會', value: '3個' },
      en: { title: 'Functional Committees', value: '3' }
    },
    {
      zh: { title: '開會頻率', value: '每季一次' },
      en: { title: 'Meeting Frequency', value: 'Quarterly' }
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/investor_governance_hero.png"
            alt="Governance Background"
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
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Corporate Standards</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {locale === 'zh-TW' ? '公司治理' : 'Corporate Governance'}
            </h1>
            <div className="w-20 h-1.5 bg-psmc-cyan mb-6 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl font-light">
              {locale === 'zh-TW' ? '落實卓越的公司治理體系，創造永續企業價值。' : 'Implementing an excellent corporate governance system to create sustainable corporate value.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-2xl rounded-[32px] overflow-hidden group">
                  <CardContent className="p-10 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      {locale === 'zh-TW' ? feature.zh.title : feature.en.title}
                    </p>
                    <p className="text-3xl font-black text-psmc-navy group-hover:text-psmc-cyan transition-colors">
                      {locale === 'zh-TW' ? feature.zh.value : feature.en.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Our Values</span>
              <h2 className="text-4xl font-bold text-psmc-navy tracking-tight">
                {locale === 'zh-TW' ? '治理原則' : 'Governance Principles'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-xl border border-white hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-psmc-navy mb-8 group-hover:bg-psmc-navy group-hover:text-white transition-all">
                  <span className="text-xl font-black">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4">{locale === 'zh-TW' ? principle.zh.title : principle.en.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{locale === 'zh-TW' ? principle.zh.desc : principle.en.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees - Premium List */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Structure</span>
              <h2 className="text-4xl font-bold text-psmc-navy tracking-tight">Functional Committees</h2>
            </div>

            <div className="space-y-8">
              {committees.map((committee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-10 bg-white p-10 rounded-[40px] shadow-lg border border-slate-50 group hover:shadow-2xl transition-all"
                >
                  <div className="w-24 h-24 rounded-3xl bg-psmc-navy flex items-center justify-center text-white shrink-0 group-hover:bg-psmc-cyan transition-colors">
                    <span className="material-icons-outlined text-4xl">account_balance</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-psmc-navy mb-4">{locale === 'zh-TW' ? committee.zh.title : committee.en.title}</h3>
                    <p className="text-slate-500 font-light mb-6 text-lg">{locale === 'zh-TW' ? committee.zh.desc : committee.en.desc}</p>
                    <div className="inline-block px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-psmc-navy uppercase tracking-widest">
                      {locale === 'zh-TW' ? committee.zh.members : committee.en.members}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies & Documents - Premium Grid */}
      <section className="py-24 bg-psmc-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Regulation</span>
            <h2 className="text-4xl font-bold tracking-tight">Governance Policies</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:bg-white hover:text-psmc-navy transition-all duration-500 cursor-pointer group group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform block">{policy.zh.icon}</div>
                  <h3 className="text-lg font-bold tracking-tight leading-snug">
                    {locale === 'zh-TW' ? policy.zh.title : policy.en.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-psmc-navy mb-8 tracking-tighter uppercase">Transparent Governance</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            PSMC maintains the highest standards of transparency and ethics. Find out more about our leadership and commitment to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={`/${locale}/about/team`}>
              <button className="bg-psmc-navy text-white hover:bg-psmc-cyan px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl">
                Our Leadership
              </button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <button className="border-2 border-psmc-navy text-psmc-navy hover:bg-psmc-navy hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all">
                Contact IR
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
