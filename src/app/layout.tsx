import type { Metadata } from 'next'
import { Poppins, Open_Sans, Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  title: 'PSMC - Powerchip Semiconductor Manufacturing Corporation',
  description: 'Professional wafer foundry services with innovative technology and excellent quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
