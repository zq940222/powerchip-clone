'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EventsPage({ params: { locale } }: { params: { locale: string } }) {
  const events = [
    {
      id: 1,
      title: locale === 'zh-TW' ? '2024 SEMICON Taiwan 參展' : '2024 SEMICON Taiwan Exhibition',
      date: '2024-09-04',
      location: locale === 'zh-TW' ? '台北南港展覽館' : 'Taipei Nangang Exhibition Center',
      description: locale === 'zh-TW'
        ? '力積電參加2024年台灣國際半導體展,展示最新技術與解決方案'
        : 'PSMC participates in 2024 SEMICON Taiwan, showcasing latest technologies and solutions',
      image: '🏢',
      category: locale === 'zh-TW' ? '展覽' : 'Exhibition'
    },
    {
      id: 2,
      title: locale === 'zh-TW' ? '2024年度股東會' : '2024 Annual General Meeting',
      date: '2024-06-15',
      location: locale === 'zh-TW' ? '公司總部' : 'Company Headquarters',
      description: locale === 'zh-TW'
        ? '召開2024年度股東常會,報告公司營運狀況與未來展望'
        : '2024 Annual General Meeting to report company operations and future outlook',
      image: '👥',
      category: locale === 'zh-TW' ? '股東會' : 'AGM'
    },
    {
      id: 3,
      title: locale === 'zh-TW' ? '新廠區啟用典禮' : 'New Facility Opening Ceremony',
      date: '2024-03-20',
      location: locale === 'zh-TW' ? '新竹科學園區' : 'Hsinchu Science Park',
      description: locale === 'zh-TW'
        ? '新12吋晶圓廠正式啟用,擴大生產規模'
        : 'New 12-inch wafer fab officially opens, expanding production capacity',
      image: '🏭',
      category: locale === 'zh-TW' ? '廠區啟用' : 'Facility Opening'
    },
    {
      id: 4,
      title: locale === 'zh-TW' ? '2023技術論壇' : '2023 Technology Forum',
      date: '2023-11-10',
      location: locale === 'zh-TW' ? '線上舉行' : 'Online',
      description: locale === 'zh-TW'
        ? '舉辦年度技術論壇,分享最新半導體技術趨勢'
        : 'Annual technology forum sharing latest semiconductor technology trends',
      image: '💡',
      category: locale === 'zh-TW' ? '論壇' : 'Forum'
    },
    {
      id: 5,
      title: locale === 'zh-TW' ? '校園徵才博覽會' : 'Campus Recruitment Fair',
      date: '2023-10-15',
      location: locale === 'zh-TW' ? '各大專院校' : 'Universities',
      description: locale === 'zh-TW'
        ? '參與校園徵才活動,尋找優秀人才加入團隊'
        : 'Participate in campus recruitment to find talented individuals',
      image: '🎓',
      category: locale === 'zh-TW' ? '人才招募' : 'Recruitment'
    },
    {
      id: 6,
      title: locale === 'zh-TW' ? 'ESG永續發展論壇' : 'ESG Sustainability Forum',
      date: '2023-09-08',
      location: locale === 'zh-TW' ? '台北國際會議中心' : 'Taipei International Convention Center',
      description: locale === 'zh-TW'
        ? '分享力積電在ESG永續發展的成果與承諾'
        : 'Share PSMC\'s ESG sustainability achievements and commitments',
      image: '🌱',
      category: locale === 'zh-TW' ? 'ESG' : 'ESG'
    }
  ]

  const highlights = [
    {
      year: '2024',
      title: locale === 'zh-TW' ? '產業領導' : 'Industry Leadership',
      description: locale === 'zh-TW'
        ? '積極參與產業活動,引領半導體技術發展'
        : 'Actively participate in industry events, leading semiconductor technology development'
    },
    {
      year: '2024',
      title: locale === 'zh-TW' ? '社會參與' : 'Social Engagement',
      description: locale === 'zh-TW'
        ? '關注社會議題,實踐企業社會責任'
        : 'Focus on social issues and practice corporate social responsibility'
    },
    {
      year: '2024',
      title: locale === 'zh-TW' ? '人才培育' : 'Talent Development',
      description: locale === 'zh-TW'
        ? '深耕校園,培養下一代半導體人才'
        : 'Cultivate campus relationships and develop next-generation semiconductor talent'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[500px] bg-gradient-to-br from-purple-900 via-psmc-navy to-psmc-teal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-psmc-cyan/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '活動與亮點' : 'Events & Highlights'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {locale === 'zh-TW'
                ? '回顧力積電的精彩時刻與重要活動'
                : 'Review PSMC\'s highlights and important events'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
              {locale === 'zh-TW' ? '年度亮點' : 'Annual Highlights'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '2024精彩回顧' : '2024 Highlights'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-psmc-navy to-psmc-teal text-white rounded-3xl p-8 shadow-xl"
              >
                <div className="text-5xl font-bold text-psmc-cyan mb-4">{highlight.year}</div>
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-white/80 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '活動時間軸' : 'Events Timeline'}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Icon & Category */}
                  <div className="lg:col-span-2 text-center">
                    <div className="text-7xl mb-4">{event.image}</div>
                    <span className="inline-block bg-psmc-cyan/10 text-psmc-cyan px-4 py-2 rounded-full text-sm font-bold">
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-psmc-navy mb-2 md:mb-0">
                        {event.title}
                      </h3>
                      <div className="text-psmc-cyan font-bold">
                        {new Date(event.date).toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : 'en-US')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'zh-TW' ? '關注更多動態' : 'Stay Updated'}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '訂閱我們的活動通知,掌握力積電最新動態'
                : 'Subscribe to event notifications to stay informed about PSMC updates'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/insights/press`}
                className="inline-flex items-center justify-center gap-3 bg-white text-psmc-navy px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-psmc-cyan hover:text-white transition-all shadow-lg"
              >
                {locale === 'zh-TW' ? '查看新聞' : 'View News'}
                <span>→</span>
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-psmc-navy transition-all shadow-lg"
              >
                {locale === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
