'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '../ui/Card'
import Button from '../ui/Button'
import { formatDate } from '@/lib/utils'
import type { News } from '@/types'

interface NewsSectionProps {
  locale: string
  news: News[]
}

export default function NewsSection({ locale, news }: NewsSectionProps) {
  const t = useTranslations('home.news')
  const tCommon = useTranslations('common')

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
        </div>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item) => (
              <Link key={item.id} href={`/${locale}/news/${item.id}`}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  {item.coverImage && (
                    <div className="aspect-video bg-secondary-200 overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={locale === 'zh-TW' ? item.titleZh : item.titleEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm text-secondary-500 mb-2">
                      {item.publishedAt && formatDate(item.publishedAt, locale)}
                    </p>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2 line-clamp-2">
                      {locale === 'zh-TW' ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-secondary-600 text-sm line-clamp-3">
                      {locale === 'zh-TW' ? item.excerptZh : item.excerptEn}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-secondary-500">
            {t('noNews')}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href={`/${locale}/news`}>
            <Button variant="outline">{tCommon('viewAll')}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
