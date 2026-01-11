'use client'

import { motion } from 'framer-motion'

interface MilestonePageProps {
  params: { locale: string }
}

export default function MilestonePage({ params: { locale } }: MilestonePageProps) {
  const milestones = [
    {
      year: '2017',
      title: locale === 'zh-TW' ? '公司成立' : 'Company Establishment',
      description: locale === 'zh-TW'
        ? '力積電正式成立,定位為專業晶圓代工服務提供者'
        : 'PSMC was officially established as a professional wafer foundry service provider'
    },
    {
      year: '2018',
      title: locale === 'zh-TW' ? '產能擴充' : 'Capacity Expansion',
      description: locale === 'zh-TW'
        ? '擴充12吋晶圓廠產能,提升競爭力'
        : 'Expanded 12-inch wafer fab capacity to enhance competitiveness'
    },
    {
      year: '2019',
      title: locale === 'zh-TW' ? '技術突破' : 'Technology Breakthrough',
      description: locale === 'zh-TW'
        ? '成功開發先進製程技術,獲得客戶認可'
        : 'Successfully developed advanced process technology and gained customer recognition'
    },
    {
      year: '2020',
      title: locale === 'zh-TW' ? '國際認證' : 'International Certification',
      description: locale === 'zh-TW'
        ? '通過ISO國際品質認證,提升服務品質'
        : 'Achieved ISO international quality certification to enhance service quality'
    },
    {
      year: '2021',
      title: locale === 'zh-TW' ? '市場拓展' : 'Market Expansion',
      description: locale === 'zh-TW'
        ? '拓展國際市場,建立全球合作夥伴關係'
        : 'Expanded international market and established global partnerships'
    },
    {
      year: '2022',
      title: locale === 'zh-TW' ? '永續發展' : 'Sustainability',
      description: locale === 'zh-TW'
        ? '推動ESG永續發展策略,實踐企業社會責任'
        : 'Promoted ESG sustainability strategy and practiced corporate social responsibility'
    },
    {
      year: '2023',
      title: locale === 'zh-TW' ? '創新突破' : 'Innovation Breakthrough',
      description: locale === 'zh-TW'
        ? '推出創新解決方案,持續引領產業發展'
        : 'Launched innovative solutions and continued to lead industry development'
    },
    {
      year: '2024',
      title: locale === 'zh-TW' ? '卓越成就' : 'Excellence Achievement',
      description: locale === 'zh-TW'
        ? '獲得多項產業獎項,鞏固市場領導地位'
        : 'Received multiple industry awards and consolidated market leadership position'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy via-psmc-navy to-psmc-teal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '里程碑' : 'Milestone'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '回顧力積電的成長歷程與重要時刻'
                : 'Reviewing PSMC\'s growth journey and important moments'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-psmc-cyan via-psmc-teal to-psmc-navy hidden md:block" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
                      <h3 className="text-4xl font-bold text-psmc-cyan mb-4">{milestone.year}</h3>
                      <h4 className="text-2xl font-bold text-psmc-navy mb-4">{milestone.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="relative flex items-center justify-center hidden md:flex">
                    <div className="w-6 h-6 bg-psmc-cyan rounded-full border-4 border-white shadow-lg z-10" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '加入我們的旅程' : 'Join Our Journey'}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '與力積電一起創造未來,成為半導體產業的領導者'
                : 'Create the future with PSMC and become a leader in the semiconductor industry'}
            </p>
            <a
              href={`/${locale}/career`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-psmc-navy transition-all shadow-lg hover:shadow-xl"
            >
              {locale === 'zh-TW' ? '加入我們' : 'Join Us'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
