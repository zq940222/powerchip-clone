'use client'

import { motion } from 'framer-motion'

export default function CulturePage({ params: { locale } }: { params: { locale: string } }) {
  const cultureValues = [
    {
      icon: '🎯',
      title: locale === 'zh-TW' ? '創新思維' : 'Innovation',
      description: locale === 'zh-TW'
        ? '鼓勵創新想法,勇於嘗試新技術與方法'
        : 'Encourage innovative ideas and embrace new technologies and methods'
    },
    {
      icon: '🤝',
      title: locale === 'zh-TW' ? '團隊合作' : 'Teamwork',
      description: locale === 'zh-TW'
        ? '重視團隊協作,共同達成目標'
        : 'Value team collaboration to achieve goals together'
    },
    {
      icon: '💡',
      title: locale === 'zh-TW' ? '持續學習' : 'Continuous Learning',
      description: locale === 'zh-TW'
        ? '提供豐富學習資源,支持員工成長'
        : 'Provide rich learning resources to support employee growth'
    },
    {
      icon: '🌟',
      title: locale === 'zh-TW' ? '卓越品質' : 'Excellence',
      description: locale === 'zh-TW'
        ? '追求卓越,以最高標準要求自己'
        : 'Pursue excellence with the highest standards'
    }
  ]

  const lifeAspects = [
    {
      title: locale === 'zh-TW' ? '工作環境' : 'Work Environment',
      description: locale === 'zh-TW'
        ? '現代化辦公空間,舒適的工作環境'
        : 'Modern office space with comfortable work environment',
      image: '🏢'
    },
    {
      title: locale === 'zh-TW' ? '員工活動' : 'Employee Activities',
      description: locale === 'zh-TW'
        ? '定期舉辦團建活動,促進同事交流'
        : 'Regular team building activities to promote colleague interaction',
      image: '🎉'
    },
    {
      title: locale === 'zh-TW' ? '健康生活' : 'Healthy Living',
      description: locale === 'zh-TW'
        ? '提供健身設施,關注員工身心健康'
        : 'Provide fitness facilities and focus on employee wellness',
      image: '🏃'
    },
    {
      title: locale === 'zh-TW' ? '工作平衡' : 'Work-Life Balance',
      description: locale === 'zh-TW'
        ? '彈性工時制度,重視生活品質'
        : 'Flexible working hours with emphasis on quality of life',
      image: '⚖️'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy via-psmc-teal to-psmc-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '文化與生活' : 'Culture & Life'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '在力積電,我們創造積極、創新的工作文化,讓每位員工都能發揮所長'
                : 'At PSMC, we create a positive and innovative work culture where every employee can excel'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '我們的核心價值' : 'Our Core Values'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-psmc-cyan transition-all"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at PSMC */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '力積電的生活' : 'Life at PSMC'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifeAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="text-7xl mb-6">{aspect.image}</div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4">{aspect.title}</h3>
                <p className="text-slate-600 text-lg">{aspect.description}</p>
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
              {locale === 'zh-TW' ? '加入我們的團隊' : 'Join Our Team'}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '在力積電開啟您的職業生涯,與我們一起創造未來'
                : 'Start your career at PSMC and create the future with us'}
            </p>
            <a
              href={`/${locale}/career`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-psmc-navy transition-all shadow-lg"
            >
              {locale === 'zh-TW' ? '查看職缺' : 'View Openings'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
