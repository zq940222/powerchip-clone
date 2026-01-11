'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CareerPageProps {
    params: { locale: string }
}

export default function CareerPage({ params: { locale } }: CareerPageProps) {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/career_teamwork.png"
                        alt="PSMC Career"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-psmc-navy/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy via-psmc-navy/40 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-psmc-crimson text-xs font-black tracking-[0.4em] uppercase mb-4 block">Join Our Team</span>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter drop-shadow-2xl">
                            {locale === 'zh-TW' ? '共創未來' : 'Shape the Future'}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                            {locale === 'zh-TW'
                                ? '加入力積電，與全球頂尖人才並肩同行，在半導體領域發揮您的影響力。'
                                : 'Join PSMC and work alongside top global talent to make your impact in the semiconductor industry.'}
                        </p>
                        <button className="bg-psmc-crimson text-white hover:bg-white hover:text-psmc-crimson px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-psmc-crimson/50 flex items-center gap-4 mx-auto group">
                            {locale === 'zh-TW' ? '查看熱門職缺' : 'View Openings'}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Why PSMC? */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Why PSMC</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-psmc-navy mb-8">
                            {locale === 'zh-TW' ? '為什麼選擇力積電？' : 'Why Choose PSMC?'}
                        </h3>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            {locale === 'zh-TW'
                                ? '我們提供具競爭力的薪酬福利、完整的培訓體系以及激發創新的工作環境，讓每位員工都能在此實現自我價值。'
                                : 'We offer competitive compensation and benefits, a comprehensive training system, and an inspiring work environment where every employee can realize their potential.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <BenefitCard
                            icon="school"
                            title={locale === 'zh-TW' ? '學習成長' : 'Learning & Growth'}
                            desc={locale === 'zh-TW' ? '完整的教育訓練與職涯發展規劃' : 'Comprehensive training and career development paths'}
                            color="bg-blue-50 text-blue-600"
                        />
                        <BenefitCard
                            icon="health_and_safety"
                            title={locale === 'zh-TW' ? '健康樂活' : 'Health & Wellness'}
                            desc={locale === 'zh-TW' ? '優於法規的健檢與多元社團活動' : 'Superior health checks and diverse club activities'}
                            color="bg-green-50 text-green-600"
                        />
                        <BenefitCard
                            icon="paid"
                            title={locale === 'zh-TW' ? '薪酬福利' : 'Compensation'}
                            desc={locale === 'zh-TW' ? '具競爭力的薪資與績效獎金制度' : 'Competitive salary and performance bonus system'}
                            color="bg-orange-50 text-orange-600"
                        />
                        <BenefitCard
                            icon="work_outline"
                            title={locale === 'zh-TW' ? '生活平衡' : 'Work-Life Balance'}
                            desc={locale === 'zh-TW' ? '彈性工時與優質的工作環境' : 'Flexible hours and quality work environment'}
                            color="bg-purple-50 text-purple-600"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-psmc-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <StatItem value="30+" label={locale === 'zh-TW' ? '成立年資' : 'Years Established'} />
                        <StatItem value="7500+" label={locale === 'zh-TW' ? '全球員工' : 'Global Employees'} />
                        <StatItem value="6" label={locale === 'zh-TW' ? '晶圓廠' : 'Fabs'} />
                        <StatItem value="TOP 10" label={locale === 'zh-TW' ? '全球排名' : 'Global Ranking'} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-50">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-4xl font-black text-psmc-navy mb-8">
                        {locale === 'zh-TW' ? '準備好加入我們了嗎？' : 'Ready to Join Us?'}
                    </h2>
                    <p className="text-slate-500 text-xl font-light mb-12">
                        {locale === 'zh-TW'
                            ? '探索更多職缺機會，開啟您的半導體職涯新篇章。'
                            : 'Explore more job opportunities and start a new chapter in your semiconductor career.'}
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-psmc-navy text-white hover:bg-psmc-cyan hover:text-psmc-navy px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-xl">
                            104 人力銀行
                        </button>
                        <button className="bg-white text-psmc-navy border border-psmc-navy/10 hover:border-psmc-navy px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-xl">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function BenefitCard({ icon, title, desc, color }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 h-full"
        >
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-2xl mb-6`}>
                <span className="material-icons-outlined">{icon}</span>
            </div>
            <h4 className="text-xl font-black text-psmc-navy mb-3">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
        </motion.div>
    )
}

function StatItem({ value, label }: any) {
    return (
        <div>
            <div className="text-4xl md:text-6xl font-black text-psmc-cyan mb-2">{value}</div>
            <div className="text-white/60 text-xs font-bold uppercase tracking-widest">{label}</div>
        </div>
    )
}
