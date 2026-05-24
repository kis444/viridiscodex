import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat_Alternates } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'viridiscodex — Full Stack Developer & Designer',
  description: 'Premium web development services. I understand composition like an artist and structure like an engineer.',
  verification: {
    google: '-Vdy5T8r02SDId53uVQp_wJf9yPYT2kKirYgIxiTzUg',
  },
}

export const viewport: Viewport = {
  themeColor: '#6B2737',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
