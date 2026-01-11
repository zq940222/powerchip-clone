import Link from 'next/link'
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import { setRequestLocale } from 'next-intl/server'

interface NewsDetailPageProps {
  params: { locale: string; id: string }
}

async function getNewsById(id: number) {
  try {
    return await prisma.news.findUnique({
      where: { id },
      include: {
        category: true,
        author: { select: { name: true } }
      }
    })
  } catch {
    return null
  }
}

export default async function NewsDetailPage({ params: { locale, id } }: NewsDetailPageProps) {
  setRequestLocale(locale)
  const news = await getNewsById(parseInt(id))

  if (!news || !news.published) {
    notFound()
  }

  const title = locale === 'zh-TW' ? news.titleZh : news.titleEn
  const categoryName = news.category ? (locale === 'zh-TW' ? news.category.nameZh : news.category.nameEn) : null
  const content = locale === 'zh-TW' ? news.contentZh : news.contentEn

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center gap-2 text-psmc-cyan font-black uppercase tracking-widest text-xs mb-10 group"
            >
              <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              {locale === 'zh-TW' ? '返回新聞中心' : 'Back to News Center'}
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {categoryName && (
                <span className="px-5 py-2 bg-psmc-navy text-psmc-cyan text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                  {categoryName}
                </span>
              )}
              <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">
                {news.publishedAt && formatDate(news.publishedAt, locale)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-psmc-navy mb-12 tracking-tight leading-tight">
              {title}
            </h1>

            <div className="flex items-center gap-4 pb-12 border-b border-slate-100 mb-12">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-psmc-navy font-black text-xs">
                PS
              </div>
              <div>
                <p className="font-black text-psmc-navy text-sm uppercase tracking-widest">PSMC Editorial</p>
                <p className="text-slate-400 text-xs font-light">Powerchip Semiconductor Manufacturing Corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {news.coverImage && (
              <div className="mb-20 rounded-[60px] overflow-hidden shadow-2xl relative aspect-[16/9]">
                <img
                  src={news.coverImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psmc-navy/20 to-transparent" />
              </div>
            )}

            <div
              className="prose prose-2xl prose-slate max-w-none text-psmc-navy font-light leading-relaxed prose-headings:font-black prose-headings:text-psmc-navy prose-a:text-psmc-cyan prose-strong:text-psmc-navy prose-strong:font-black"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Share:</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-psmc-navy hover:bg-psmc-navy hover:text-white transition-all">
                    <span className="material-icons-outlined text-lg">share</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-psmc-navy hover:bg-psmc-navy hover:text-white transition-all">
                    <span className="material-icons-outlined text-lg">print</span>
                  </button>
                </div>
              </div>

              <Link href={`/${locale}/news`}>
                <button className="px-12 py-5 bg-slate-50 text-psmc-navy font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-psmc-navy hover:text-white transition-all shadow-sm">
                  {locale === 'zh-TW' ? '返回列表' : 'View All News'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related News Placeholder / Bottom Section */}
      <section className="mt-32 py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-custom">
          <h2 className="text-2xl font-black text-psmc-navy mb-12 uppercase tracking-widest text-center">More from PSMC</h2>
          {/* Simple CTA back to tech */}
          <div className="max-w-4xl mx-auto bg-psmc-navy p-12 md:p-20 rounded-[60px] text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-psmc-cyan/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Explore our Technology</h3>
              <p className="text-white/60 mb-10 max-w-xl mx-auto font-light">Learn about the advanced foundry services and design capabilities that power the digital world.</p>
              <Link href={`/${locale}/technology`}>
                <button className="bg-psmc-cyan text-psmc-navy px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
