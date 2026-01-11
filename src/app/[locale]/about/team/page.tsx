'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface TeamPageProps {
  params: { locale: string }
}

export default function TeamPage({ params: { locale } }: TeamPageProps) {
  const teams = [
    {
      zh: {
        title: '經營團隊',
        desc: '擁有豐富產業經驗的領導團隊,帶領公司持續成長'
      },
      en: {
        title: 'Management Team',
        desc: 'Leadership team with extensive industry experience driving continuous growth'
      },
      icon: 'business_center'
    },
    {
      zh: {
        title: '研發團隊',
        desc: '超過2,000位研發工程師,專注於先進製程技術開發'
      },
      en: {
        title: 'R&D Team',
        desc: 'Over 2,000 R&D engineers focused on advanced process technology development'
      },
      icon: 'biotech'
    },
    {
      zh: {
        title: '製造團隊',
        desc: '專業製造團隊,確保產品品質與交期'
      },
      en: {
        title: 'Manufacturing Team',
        desc: 'Professional manufacturing team ensuring product quality and delivery'
      },
      icon: 'precision_manufacturing'
    },
    {
      zh: {
        title: '品質團隊',
        desc: '嚴格品質管控,提供客戶最可靠的產品'
      },
      en: {
        title: 'Quality Team',
        desc: 'Rigorous quality control providing customers with the most reliable products'
      },
      icon: 'check_circle'
    }
  ]

  const leaders = [
    {
      name: locale === 'zh-TW' ? '黃崇仁' : 'Frank Huang',
      position: locale === 'zh-TW' ? '董事長' : 'Chairman',
      description: locale === 'zh-TW'
        ? '半導體產業資深經營者,帶領力積電持續成長與創新'
        : 'Veteran semiconductor industry leader driving continuous growth and innovation at PSMC'
    },
    {
      name: locale === 'zh-TW' ? '管理團隊' : 'Executive Officers',
      position: locale === 'zh-TW' ? '專業經理人' : 'Professional Management',
      description: locale === 'zh-TW'
        ? '由經驗豐富的專業經理人組成,致力於提升公司營運績效'
        : 'Strategic leadership focused on operational excellence and global growth'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about_hero.png"
            alt="Team Background"
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
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Our People</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {locale === 'zh-TW' ? '經營團隊' : 'Our Team'}
            </h1>
            <div className="w-20 h-1.5 bg-psmc-cyan mb-6 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW' ? '匯聚全球精英，以卓越的專業素養與創新精神，共同成就半導體領航地位。' : 'Uniting global elite professionals with exceptional expertise and innovative spirit to lead the semiconductor industry.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Large Portraits */}
      <section className="py-32">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy tracking-tight uppercase">Strategic Direction</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-50 rounded-[60px] p-12 h-full border border-slate-100 group-hover:bg-psmc-navy transition-all duration-700 overflow-hidden shadow-xl group-hover:shadow-2xl">
                  <div className="relative mb-10">
                    <div className="w-24 h-24 rounded-[32px] bg-psmc-navy flex items-center justify-center text-4xl font-black text-psmc-cyan group-hover:bg-psmc-cyan group-hover:text-psmc-navy transition-all duration-500 shadow-lg">
                      {leader.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-psmc-navy shadow-lg group-hover:scale-110 transition-transform">
                      <span className="material-icons-outlined">verified</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-psmc-navy mb-2 group-hover:text-white transition-colors">{leader.name}</h3>
                  <p className="text-psmc-cyan font-black uppercase tracking-widest text-xs mb-8">{leader.position}</p>
                  <p className="text-slate-500 font-light text-lg leading-relaxed group-hover:text-white/70 transition-colors">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure - Grid of Experts */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block text-center">Organizational Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-8 tracking-tighter uppercase">Team Structure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 h-full hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-psmc-navy mb-8 group-hover:bg-psmc-navy group-hover:text-white transition-all">
                    <span className="material-icons-outlined text-3xl">{team.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                    {locale === 'zh-TW' ? team.zh.title : team.en.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {locale === 'zh-TW' ? team.zh.desc : team.en.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 bg-psmc-navy overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase">Shape the future of silicon</h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            We are always looking for visionary talents to join our elite teams across the globe.
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="bg-psmc-crimson text-white hover:bg-white hover:text-psmc-navy px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-crimson/40">
              Join our elite team
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
