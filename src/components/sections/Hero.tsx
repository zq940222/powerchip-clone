'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

interface HeroProps {
  locale: string
}

export default function Hero({ locale }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const keywordVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <img
          src="/images/hero_fab_night.png"
          alt="PSMC Semiconductor Fab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-psmc-navy/80 via-psmc-navy/40 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title with colored keywords */}
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-8 flex flex-wrap gap-x-6 text-white"
            variants={itemVariants}
          >
            <motion.span variants={keywordVariants} className="text-white hover:text-psmc-cyan transition-colors cursor-default">
              {locale === 'zh-TW' ? '誠信' : 'Integrity'}
            </motion.span>
            <motion.span variants={keywordVariants} className="text-psmc-crimson hover:brightness-110 transition-colors cursor-default">
              {locale === 'zh-TW' ? '服務' : 'Service'}
            </motion.span>
            <motion.span variants={keywordVariants} className="text-psmc-teal-bright hover:brightness-110 transition-colors cursor-default">
              {locale === 'zh-TW' ? '品質' : 'Quality'}
            </motion.span>
            <motion.span variants={keywordVariants} className="text-psmc-gold hover:brightness-110 transition-colors cursor-default">
              {locale === 'zh-TW' ? '創新' : 'Innovation'}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light"
            variants={itemVariants}
          >
            {locale === 'zh-TW'
              ? '力積電是世界級的晶圓代工服務提供者，致力於卓越與永續創新的半導體製造。'
              : 'PSMC is a world-class foundry service provider, committed to excellence and sustainable innovation in semiconductor manufacturing.'}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href={`/${locale}/about`}>
              <button className="bg-psmc-cyan hover:bg-white hover:text-psmc-navy text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-base transition-all shadow-2xl hover:shadow-psmc-cyan/50 transform hover:-translate-y-1">
                {locale === 'zh-TW' ? '探索更多' : 'Explore'}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-1 h-12 bg-gradient-to-b from-psmc-cyan to-transparent rounded-full animate-bounce" />
      </motion.div>
    </section>
  )
}
