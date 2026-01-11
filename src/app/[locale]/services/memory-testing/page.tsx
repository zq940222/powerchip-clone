'use client'

import { motion } from 'framer-motion'

interface MemoryTestingPageProps {
  params: { locale: string }
}

export default function MemoryTestingPage({ params: { locale } }: MemoryTestingPageProps) {
  const testingCapabilities = [
    {
      icon: '💾',
      title: locale === 'zh-TW' ? 'DRAM測試' : 'DRAM Testing',
      description: locale === 'zh-TW'
        ? '完整的DRAM晶圓測試服務,確保產品品質'
        : 'Complete DRAM wafer testing services to ensure product quality'
    },
    {
      icon: '📱',
      title: locale === 'zh-TW' ? 'Flash測試' : 'Flash Testing',
      description: locale === 'zh-TW'
        ? 'NAND/NOR Flash記憶體測試與驗證'
        : 'NAND/NOR Flash memory testing and verification'
    },
    {
      icon: '⚡',
      title: locale === 'zh-TW' ? '高速測試' : 'High-Speed Testing',
      description: locale === 'zh-TW'
        ? '支援高速記憶體產品測試,確保性能達標'
        : 'Support high-speed memory product testing to ensure performance standards'
    },
    {
      icon: '🔬',
      title: locale === 'zh-TW' ? '可靠性測試' : 'Reliability Testing',
      description: locale === 'zh-TW'
        ? '完整的可靠性與耐久性測試服務'
        : 'Complete reliability and endurance testing services'
    },
    {
      icon: '📊',
      title: locale === 'zh-TW' ? '數據分析' : 'Data Analysis',
      description: locale === 'zh-TW'
        ? '專業的測試數據分析與報告服務'
        : 'Professional test data analysis and reporting services'
    },
    {
      icon: '🎯',
      title: locale === 'zh-TW' ? '良率優化' : 'Yield Optimization',
      description: locale === 'zh-TW'
        ? '協助客戶提升產品良率與品質'
        : 'Help customers improve product yield and quality'
    }
  ]

  const technologies = [
    {
      title: locale === 'zh-TW' ? '先進測試設備' : 'Advanced Testing Equipment',
      items: [
        locale === 'zh-TW' ? '最新一代測試機台' : 'Latest generation test equipment',
        locale === 'zh-TW' ? '高精度探針卡' : 'High-precision probe cards',
        locale === 'zh-TW' ? '自動化測試系統' : 'Automated testing systems'
      ]
    },
    {
      title: locale === 'zh-TW' ? '測試技術' : 'Testing Technologies',
      items: [
        locale === 'zh-TW' ? '平行測試技術' : 'Parallel testing technology',
        locale === 'zh-TW' ? '高溫測試能力' : 'High-temperature testing capability',
        locale === 'zh-TW' ? '低功耗測試方案' : 'Low-power testing solutions'
      ]
    },
    {
      title: locale === 'zh-TW' ? '品質控管' : 'Quality Control',
      items: [
        locale === 'zh-TW' ? 'SPC統計製程管制' : 'SPC statistical process control',
        locale === 'zh-TW' ? '即時監控系統' : 'Real-time monitoring system',
        locale === 'zh-TW' ? '追溯管理系統' : 'Traceability management system'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-psmc-navy via-purple-900 to-psmc-teal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,194,224,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,194,224,0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '記憶體晶圓測試服務' : 'Memory Wafer Testing Services'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {locale === 'zh-TW'
                ? '提供全方位的記憶體晶圓測試服務,確保產品品質與可靠性'
                : 'Providing comprehensive memory wafer testing services to ensure product quality and reliability'}
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
              <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
                {locale === 'zh-TW' ? '專業服務' : 'Professional Services'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-8">
                {locale === 'zh-TW' ? '完整的測試解決方案' : 'Complete Testing Solutions'}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {locale === 'zh-TW'
                  ? '我們擁有先進的測試設備與專業團隊,提供DRAM、Flash等各類記憶體產品的晶圓測試服務。從功能測試到可靠性驗證,我們確保每個產品都符合最高品質標準。'
                  : 'We have advanced testing equipment and professional teams to provide wafer testing services for various memory products including DRAM and Flash. From functional testing to reliability verification, we ensure every product meets the highest quality standards.'}
              </p>
            </motion.div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-psmc-cyan transition-all"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '技術優勢' : 'Technical Advantages'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '先進的測試技術與設備,確保測試準確性與效率'
                : 'Advanced testing technology and equipment to ensure testing accuracy and efficiency'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-psmc-navy mb-6">
                  {tech.title}
                </h3>
                <ul className="space-y-4">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-psmc-cyan rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
                {locale === 'zh-TW' ? '服務特色' : 'Service Features'}
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-psmc-cyan">✓</span>
                    {locale === 'zh-TW' ? '大產能支援' : 'High Volume Support'}
                  </h4>
                  <p className="text-white/70 pl-10">
                    {locale === 'zh-TW'
                      ? '具備大規模生產測試能力,滿足客戶量產需求'
                      : 'Large-scale production testing capability to meet customer mass production needs'}
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-psmc-cyan">✓</span>
                    {locale === 'zh-TW' ? '快速交期' : 'Quick Turnaround'}
                  </h4>
                  <p className="text-white/70 pl-10">
                    {locale === 'zh-TW'
                      ? '優化的生產流程,提供快速的測試服務交期'
                      : 'Optimized production process for quick testing service turnaround'}
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-psmc-cyan">✓</span>
                    {locale === 'zh-TW' ? '客製化服務' : 'Customized Services'}
                  </h4>
                  <p className="text-white/70 pl-10">
                    {locale === 'zh-TW'
                      ? '根據客戶需求提供客製化測試方案'
                      : 'Provide customized testing solutions based on customer requirements'}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-psmc-cyan/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-9xl">💾</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: locale === 'zh-TW' ? '月測試產能' : 'Monthly Test Capacity' },
              { number: '99.9%', label: locale === 'zh-TW' ? '測試準確率' : 'Testing Accuracy' },
              { number: '24/7', label: locale === 'zh-TW' ? '技術支援' : 'Technical Support' },
              { number: '100+', label: locale === 'zh-TW' ? '服務客戶' : 'Customers Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-psmc-cyan/5 to-psmc-teal/5 rounded-3xl"
              >
                <div className="text-5xl font-bold text-psmc-cyan mb-3">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
              {locale === 'zh-TW' ? '了解更多測試服務' : 'Learn More About Our Testing Services'}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '聯繫我們的專業團隊,為您的產品提供最佳測試解決方案'
                : 'Contact our professional team for the best testing solutions for your products'}
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
