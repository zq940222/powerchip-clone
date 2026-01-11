'use client'

import { motion } from 'framer-motion'

export default function WelfarePage({ params: { locale } }: { params: { locale: string } }) {
  const welfareCategories = [
    {
      icon: '💰',
      title: locale === 'zh-TW' ? '薪資福利' : 'Salary & Benefits',
      items: [
        locale === 'zh-TW' ? '具競爭力的薪資' : 'Competitive salary',
        locale === 'zh-TW' ? '年終獎金' : 'Year-end bonus',
        locale === 'zh-TW' ? '績效獎金' : 'Performance bonus',
        locale === 'zh-TW' ? '員工分紅' : 'Employee profit sharing'
      ]
    },
    {
      icon: '🏥',
      title: locale === 'zh-TW' ? '保險制度' : 'Insurance',
      items: [
        locale === 'zh-TW' ? '勞健保' : 'Labor & health insurance',
        locale === 'zh-TW' ? '團體保險' : 'Group insurance',
        locale === 'zh-TW' ? '眷屬保險' : 'Dependent insurance',
        locale === 'zh-TW' ? '意外險' : 'Accident insurance'
      ]
    },
    {
      icon: '🏖️',
      title: locale === 'zh-TW' ? '休假制度' : 'Leave Policy',
      items: [
        locale === 'zh-TW' ? '特休假' : 'Annual leave',
        locale === 'zh-TW' ? '生日假' : 'Birthday leave',
        locale === 'zh-TW' ? '婚假、產假' : 'Marriage & maternity leave',
        locale === 'zh-TW' ? '彈性工時' : 'Flexible working hours'
      ]
    },
    {
      icon: '🎯',
      title: locale === 'zh-TW' ? '員工優惠' : 'Employee Benefits',
      items: [
        locale === 'zh-TW' ? '員工餐廳' : 'Employee cafeteria',
        locale === 'zh-TW' ? '交通補助' : 'Transportation allowance',
        locale === 'zh-TW' ? '員工宿舍' : 'Employee dormitory',
        locale === 'zh-TW' ? '停車優惠' : 'Parking benefits'
      ]
    },
    {
      icon: '🏋️',
      title: locale === 'zh-TW' ? '健康促進' : 'Health & Wellness',
      items: [
        locale === 'zh-TW' ? '健康檢查' : 'Health check-ups',
        locale === 'zh-TW' ? '健身設施' : 'Fitness facilities',
        locale === 'zh-TW' ? '運動社團' : 'Sports clubs',
        locale === 'zh-TW' ? '員工協助方案' : 'Employee assistance program'
      ]
    },
    {
      icon: '🎉',
      title: locale === 'zh-TW' ? '福利活動' : 'Welfare Activities',
      items: [
        locale === 'zh-TW' ? '員工旅遊' : 'Employee trips',
        locale === 'zh-TW' ? '尾牙聚餐' : 'Year-end party',
        locale === 'zh-TW' ? '節慶禮金' : 'Holiday bonuses',
        locale === 'zh-TW' ? '社團活動' : 'Club activities'
      ]
    }
  ]

  const highlights = [
    {
      number: '14+',
      label: locale === 'zh-TW' ? '個月年薪' : 'Months Salary',
      description: locale === 'zh-TW' ? '含年終及績效獎金' : 'Including bonuses'
    },
    {
      number: '100%',
      label: locale === 'zh-TW' ? '保險涵蓋' : 'Insurance Coverage',
      description: locale === 'zh-TW' ? '完整的保險保障' : 'Comprehensive coverage'
    },
    {
      number: '30+',
      label: locale === 'zh-TW' ? '天年假' : 'Days Annual Leave',
      description: locale === 'zh-TW' ? '依年資計算' : 'Based on seniority'
    },
    {
      number: '24/7',
      label: locale === 'zh-TW' ? '員工服務' : 'Employee Support',
      description: locale === 'zh-TW' ? '全天候支持' : 'Round-the-clock'
    }
  ]

  const specialBenefits = [
    {
      title: locale === 'zh-TW' ? '子女教育補助' : 'Children Education Subsidy',
      description: locale === 'zh-TW'
        ? '提供員工子女教育補助,支持家庭教育投資'
        : 'Provide education subsidies for employees\' children'
    },
    {
      title: locale === 'zh-TW' ? '進修補助' : 'Further Education Subsidy',
      description: locale === 'zh-TW'
        ? '鼓勵員工進修,提供學費補助與進修假'
        : 'Encourage employee education with tuition subsidies and study leave'
    },
    {
      title: locale === 'zh-TW' ? '購屋貸款優惠' : 'Housing Loan Benefits',
      description: locale === 'zh-TW'
        ? '提供購屋貸款優惠利率,協助員工安家立業'
        : 'Provide preferential housing loan rates to help employees settle down'
    },
    {
      title: locale === 'zh-TW' ? '退休金制度' : 'Retirement Plan',
      description: locale === 'zh-TW'
        ? '完善的退休金提撥制度,保障退休生活'
        : 'Comprehensive retirement plan to secure post-retirement life'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[500px] bg-gradient-to-br from-psmc-crimson via-purple-900 to-psmc-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-psmc-cyan/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {locale === 'zh-TW' ? '多元福利' : 'Diverse Welfare'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {locale === 'zh-TW'
                ? '提供完善的福利制度,照顧每位員工的身心健康與生活品質'
                : 'Comprehensive welfare system to care for employee wellbeing and quality of life'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-psmc-cyan/10 to-purple-500/10 rounded-3xl"
              >
                <div className="text-5xl font-bold text-psmc-cyan mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-psmc-navy mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welfare Categories */}
      <section className="py-24 bg-psmc-gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-psmc-cyan text-sm font-black tracking-widest uppercase mb-4 block">
              {locale === 'zh-TW' ? '福利項目' : 'Welfare Items'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '完整的福利保障' : 'Comprehensive Welfare Benefits'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {welfareCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-bold text-psmc-navy mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
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

      {/* Special Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-psmc-navy mb-6">
              {locale === 'zh-TW' ? '特色福利' : 'Special Benefits'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'zh-TW'
                ? '除了基本福利,我們還提供多項特色福利方案'
                : 'In addition to basic benefits, we offer various special welfare programs'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-psmc-navy to-psmc-teal text-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-psmc-cyan text-3xl">✓</span>
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed pl-11">
                  {benefit.description}
                </p>
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
              {locale === 'zh-TW' ? '享受完善福利' : 'Enjoy Comprehensive Benefits'}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {locale === 'zh-TW'
                ? '加入力積電,享受業界領先的福利待遇'
                : 'Join PSMC and enjoy industry-leading benefits'}
            </p>
            <a
              href={`/${locale}/career`}
              className="inline-flex items-center gap-3 bg-psmc-cyan text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider hover:bg-white hover:text-psmc-navy transition-all shadow-lg hover:shadow-xl"
            >
              {locale === 'zh-TW' ? '立即應徵' : 'Apply Now'}
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
