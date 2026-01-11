'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AboutPageProps {
  params: { locale: string }
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  const coreValues = [
    {
      zh: { title: '誠信', desc: '以誠信為本，建立長遠信任關係' },
      en: { title: 'Integrity', desc: 'Building long-term trust through absolute integrity' },
      icon: 'verified_user'
    },
    {
      zh: { title: '服務', desc: '以客戶為中心，提供超越期待的全球服務' },
      en: { title: 'Service', desc: 'Customer-centric focus delivering global excellence' },
      icon: 'room_service'
    },
    {
      zh: { title: '品質', desc: '追求極致品質，確保每一片晶圓的可靠性' },
      en: { title: 'Quality', desc: 'Pursuing ultimate quality and reliability in every wafer' },
      icon: 'high_quality'
    },
    {
      zh: { title: '創新', desc: '持續突破技術疆界，引領產業未來' },
      en: { title: 'Innovation', desc: 'Breaking technical boundaries and leading the industry' },
      icon: 'lightbulb'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about_hero.png"
            alt="About PSMC"
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
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Corporate Identity</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
              {locale === 'zh-TW' ? '關於力積電' : 'About PSMC'}
            </h1>
            <div className="w-24 h-2 bg-psmc-cyan mb-8 rounded-full" />
            <p className="text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              {locale === 'zh-TW'
                ? '致力於推動半導體前沿技術,提供全方位的專業晶圓代工製程與解決方案。'
                : 'Powerchip Semiconductor Manufacturing Corp. is at the forefront of the semiconductor evolution.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile - Elegant Split */}
      <section className="py-32 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-10 tracking-tight">
                  {locale === 'zh-TW' ? '公司簡介' : 'Company Profile'}
                </h2>
                <div className="space-y-8 text-xl text-slate-500 font-light leading-relaxed">
                  <p>
                    {locale === 'zh-TW'
                      ? '力晶積成電子製造股份有限公司（PSMC）成立於2019年，是由力晶科技股份有限公司重組而成的專業晶圓代工廠商。我們專注於提供世界級的晶圓代工服務,業務範圍涵蓋動態隨機存取記憶體（DRAM）、非揮發性記憶體（Flash）製造及晶圓代工兩大類別。'
                      : 'Powerchip Semiconductor Manufacturing Corp. (PSMC) was established in 2019 through a reorganization. We specialize in providing world-class foundry services across multiple semiconductor categories.'}
                  </p>
                  <p>
                    {locale === 'zh-TW'
                      ? '目前我們擁有三座12吋晶圓廠，總產能達130K，是台灣最大的記憶體製造商之一。我們擁有超過6,900位員工，致力於以創新技術滿足客戶需求。'
                      : 'Equipped with three 12-inch wafer fabs and a total capacity of 130K, we are a key player in the global semiconductor landscape, supported by over 6,900 dedicated professionals.'}
                  </p>
                </div>
                <div className="mt-12 flex gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-black text-psmc-navy">3</p>
                    <p className="text-xs font-black uppercase tracking-widest text-psmc-cyan">Advanced Fabs</p>
                  </div>
                  <div className="text-center border-l border-slate-200 pl-8">
                    <p className="text-4xl font-black text-psmc-navy">6.9K+</p>
                    <p className="text-xs font-black uppercase tracking-widest text-psmc-cyan">Employees</p>
                  </div>
                  <div className="text-center border-l border-slate-200 pl-8">
                    <p className="text-4xl font-black text-psmc-navy">130K</p>
                    <p className="text-xs font-black uppercase tracking-widest text-psmc-cyan">Monthly Capacity</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="/images/about_hero.png" alt="PSMC Profile" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy/60 to-transparent" />
                <div className="absolute bottom-16 left-16 right-16">
                  <p className="text-white text-2xl font-bold leading-tight">"Innovation is our core DNA, quality is our promise."</p>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-psmc-cyan/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Horizontal Premium Cards */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-16 rounded-[60px] shadow-xl border border-white h-full group hover:bg-psmc-navy transition-all duration-700">
                <span className="material-icons-outlined text-6xl text-psmc-cyan mb-10 group-hover:text-white transition-colors">visibility</span>
                <h3 className="text-4xl font-bold text-psmc-navy mb-8 group-hover:text-white transition-colors">
                  {locale === 'zh-TW' ? '願景' : 'Vision'}
                </h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                  {locale === 'zh-TW'
                    ? '成為全球領先的專業晶圓代工廠商，以創新技術驅動半導體產業發展。'
                    : 'To become a world-leading professional wafer foundry, driving semiconductor industry development with innovative technology.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-16 rounded-[60px] shadow-xl border border-white h-full group hover:bg-psmc-teal transition-all duration-700">
                <span className="material-icons-outlined text-6xl text-psmc-teal group-hover:text-white transition-colors mb-10">rocket_launch</span>
                <h3 className="text-4xl font-bold text-psmc-navy mb-8 group-hover:text-white transition-colors">
                  {locale === 'zh-TW' ? '使命' : 'Mission'}
                </h3>
                <p className="text-xl text-slate-500 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                  {locale === 'zh-TW'
                    ? '以創新技術、卓越品質及優質服務，滿足客戶需求，為股東創造價值，為社會貢獻力量。'
                    : 'To meet customer needs with innovative technology, excellent quality, and superior service, creating value for shareholders.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid with Hover Effects */}
      <section className="py-32">
        <div className="container-custom text-center">
          <span className="text-psmc-cyan text-xs font-black tracking-[0.5em] uppercase mb-4 block text-center">Foundation</span>
          <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-24 tracking-tight uppercase">
            {locale === 'zh-TW' ? '核心價值' : 'Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-12 rounded-[50px] bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-psmc-navy mb-10 group-hover:bg-psmc-navy group-hover:text-white mx-auto transition-all duration-500">
                    <span className="material-icons-outlined text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-psmc-navy mb-6 uppercase tracking-widest">{locale === 'zh-TW' ? value.zh.title : value.en.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{locale === 'zh-TW' ? value.zh.desc : value.en.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-psmc-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-psmc-cyan to-transparent translate-x-1/3 -translate-y-1/3" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase">Our History</h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            From our founding to our current global presence, explore the milestones that shaped PSMC.
          </p>
          <Link href={`/${locale}/about/history`}>
            <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-cyan/40">
              View Milestones
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
