'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('common')
  const tFooter = useTranslations('footer')

  const quickLinks = [
    { name: t('about'), href: `/${locale}/about` },
    { name: t('technology'), href: `/${locale}/technology` },
    { name: t('investor'), href: `/${locale}/investor` },
    { name: t('news'), href: `/${locale}/news` },
    { name: t('contact'), href: `/${locale}/contact` },
  ]

  const [contactInfo, setContactInfo] = useState({
    addressZh: '台灣新竹科學園區力行一路12號',
    addressEn: 'No. 12, Li-Hsin 1st Rd., Hsinchu Science Park, Hsinchu 300, Taiwan',
    phone: '+886-3-579-5000',
    fax: '+886-3-579-5001',
    serviceEmail: '',
    irEmail: ''
  })

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch('/api/contact')
        const json = await res.json()
        if (json.success) {
          setContactInfo(prev => ({ ...prev, ...json.data }))
        }
      } catch (err) {
        console.error('Failed to fetch contact info:', err)
      }
    }
    fetchInfo()
  }, [])

  return (
    <footer className="bg-psmc-navy text-white border-t border-white/10">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="text-3xl font-black tracking-tighter hover:text-psmc-cyan transition-colors inline-block uppercase">
              PSMC
            </Link>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-md">
              {locale === 'zh-TW'
                ? '力積電是專業的晶圓代工服務提供者，秉持誠信、優質服務、高品質和創新的企業文化，迎接未來的挑戰。'
                : 'Powerchip Semiconductor Manufacturing Corporation is a professional wafer foundry service provider, upholding our corporate culture of integrity, excellent service, high quality and innovation.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-psmc-cyan text-xs font-bold uppercase tracking-[0.3em] mb-8">{tFooter('quickLinks') || 'Explore'}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-psmc-cyan transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-psmc-cyan text-xs font-bold uppercase tracking-[0.3em] mb-8">{t('contact') || 'Contact'}</h3>
            <address className="not-italic text-white/70 text-sm space-y-3 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-psmc-cyan">A:</span>
                {locale === 'zh-TW' ? contactInfo.addressZh : contactInfo.addressEn}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-psmc-cyan">T:</span> {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-psmc-cyan">F:</span> {contactInfo.fax}
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[xs]">
          <p>
            {t('copyright') || 'Copyright'} &copy; {new Date().getFullYear()} PSMC. {t('allRightsReserved') || 'All Rights Reserved.'}
          </p>
          <div className="flex gap-8">
            <Link href={`/${locale}/privacy`} className="hover:text-psmc-cyan transition-colors">Privacy Policy</Link>
            <Link href={`/${locale}/terms`} className="hover:text-psmc-cyan transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer >
  )
}
