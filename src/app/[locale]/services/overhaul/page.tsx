'use client'

import { motion } from 'framer-motion'

interface OverhaulPageProps {
  params: { locale: string }
}

export default function OverhaulPage({ params: { locale } }: OverhaulPageProps) {
  const services = [
    {
      icon: '🔧',
      title: locale === 'zh-TW' ? '設備檢修' : 'Equipment Overhaul',
      description: locale === 'zh-TW'
        ? '提供專業的半導體設備檢修服務,延長設備使用壽命'
        : 'Provide professional semiconductor equipment overhaul services to extend equipment lifespan'
    },
    {
      icon: '⚙️',
      title: locale === 'zh-TW' ? '零件更換' : 'Parts Replacement',
      description: locale === 'zh-TW'
        ? '原廠認證零件,確保設備性能與可靠性'
        : 'OEM certified parts to ensure equipment performance and reliability'
    },
    {
      icon: '🔍',
      title: locale === 'zh-TW' ? '精密校準' : 'Precision Calibration',
      description: locale === 'zh-TW'
        ? '精密儀器校準服務,保證生產精度'
        : 'Precision instrument calibration services to ensure production accuracy'
    },
    {
      icon: '📊',
      title: locale === 'zh-TW' ? '性能測試' : 'Performance Testing',
      description: locale === 'zh-TW'
        ? '全面的性能測試,確保設備達到最佳狀態'
        : 'Comprehensive performance testing to ensure equipment reaches optimal condition'
    },
    {
      icon: '🛠️',
      title: locale === 'zh-TW' ? '預防性維護' : 'Preventive Maintenance',
      description: locale === 'zh-TW'
        ? '定期維護計劃,預防設備故障'
        : 'Regular maintenance plans to prevent equipment failures'
    },
    {
      icon: '📞',
      title: locale === 'zh-TW' ? '技術支援' : 'Technical Support',
      description: locale === 'zh-TW'
        ? '24/7技術支援,快速解決設備問題'
        : '24/7 technical support for quick equipment issue resolution'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: locale === 'zh-TW' ? '需求評估' : 'Requirement Assessment',
      description: locale === 'zh-TW'
        ? '了解客戶需求,評估設備狀況'
        : 'Understand customer needs and assess equipment condition'
    },
    {
      number: '02',
      title: locale === 'zh-TW' ? '方案規劃' : 'Solution Planning',
      description: locale === 'zh-TW'
        ? '制定最佳檢修方案與時程'
        : 'Develop optimal overhaul solution and timeline'
    },
    {
      number: '03',
      title: locale === 'zh-TW' ? '專業檢修' : 'Professional Overhaul',
      description: locale === 'zh-TW'
        ? '由專業團隊執行檢修作業'
        : 'Professional team executes overhaul operations'
    },
    {
      number: '04',
      title: locale === 'zh-TW' ? '品質驗證' : 'Quality Verification',
      description: locale === 'zh-TW'
        ? '嚴格測試,確保服務品質'
        : 'Rigorous testing to ensure service quality'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-psmc-navy via-psmc-teal to-psmc-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="absolute top-20 right-20 w-64 h-64 bg-psmc-cyan/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-psmc-teal/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '檢修服務中心' : 'Overhaul Service Center'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {locale === 'zh-TW'
                ? '專業的半導體設備檢修服務,確保您的設備始終處於最佳狀態'
                : 'Professional semiconductor equipment overhaul services to keep your equipment in optimal condition'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
              {locale === 'zh-TW' ? '我們的服務' : 'Our Services'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '全方位檢修解決方案' : 'Comprehensive Overhaul Solutions'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '我們提供完整的設備檢修服務,從評估、規劃到執行,確保每個環節都達到最高標準'
                : 'We provide complete equipment overhaul services from assessment to execution, ensuring every step meets the highest standards'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-psmc-cyan transition-all"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '服務流程' : 'Service Process'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '標準化的服務流程,確保檢修品質與效率'
                : 'Standardized service process to ensure overhaul quality and efficiency'}
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
                    {step.number}
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

      {/* Features Section */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {locale === 'zh-TW' ? '為什麼選擇我們' : 'Why Choose Us'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-psmc-cyan rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {locale === 'zh-TW' ? '專業團隊' : 'Professional Team'}
                    </h4>
                    <p className="text-white/70">
                      {locale === 'zh-TW'
                        ? '經驗豐富的工程師團隊,提供專業可靠的服務'
                        : 'Experienced engineering team providing professional and reliable services'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-psmc-cyan rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {locale === 'zh-TW' ? '快速響應' : 'Quick Response'}
                    </h4>
                    <p className="text-white/70">
                      {locale === 'zh-TW'
                        ? '24小時快速響應,最短時間解決您的問題'
                        : '24-hour quick response to solve your problems in the shortest time'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-psmc-cyan rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      {locale === 'zh-TW' ? '品質保證' : 'Quality Assurance'}
                    </h4>
                    <p className="text-white/70">
                      {locale === 'zh-TW'
                        ? '嚴格的品質控管,提供完善的售後保固'
                        : 'Strict quality control with comprehensive after-sales warranty'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-psmc-cyan/20 to-psmc-teal/20 flex items-center justify-center">
                <div className="text-9xl">🔧</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '立即聯繫我們' : 'Contact Us Now'}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '讓我們的專業團隊為您的設備提供最佳的檢修服務'
                : 'Let our professional team provide the best overhaul services for your equipment'}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-psmc-navy transition-all shadow-lg hover:shadow-xl"
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
