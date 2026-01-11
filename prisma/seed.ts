import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@powerchip.com' },
    update: {},
    create: {
      email: 'admin@powerchip.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN',
    },
  })

  console.log('Created admin user:', admin.email)

  // Create news categories
  const categories = await Promise.all([
    prisma.newsCategory.upsert({
      where: { slug: 'company' },
      update: {},
      create: {
        nameZh: '公司新聞',
        nameEn: 'Company News',
        slug: 'company',
      },
    }),
    prisma.newsCategory.upsert({
      where: { slug: 'product' },
      update: {},
      create: {
        nameZh: '產品新聞',
        nameEn: 'Product News',
        slug: 'product',
      },
    }),
    prisma.newsCategory.upsert({
      where: { slug: 'event' },
      update: {},
      create: {
        nameZh: '活動新聞',
        nameEn: 'Event News',
        slug: 'event',
      },
    }),
  ])

  console.log('Created categories:', categories.map((c) => c.slug).join(', '))

  // Create sample news
  const sampleNews = await prisma.news.upsert({
    where: { id: 1 },
    update: {},
    create: {
      titleZh: '力積電宣布擴大產能計畫',
      titleEn: 'PSMC Announces Capacity Expansion Plan',
      contentZh: '<p>力積電今日宣布將擴大晶圓代工產能，以滿足市場不斷增長的需求。此次擴產計畫將涵蓋多項先進製程技術。</p><p>公司表示，此舉將有助於強化公司在全球半導體供應鏈中的地位，並為客戶提供更優質的服務。</p>',
      contentEn: '<p>PSMC announced today that it will expand its wafer foundry capacity to meet the growing market demand. This expansion plan will cover multiple advanced process technologies.</p><p>The company stated that this move will help strengthen its position in the global semiconductor supply chain and provide better services to customers.</p>',
      excerptZh: '力積電今日宣布將擴大晶圓代工產能，以滿足市場不斷增長的需求。',
      excerptEn: 'PSMC announced today that it will expand its wafer foundry capacity to meet the growing market demand.',
      published: true,
      publishedAt: new Date(),
      categoryId: categories[0].id,
      authorId: admin.id,
    },
  })

  console.log('Created sample news:', sampleNews.titleZh)

  console.log('Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
