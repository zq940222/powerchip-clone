'use client'

import { motion } from 'framer-motion'

interface QualityPageProps {
  params: { locale: string }
}

export default function QualityPage({ params: { locale } }: QualityPageProps) {
  const qualityItems = [
    {
      icon: '🏆',
      title: locale === 'zh-TW' ? 'ISO 9001認證' : 'ISO 9001 Certification',
      description: locale === 'zh-TW'
        ? '通過國際品質管理體系認證,確保產品與服務品質'
        : 'Certified international quality management system to ensure product and service quality'
    },
    {
      icon: '🔒',
      title: locale === 'zh-TW' ? 'ISO 27001認證' : 'ISO 27001 Certification',
      description: locale === 'zh-TW'
        ? '資訊安全管理系統認證,保護客戶資料安全'
        : 'Information security management system certification to protect customer data security'
    },
    {
      icon: '🌱',
      title: locale === 'zh-TW' ? 'ISO 14001認證' : 'ISO 14001 Certification',
      description: locale === 'zh-TW'
        ? '環境管理體系認證,實踐永續發展承諾'
        : 'Environmental management system certification to practice sustainability commitments'
    },
    {
      icon: '⚡',
      title: locale === 'zh-TW' ? 'ISO 45001認證' : 'ISO 45001 Certification',
      description: locale === 'zh-TW'
        ? '職業安全衛生管理系統認證,保障員工安全'
        : 'Occupational health and safety management system certification to protect employee safety'
    },
    {
      icon: '✅',
      title: locale === 'zh-TW' ? 'IATF 16949認證' : 'IATF 16949 Certification',
      description: locale === 'zh-TW'
        ? '汽車產業品質管理系統認證,符合汽車電子標準'
        : 'Automotive industry quality management system certification to meet automotive electronics standards'
    },
    {
      icon: '🎯',
      title: locale === 'zh-TW' ? 'TL 9000認證' : 'TL 9000 Certification',
      description: locale === 'zh-TW'
        ? '電信產業品質管理系統認證,確保通訊產品品質'
        : 'Telecommunications industry quality management system certification to ensure communication product quality'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: locale === 'zh-TW' ? '嚴格檢驗' : 'Strict Inspection',
      description: locale === 'zh-TW'
        ? '每個生產環節都經過嚴格的品質檢驗'
        : 'Every production stage undergoes strict quality inspection'
    },
    {
      step: '02',
      title: locale === 'zh-TW' ? '持續改進' : 'Continuous Improvement',
      description: locale === 'zh-TW'
        ? '不斷優化製程,提升產品良率'
        : 'Continuously optimize processes to improve product yield'
    },
    {
      step: '03',
      title: locale === 'zh-TW' ? '客戶回饋' : 'Customer Feedback',
      description: locale === 'zh-TW'
        ? '積極收集並回應客戶意見,改善服務品質'
        : 'Actively collect and respond to customer feedback to improve service quality'
    },
    {
      step: '04',
      title: locale === 'zh-TW' ? '追求卓越' : 'Pursue Excellence',
      description: locale === 'zh-TW'
        ? '以最高標準要求自己,追求卓越品質'
        : 'Hold ourselves to the highest standards and pursue excellence in quality'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy via-psmc-teal to-psmc-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '質量系統' : 'Quality System'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '堅持最高品質標準,為客戶提供卓越服務'
                : 'Adhering to the highest quality standards to provide excellent service to customers'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-8">
                {locale === 'zh-TW' ? '我們的品質承諾' : 'Our Quality Commitment'}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {locale === 'zh-TW'
                  ? '力積電秉持「品質第一」的理念,建立完善的品質管理系統。我們通過多項國際認證,確保每個環節都符合最高標準,為客戶提供最優質的產品與服務。'
                  : 'PSMC upholds the concept of "Quality First" and has established a comprehensive quality management system. We have obtained multiple international certifications to ensure every aspect meets the highest standards, providing customers with the best products and services.'}
              </p>
            </motion.div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-psmc-cyan transition-all group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '品質管理流程' : 'Quality Management Process'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '完善的品質管理流程,確保產品與服務的卓越品質'
                : 'Comprehensive quality management process to ensure excellent product and service quality'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-psmc-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-psmc-cyan" />
                )}
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
              {locale === 'zh-TW' ? '體驗我們的品質承諾' : 'Experience Our Quality Commitment'}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '聯繫我們,了解更多關於力積電的品質管理系統'
                : 'Contact us to learn more about PSMC\'s quality management system'}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-psmc-navy transition-all shadow-lg hover:shadow-xl"
            >
              {locale === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
