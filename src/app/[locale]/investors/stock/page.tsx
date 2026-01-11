'use client'

import { motion } from 'framer-motion'

export default function StockPage({ params: { locale } }: { params: { locale: string } }) {
  const stockInfo = {
    symbol: '5346',
    name: locale === 'zh-TW' ? '力積電' : 'PSMC',
    exchange: locale === 'zh-TW' ? '台灣證券交易所' : 'Taiwan Stock Exchange'
  }

  const keyMetrics = [
    {
      label: locale === 'zh-TW' ? '股票代號' : 'Stock Code',
      value: '5346',
      icon: '📊'
    },
    {
      label: locale === 'zh-TW' ? '股本' : 'Capital',
      value: 'NT$ 100B+',
      icon: '💰'
    },
    {
      label: locale === 'zh-TW' ? '產業類別' : 'Industry',
      value: locale === 'zh-TW' ? '半導體' : 'Semiconductor',
      icon: '🏭'
    },
    {
      label: locale === 'zh-TW' ? '上市日期' : 'Listing Date',
      value: '2017',
      icon: '📅'
    }
  ]

  const shareholderInfo = [
    {
      title: locale === 'zh-TW' ? '股東結構' : 'Shareholder Structure',
      items: [
        { label: locale === 'zh-TW' ? '董監事持股' : 'Directors & Supervisors', percentage: '25%' },
        { label: locale === 'zh-TW' ? '法人持股' : 'Institutional Investors', percentage: '45%' },
        { label: locale === 'zh-TW' ? '散戶持股' : 'Individual Investors', percentage: '30%' }
      ]
    }
  ]

  const dividendPolicy = [
    {
      icon: '💵',
      title: locale === 'zh-TW' ? '股利政策' : 'Dividend Policy',
      description: locale === 'zh-TW'
        ? '穩定的股利發放政策,回饋股東投資'
        : 'Stable dividend distribution policy to reward shareholders'
    },
    {
      icon: '📈',
      title: locale === 'zh-TW' ? '股價資訊' : 'Stock Price',
      description: locale === 'zh-TW'
        ? '即時股價與歷史走勢圖表'
        : 'Real-time stock price and historical charts'
    },
    {
      icon: '📰',
      title: locale === 'zh-TW' ? '重大訊息' : 'Material Information',
      description: locale === 'zh-TW'
        ? '定期公告重大訊息與財務報告'
        : 'Regular announcements of material information and financial reports'
    },
    {
      icon: '👥',
      title: locale === 'zh-TW' ? '股東會' : 'Shareholders Meeting',
      description: locale === 'zh-TW'
        ? '定期召開股東會,維護股東權益'
        : 'Regular shareholders meetings to protect shareholder rights'
    }
  ]

  const investorResources = [
    {
      title: locale === 'zh-TW' ? '股東會資訊' : 'AGM Information',
      description: locale === 'zh-TW' ? '年度股東會相關資訊與議程' : 'Annual general meeting information and agenda'
    },
    {
      title: locale === 'zh-TW' ? '股利分配' : 'Dividend Distribution',
      description: locale === 'zh-TW' ? '歷年股利分配紀錄' : 'Historical dividend distribution records'
    },
    {
      title: locale === 'zh-TW' ? '股務代理' : 'Stock Affairs Agent',
      description: locale === 'zh-TW' ? '股務代理機構聯絡資訊' : 'Contact information for stock affairs agent'
    },
    {
      title: locale === 'zh-TW' ? '電子投票' : 'E-Voting',
      description: locale === 'zh-TW' ? '股東會電子投票平台' : 'Electronic voting platform for AGM'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-gradient-to-br from-green-900 via-psmc-navy to-psmc-teal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(16,185,129,0.2) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '股票資訊' : 'Stock Information'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '提供完整的股票資訊與股東服務'
                : 'Comprehensive stock information and shareholder services'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stock Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-psmc-navy to-psmc-teal text-white rounded-3xl p-12 mb-16 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-sm opacity-70 mb-2">{locale === 'zh-TW' ? '公司名稱' : 'Company'}</div>
                <div className="text-3xl font-bold">{stockInfo.name}</div>
              </div>
              <div>
                <div className="text-sm opacity-70 mb-2">{locale === 'zh-TW' ? '股票代號' : 'Stock Code'}</div>
                <div className="text-5xl font-bold text-psmc-cyan">{stockInfo.symbol}</div>
              </div>
              <div>
                <div className="text-sm opacity-70 mb-2">{locale === 'zh-TW' ? '交易所' : 'Exchange'}</div>
                <div className="text-xl font-bold">{stockInfo.exchange}</div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center"
              >
                <div className="text-5xl mb-4">{metric.icon}</div>
                <div className="text-sm text-slate-500 mb-2">{metric.label}</div>
                <div className="text-2xl font-bold text-psmc-navy">{metric.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dividend Policy */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '股東服務' : 'Shareholder Services'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dividendPolicy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-psmc-navy mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholder Structure */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-psmc-navy mb-8">
                {locale === 'zh-TW' ? '股東結構' : 'Shareholder Structure'}
              </h2>
              <div className="space-y-6">
                {shareholderInfo[0].items.map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-psmc-navy">{item.label}</span>
                      <span className="text-2xl font-bold text-psmc-cyan">{item.percentage}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-psmc-cyan to-psmc-teal h-3 rounded-full transition-all duration-1000"
                        style={{ width: item.percentage }}
                      />
                    </div>
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-500/20 to-psmc-cyan/20 flex items-center justify-center">
                <div className="text-9xl">📊</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'zh-TW' ? '股東資源' : 'Investor Resources'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investorResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-psmc-cyan">✓</span>
                  {resource.title}
                </h3>
                <p className="text-white/70 text-lg pl-10">{resource.description}</p>
              </motion.div>
            ))}
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
              {locale === 'zh-TW' ? '需要協助？' : 'Need Help?'}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '如有任何股務相關問題,歡迎與我們聯繫'
                : 'For any stock-related questions, please contact us'}
            </p>
            <a
              href={`/${locale}/investors/contact`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-psmc-navy transition-all shadow-lg hover:shadow-xl"
            >
              {locale === 'zh-TW' ? '聯絡投資人關係' : 'Contact IR'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
