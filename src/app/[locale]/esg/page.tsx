'use client'

import Hero from '@/components/sections/Hero'
import { motion } from 'framer-motion'

interface ESGPageProps {
    params: { locale: string }
}

export default function ESGPage({ params: { locale } }: ESGPageProps) {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/sustainability_nature.png"
                        alt="ESG Sustainability"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-psmc-teal/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy via-transparent to-transparent" />
                </div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white/80 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Sustainable Future</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                            {locale === 'zh-TW' ? '永續發展' : 'ESG & Sustainability'}
                        </h1>
                        <div className="w-24 h-1.5 bg-white mb-8 rounded-full" />
                        <p className="text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
                            {locale === 'zh-TW'
                                ? '致力於環境保護、社會責任与公司治理，共創美好未來。'
                                : 'Committed to environmental protection, social responsibility, and corporate governance for a better future.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Pillars */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Environmental */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[40px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-psmc-teal/10 text-psmc-teal flex items-center justify-center text-3xl mb-8 group-hover:bg-psmc-teal group-hover:text-white transition-colors">
                                <span className="material-icons-outlined">eco</span>
                            </div>
                            <h3 className="text-2xl font-black text-psmc-navy mb-4">
                                {locale === 'zh-TW' ? '環境保護' : 'Environmental'}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-8">
                                {locale === 'zh-TW'
                                    ? '推動綠色製造，落实節能減碳，提升水資源回收率，致力於達成淨零排放目標。'
                                    : 'Promoting green manufacturing, implementing energy saving and carbon reduction, improving water recycling rates, and committing to net-zero emissions.'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-teal" />
                                    Green Manufacturing
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-teal" />
                                    Climate Action
                                </li>
                            </ul>
                        </motion.div>

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group bg-white rounded-[40px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-psmc-crimson/10 text-psmc-crimson flex items-center justify-center text-3xl mb-8 group-hover:bg-psmc-crimson group-hover:text-white transition-colors">
                                <span className="material-icons-outlined">people</span>
                            </div>
                            <h3 className="text-2xl font-black text-psmc-navy mb-4">
                                {locale === 'zh-TW' ? '社會責任' : 'Social'}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-8">
                                {locale === 'zh-TW'
                                    ? '重視員工福祉，營造多元包容的職場環境，並積極參與社會公益，回饋在地社區。'
                                    : 'Valuing employee well-being, creating a diverse and inclusive workplace, and actively participating in social welfare to give back to the community.'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-crimson" />
                                    Talent Development
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-crimson" />
                                    Community Engagement
                                </li>
                            </ul>
                        </motion.div>

                        {/* Governance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group bg-white rounded-[40px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-psmc-cyan/10 text-psmc-cyan flex items-center justify-center text-3xl mb-8 group-hover:bg-psmc-cyan group-hover:text-white transition-colors">
                                <span className="material-icons-outlined">gavel</span>
                            </div>
                            <h3 className="text-2xl font-black text-psmc-navy mb-4">
                                {locale === 'zh-TW' ? '公司治理' : 'Governance'}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-8">
                                {locale === 'zh-TW'
                                    ? '堅持誠信經營，強化董事會職能，落實風險管理，保障股東權益，追求永續經營。'
                                    : 'Upholding integrity, strengthening board functions, implementing risk management, protecting shareholder interests, and pursuing sustainable operations.'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-cyan" />
                                    Ethical Management
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold text-psmc-navy/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-psmc-cyan" />
                                    Information Security
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Report Download Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-psmc-navy rounded-[48px] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-psmc-cyan/10 blur-[100px] rounded-full" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="text-white max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-black mb-6">
                                    {locale === 'zh-TW' ? '最新永續報告書' : 'Latest Sustainability Report'}
                                </h2>
                                <p className="text-white/60 text-lg font-light leading-relaxed">
                                    {locale === 'zh-TW'
                                        ? '下載我們的年度 ESG 報告，深入了解力積電在永續發展方面的績效與承諾。'
                                        : 'Download our annual ESG report to learn more about PSMC\'s performance and commitment to sustainability.'}
                                </p>
                            </div>
                            <button className="bg-psmc-cyan text-psmc-navy hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-psmc-cyan/10 flex items-center gap-3 group shrink-0">
                                <span className="material-icons-outlined text-xl">download</span>
                                {locale === 'zh-TW' ? '下載報告' : 'Download PDF'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
