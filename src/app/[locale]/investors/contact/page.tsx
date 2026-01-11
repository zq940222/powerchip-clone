'use client'

import { motion } from 'framer-motion'

export default function InvestorContactPage({ params: { locale } }: { params: { locale: string } }) {
  const contactInfo = [
    {
      icon: '📧',
      title: locale === 'zh-TW' ? '電子郵件' : 'Email',
      value: 'ir@psmc.com',
      link: 'mailto:ir@psmc.com'
    },
    {
      icon: '📞',
      title: locale === 'zh-TW' ? '聯絡電話' : 'Phone',
      value: '+886-3-563-9999',
      link: 'tel:+886356399999'
    },
    {
      icon: '📠',
      title: locale === 'zh-TW' ? '傳真' : 'Fax',
      value: '+886-3-563-8888',
      link: null
    },
    {
      icon: '📍',
      title: locale === 'zh-TW' ? '地址' : 'Address',
      value: locale === 'zh-TW'
        ? '新竹科學園區力行路15號'
        : '15 Li-Hsin Road, Hsinchu Science Park',
      link: null
    }
  ]

  const irTeam = [
    {
      name: locale === 'zh-TW' ? '投資人關係部' : 'Investor Relations Department',
      role: locale === 'zh-TW' ? '主要聯絡窗口' : 'Primary Contact',
      email: 'ir@psmc.com',
      responsibilities: [
        locale === 'zh-TW' ? '財務報告查詢' : 'Financial reports inquiry',
        locale === 'zh-TW' ? '投資人會議安排' : 'Investor meeting arrangement',
        locale === 'zh-TW' ? '公司治理資訊' : 'Corporate governance information'
      ]
    },
    {
      name: locale === 'zh-TW' ? '股務代理部' : 'Stock Affairs Department',
      role: locale === 'zh-TW' ? '股務服務' : 'Stock Services',
      email: 'stock@psmc.com',
      responsibilities: [
        locale === 'zh-TW' ? '股票過戶' : 'Stock transfer',
        locale === 'zh-TW' ? '股利發放' : 'Dividend distribution',
        locale === 'zh-TW' ? '股東會相關事務' : 'AGM related matters'
      ]
    }
  ]

  const faqs = [
    {
      question: locale === 'zh-TW' ? '如何取得財務報告？' : 'How to obtain financial reports?',
      answer: locale === 'zh-TW'
        ? '您可以在我們的投資人專區下載最新的財務報告,或聯絡投資人關係部索取。'
        : 'You can download the latest financial reports from our investor section or contact the IR department.'
    },
    {
      question: locale === 'zh-TW' ? '股東會何時召開？' : 'When is the AGM held?',
      answer: locale === 'zh-TW'
        ? '每年定期於第二季召開股東常會,確切日期將提前公告於公開資訊觀測站。'
        : 'The annual general meeting is regularly held in Q2, with specific dates announced on the Market Observation Post System.'
    },
    {
      question: locale === 'zh-TW' ? '如何參與法人說明會？' : 'How to participate in investor conferences?',
      answer: locale === 'zh-TW'
        ? '請聯絡投資人關係部,我們將為您安排適當的會議時間。'
        : 'Please contact the IR department and we will arrange an appropriate meeting time.'
    },
    {
      question: locale === 'zh-TW' ? '股利何時發放？' : 'When are dividends distributed?',
      answer: locale === 'zh-TW'
        ? '股利發放時間依股東會決議,通常於股東會後2-3個月內完成發放。'
        : 'Dividend distribution timing depends on AGM resolution, usually completed within 2-3 months after the AGM.'
    }
  ]

  const quickLinks = [
    { title: locale === 'zh-TW' ? '財務資訊' : 'Financials', href: `/${locale}/investors/financials` },
    { title: locale === 'zh-TW' ? '股票資訊' : 'Stock Info', href: `/${locale}/investors/stock` },
    { title: locale === 'zh-TW' ? '公司治理' : 'Governance', href: `/${locale}/investors/governance` },
    { title: locale === 'zh-TW' ? '公司簡介' : 'About Us', href: `/${locale}/about` }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-gradient-to-br from-psmc-navy via-blue-900 to-psmc-cyan overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '投資人聯絡' : 'Investor Contact'}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {locale === 'zh-TW'
                ? '我們重視每一位投資人,歡迎隨時與我們聯繫'
                : 'We value every investor and welcome you to contact us anytime'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
              {locale === 'zh-TW' ? '聯絡資訊' : 'Contact Information'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '與我們聯繫' : 'Get In Touch'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-psmc-cyan transition-all text-center"
              >
                <div className="text-6xl mb-6">{info.icon}</div>
                <h3 className="text-lg font-bold text-psmc-navy mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-psmc-cyan hover:text-psmc-teal transition-colors font-medium break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-slate-600 font-medium">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IR Team */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '服務團隊' : 'Service Team'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {irTeam.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-psmc-navy mb-2">{team.name}</h3>
                <p className="text-psmc-cyan font-semibold mb-4">{team.role}</p>
                <a
                  href={`mailto:${team.email}`}
                  className="inline-block text-slate-600 hover:text-psmc-cyan transition-colors mb-6"
                >
                  📧 {team.email}
                </a>
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-bold text-psmc-navy mb-4">
                    {locale === 'zh-TW' ? '服務範圍：' : 'Responsibilities:'}
                  </h4>
                  <ul className="space-y-3">
                    {team.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-psmc-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '常見問題' : 'FAQs'}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
              >
                <h3 className="text-xl font-bold text-psmc-navy mb-4 flex items-start gap-3">
                  <span className="text-psmc-cyan flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-8">
                  <span className="text-psmc-teal font-semibold">A.</span> {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-psmc-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'zh-TW' ? '快速連結' : 'Quick Links'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all text-center group"
              >
                <span className="text-xl font-bold group-hover:text-psmc-cyan transition-colors">
                  {link.title}
                </span>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-psmc-cyan">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
