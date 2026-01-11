'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface FinancialPageProps {
  params: { locale: string }
}

export default function FinancialPage({ params: { locale } }: FinancialPageProps) {
  const highlights = [
    {
      zh: { title: '2023年營收', value: 'NT$ 45.2億', change: '+12.5%' },
      en: { title: '2023 Revenue', value: 'NT$ 4.52B', change: '+12.5%' }
    },
    {
      zh: { title: '毛利率', value: '28.3%', change: '+3.2%' },
      en: { title: 'Gross Margin', value: '28.3%', change: '+3.2%' }
    },
    {
      zh: { title: '營業利益', value: 'NT$ 8.5億', change: '+18.7%' },
      en: { title: 'Operating Income', value: 'NT$ 850M', change: '+18.7%' }
    },
    {
      zh: { title: '每股盈餘(EPS)', value: 'NT$ 2.15', change: '+15.1%' },
      en: { title: 'EPS', value: 'NT$ 2.15', change: '+15.1%' }
    }
  ]

  const quarters = [
    {
      period: 'Q1 2023',
      zh: { revenue: 'NT$ 10.2億', profit: 'NT$ 1.8億', margin: '26.5%' },
      en: { revenue: 'NT$ 1.02B', profit: 'NT$ 180M', margin: '26.5%' }
    },
    {
      period: 'Q2 2023',
      zh: { revenue: 'NT$ 11.5億', profit: 'NT$ 2.3億', margin: '28.1%' },
      en: { revenue: 'NT$ 1.15B', profit: 'NT$ 230M', margin: '28.1%' }
    },
    {
      period: 'Q3 2023',
      zh: { revenue: 'NT$ 11.8億', profit: 'NT$ 2.5億', margin: '29.2%' },
      en: { revenue: 'NT$ 1.18B', profit: 'NT$ 250M', margin: '29.2%' }
    },
    {
      period: 'Q4 2023',
      zh: { revenue: 'NT$ 11.7億', profit: 'NT$ 1.9億', margin: '27.4%' },
      en: { revenue: 'NT$ 1.17B', profit: 'NT$ 190M', margin: '27.4%' }
    }
  ]

  const reports = [
    {
      zh: {
        category: '年度財務報告',
        items: [
          { year: '2023', title: '2023年度財務報告', date: '2024-03-15' },
          { year: '2022', title: '2022年度財務報告', date: '2023-03-15' },
          { year: '2021', title: '2021年度財務報告', date: '2022-03-15' }
        ]
      },
      en: {
        category: 'Annual Financial Reports',
        items: [
          { year: '2023', title: '2023 Annual Financial Report', date: '2024-03-15' },
          { year: '2022', title: '2022 Annual Financial Report', date: '2023-03-15' },
          { year: '2021', title: '2021 Annual Financial Report', date: '2022-03-15' }
        ]
      }
    },
    {
      zh: {
        category: '季度財務報告',
        items: [
          { year: 'Q4 2023', title: '2023年第四季財務報告', date: '2024-01-15' },
          { year: 'Q3 2023', title: '2023年第三季財務報告', date: '2023-10-15' },
          { year: 'Q2 2023', title: '2023年第二季財務報告', date: '2023-07-15' }
        ]
      },
      en: {
        category: 'Quarterly Financial Reports',
        items: [
          { year: 'Q4 2023', title: 'Q4 2023 Financial Report', date: '2024-01-15' },
          { year: 'Q3 2023', title: 'Q3 2023 Financial Report', date: '2023-10-15' },
          { year: 'Q2 2023', title: 'Q2 2023 Financial Report', date: '2023-07-15' }
        ]
      }
    }
  ]

  const presentations = [
    {
      zh: { title: '2023年第四季法人說明會簡報', date: '2024-01-25', type: '法說會簡報' },
      en: { title: 'Q4 2023 Investor Conference Presentation', date: '2024-01-25', type: 'Presentation' }
    },
    {
      zh: { title: '2023年第三季法人說明會簡報', date: '2023-10-26', type: '法說會簡報' },
      en: { title: 'Q3 2023 Investor Conference Presentation', date: '2023-10-26', type: 'Presentation' }
    },
    {
      zh: { title: '2023年第二季法人說明會簡報', date: '2023-07-27', type: '法說會簡報' },
      en: { title: 'Q2 2023 Investor Conference Presentation', date: '2023-07-27', type: 'Presentation' }
    }
  ]

  const dividends = [
    {
      year: '2023',
      zh: { cash: 'NT$ 1.20', stock: '0%', total: 'NT$ 1.20', yield: '4.2%' },
      en: { cash: 'NT$ 1.20', stock: '0%', total: 'NT$ 1.20', yield: '4.2%' }
    },
    {
      year: '2022',
      zh: { cash: 'NT$ 1.05', stock: '0%', total: 'NT$ 1.05', yield: '3.8%' },
      en: { cash: 'NT$ 1.05', stock: '0%', total: 'NT$ 1.05', yield: '3.8%' }
    },
    {
      year: '2021',
      zh: { cash: 'NT$ 0.90', stock: '0%', total: 'NT$ 0.90', yield: '3.5%' },
      en: { cash: 'NT$ 0.90', stock: '0%', total: 'NT$ 0.90', yield: '3.5%' }
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/investor_financial_hero.png"
            alt="Financial Background"
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
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Investor Relations</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {locale === 'zh-TW' ? '財務資訊' : 'Financial Information'}
            </h1>
            <div className="w-20 h-1.5 bg-psmc-cyan mb-6 rounded-full" />
            <p className="text-xl text-white/70 max-w-2xl font-light">
              {locale === 'zh-TW' ? '透明財務揭露，保障投資人權益，創造長期股東價值。' : 'Transparent Financial Disclosure, Protecting Investor Rights, Creating Long-term Shareholder Value.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 rounded-[32px] overflow-hidden group h-full">
                  <div className="h-2 bg-psmc-cyan w-0 group-hover:w-full transition-all duration-500" />
                  <CardContent className="p-10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                      {locale === 'zh-TW' ? item.zh.title : item.en.title}
                    </p>
                    <p className="text-3xl font-black text-psmc-navy mb-4 group-hover:text-psmc-cyan transition-colors">
                      {locale === 'zh-TW' ? item.zh.value : item.en.value}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">↑</span>
                      <span className="text-sm font-bold text-green-500">
                        {locale === 'zh-TW' ? item.zh.change : item.en.change}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Performance - Premium Table */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Performance</span>
              <h2 className="text-4xl font-bold text-psmc-navy tracking-tight">
                {locale === 'zh-TW' ? '季度營運表現' : 'Quarterly Performance'}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-0.5 bg-slate-200" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fiscal Year 2023</span>
            </div>
          </div>

          <motion.div
            className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="py-8 px-10 text-left text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {locale === 'zh-TW' ? '季度' : 'Quarter'}
                    </th>
                    <th className="py-8 px-10 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {locale === 'zh-TW' ? '營收' : 'Revenue'}
                    </th>
                    <th className="py-8 px-10 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {locale === 'zh-TW' ? '淨利' : 'Net Profit'}
                    </th>
                    <th className="py-8 px-10 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {locale === 'zh-TW' ? '毛利率' : 'Margin'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {quarters.map((quarter, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors group">
                      <td className="py-8 px-10">
                        <span className="text-lg font-bold text-psmc-navy group-hover:text-psmc-cyan transition-colors">
                          {quarter.period}
                        </span>
                      </td>
                      <td className="py-8 px-10 text-right text-psmc-navy font-medium">
                        {locale === 'zh-TW' ? quarter.zh.revenue : quarter.en.revenue}
                      </td>
                      <td className="py-8 px-10 text-right text-psmc-navy font-medium">
                        {locale === 'zh-TW' ? quarter.zh.profit : quarter.en.profit}
                      </td>
                      <td className="py-8 px-10 text-right">
                        <span className="inline-block px-4 py-1.5 bg-psmc-cyan/10 text-psmc-cyan rounded-full text-sm font-bold">
                          {locale === 'zh-TW' ? quarter.zh.margin : quarter.en.margin}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Reports - Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-psmc-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block">Downloads</span>
            <h2 className="text-4xl font-bold text-psmc-navy tracking-tight">
              {locale === 'zh-TW' ? '財務報告書' : 'Financial Reports'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-[40px] p-12 shadow-xl border border-white h-full">
                  <h3 className="text-2xl font-bold text-psmc-navy mb-10 flex items-center gap-4">
                    <span className="w-2 h-8 bg-psmc-navy rounded-full" />
                    {locale === 'zh-TW' ? report.zh.category : report.en.category}
                  </h3>
                  <div className="space-y-6">
                    {(locale === 'zh-TW' ? report.zh.items : report.en.items).map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center justify-between p-6 bg-slate-50 rounded-3xl hover:bg-psmc-navy transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-psmc-navy group-hover:bg-psmc-cyan group-hover:text-white transition-all shadow-sm">
                            <span className="material-icons-outlined">description</span>
                          </div>
                          <div>
                            <p className="font-bold text-psmc-navy group-hover:text-white transition-colors">{item.title}</p>
                            <p className="text-xs text-slate-400 group-hover:text-white/60 transition-colors uppercase tracking-widest mt-1 font-black">{item.date}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-psmc-navy/10 flex items-center justify-center text-psmc-navy group-hover:border-white/20 group-hover:text-white transition-all">
                          <span className="material-icons-outlined text-sm">download</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dividend Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-psmc-crimson text-xs font-black tracking-[0.4em] uppercase mb-4 block">Shareholders</span>
            <h2 className="text-4xl font-bold text-psmc-navy tracking-tight mb-16">
              {locale === 'zh-TW' ? '股利資訊' : 'Dividend Information'}
            </h2>

            <div className="bg-white rounded-[40px] shadow-2xl border border-slate-50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-psmc-navy text-white">
                      <th className="py-8 px-8 text-left text-[10px] font-black uppercase tracking-widest text-white/60">Year</th>
                      <th className="py-8 px-8 text-right text-[10px] font-black uppercase tracking-widest text-white/60">Cash</th>
                      <th className="py-8 px-8 text-right text-[10px] font-black uppercase tracking-widest text-white/60">Total</th>
                      <th className="py-8 px-8 text-right text-[10px] font-black uppercase tracking-widest text-white/60">Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {dividends.map((dividend, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors">
                        <td className="py-8 px-8 text-left font-bold text-psmc-navy">{dividend.year}</td>
                        <td className="py-8 px-8 text-right text-slate-600">{locale === 'zh-TW' ? dividend.zh.cash : dividend.en.cash}</td>
                        <td className="py-8 px-8 text-right font-black text-psmc-navy">{locale === 'zh-TW' ? dividend.zh.total : dividend.en.total}</td>
                        <td className="py-8 px-8 text-right">
                          <span className="text-psmc-crimson font-black">{locale === 'zh-TW' ? dividend.zh.yield : dividend.en.yield}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-psmc-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-[100px] bg-psmc-cyan rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
            {locale === 'zh-TW' ? '投資人服務' : 'Investor Services'}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {locale === 'zh-TW'
              ? '如需更多財務資訊或投資人服務，歡迎聯繫我們。我們致力於提供即時且準確的資訊揭露。'
              : 'For more financial information or investor services, please contact us. We are committed to providing timely and accurate information disclosure.'}
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-cyan/40">
              {locale === 'zh-TW' ? '聯絡我們' : 'Contact Us'}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
