import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NBS Freight LLC | Veteran-Owned Freight Broker | Columbus, OH',
  description:
    'NBS Freight LLC is a veteran-owned freight brokerage led by Nic Spears with 23+ years in transportation. Reliable truckload coordination, honest communication, and long-term partnerships for shippers across the US. MC#1356267 | DOT#3784905',
  keywords: [
    'freight broker',
    'freight brokerage services',
    'veteran-owned freight broker',
    'truckload freight broker',
    'reliable freight brokerage',
    'freight broker for shippers',
    'transportation consulting',
    'logistics consulting',
    'Columbus Ohio freight broker',
    'full truckload brokerage',
    'shipper freight solutions',
    'NBS Freight LLC',
  ],
  authors: [{ name: 'Nic Spears', url: 'https://nbsfreightllc.com' }],
  creator: 'Nic Spears',
  openGraph: {
    title: 'NBS Freight LLC | Nothing. But. Satisfaction.',
    description:
      'Veteran-owned freight brokerage built on 23+ years of real transportation experience. Reliable carriers, direct communication, and relationships that last.',
    url: 'https://nbsfreightllc.com',
    siteName: 'NBS Freight LLC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBS Freight LLC | Veteran-Owned Freight Broker',
    description:
      'Reliable freight brokerage built on experience, communication, and trust. 23+ years in transportation.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
