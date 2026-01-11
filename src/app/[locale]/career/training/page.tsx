'use client'

import { motion } from 'framer-motion'

export default function TrainingPage({ params: { locale } }: { params: { locale: string } }) {
  const trainingPrograms = [
    {
      icon: '📚',
      title: locale === 'zh-TW' ? '新人培訓' : 'Onboarding Training',
      description: locale === 'zh-TW'
        ? '完整的入職培訓計劃,幫助新進員工快速融入團隊'
        : 'Comprehensive onboarding program to help new employees integrate quickly'
    },
    {
      icon: '🎓',
      title: locale === 'zh-TW' ? '專業技能培訓' : 'Professional Skills Training',
      description: locale === 'zh-TW'
        ? '提供專業技術培訓,提升員工核心競爭力'
        : 'Provide professional technical training to enhance core competitiveness'
    },
    {
      icon: '💼',
      title: locale === 'zh-TW' ? '管理培訓' : 'Management Training',
      description: locale === 'zh-TW'
        ? '培養管理人才,建立領導力與管理能力'
        : 'Develop management talent and build leadership capabilities'
    },
    {
      icon: '🌐',
      title: locale === 'zh-TW' ? '國際交流' : 'International Exchange',
      description: locale === 'zh-TW'
        ? '提供海外培訓與交流機會,拓展國際視野'
        : 'Provide overseas training and exchange opportunities for global perspective'
    },
    {
      icon: '🔬',
      title: locale === 'zh-TW' ? '技術研討會' : 'Technical Seminars',
      description: locale === 'zh-TW'
        ? '定期舉辦技術研討會,分享最新產業知識'
        : 'Regular technical seminars to share latest industry knowledge'
    },
    {
      icon: '📊',
      title: locale === 'zh-TW' ? '線上學習平台' : 'E-Learning Platform',
      description: locale === 'zh-TW'
        ? '豐富的線上課程資源,支持自主學習'
        : 'Rich online course resources to support self-directed learning'
    }
  ]

  const careerPath = [
    {
      level: '01',
      title: locale === 'zh-TW' ? '工程師' : 'Engineer',
      description: locale === 'zh-TW'
        ? '從基礎工程師開始,學習專業技術'
        : 'Start as an engineer and learn professional skills',
      duration: locale === 'zh-TW' ? '1-3年' : '1-3 years'
    },
    {
      level: '02',
      title: locale === 'zh-TW' ? '資深工程師' : 'Senior Engineer',
      description: locale === 'zh-TW'
        ? '深化專業技能,承擔更多責任'
        : 'Deepen expertise and take on more responsibilities',
      duration: locale === 'zh-TW' ? '3-5年' : '3-5 years'
    },
    {
      level: '03',
      title: locale === 'zh-TW' ? '專案主管' : 'Project Lead',
      description: locale === 'zh-TW'
        ? '領導專案團隊,培養管理能力'
        : 'Lead project teams and develop management skills',
      duration: locale === 'zh-TW' ? '5-7年' : '5-7 years'
    },
    {
      level: '04',
      title: locale === 'zh-TW' ? '部門經理' : 'Department Manager',
      description: locale === 'zh-TW'
        ? '管理部門運營,制定策略方向'
        : 'Manage department operations and set strategic direction',
      duration: locale === 'zh-TW' ? '7年以上' : '7+ years'
    }
  ]

  const benefits = [
    {
      title: locale === 'zh-TW' ? '導師制度' : 'Mentorship Program',
      description: locale === 'zh-TW'
        ? '資深員工一對一指導,加速成長'
        : 'One-on-one guidance from senior staff to accelerate growth'
    },
    {
      title: locale === 'zh-TW' ? '教育補助' : 'Education Subsidy',
      description: locale === 'zh-TW'
        ? '支持員工進修,提供學費補助'
        : 'Support employee education with tuition subsidies'
    },
    {
      title: locale === 'zh-TW' ? '證照獎勵' : 'Certification Rewards',
      description: locale === 'zh-TW'
        ? '鼓勵取得專業證照,提供獎勵金'
        : 'Encourage professional certifications with reward bonuses'
    },
    {
      title: locale === 'zh-TW' ? '職涯諮詢' : 'Career Counseling',
      description: locale === 'zh-TW'
        ? '專業的職涯規劃諮詢服務'
        : 'Professional career planning consultation services'
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
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '培訓與發展' : 'Training & Development'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {locale === 'zh-TW'
                ? '投資於人才發展,提供完整的培訓計劃與職涯發展機會'
                : 'Investing in talent development with comprehensive training programs and career opportunities'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
              {locale === 'zh-TW' ? '培訓計劃' : 'Training Programs'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '完整的培訓體系' : 'Comprehensive Training System'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-psmc-cyan transition-all"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '職涯發展路徑' : 'Career Development Path'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '清晰的職涯發展路徑,支持您的專業成長'
                : 'Clear career development path to support your professional growth'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPath.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="text-6xl font-bold text-psmc-cyan/20 mb-4">
                    {path.level}
                  </div>
                  <h3 className="text-2xl font-bold text-psmc-navy mb-3">
                    {path.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {path.description}
                  </p>
                  <div className="inline-block bg-psmc-cyan/10 text-psmc-cyan px-4 py-2 rounded-full text-sm font-bold">
                    {path.duration}
                  </div>
                </div>
                {index < careerPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-psmc-cyan z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Benefits */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {locale === 'zh-TW' ? '發展支持' : 'Development Support'}
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index}>
                    <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      <span className="text-psmc-cyan">✓</span>
                      {benefit.title}
                    </h4>
                    <p className="text-white/70 pl-10">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-psmc-cyan/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-9xl">📚</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '開始您的成長之旅' : 'Start Your Growth Journey'}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '加入力積電,獲得完整的培訓與發展機會'
                : 'Join PSMC for comprehensive training and development opportunities'}
            </p>
            <a
              href={`/${locale}/career`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-psmc-navy transition-all shadow-lg hover:shadow-xl"
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
