import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LFMC - Lebanese Food Manufacturing Company',
  description:
    'Discover authentic Lebanese taste with LFMC. From traditional ready-to-eat meals to innovative food services, we bring the heart of Lebanese cuisine to Egypt, Jordan, Lebanon, and beyond.',
  generator: 'Shaheen Amjed',
  keywords: [
    'LFMC',
    'Lebanese Food',
    'Lebanese cuisine',
    'Middle Eastern food',
    'Ready meals Lebanon',
    'LFMC restaurants',
    'authentic Lebanese dishes',
    'Lebanese food Egypt',
    'Lebanese food Jordan',
    'Lebanese food Lebanon',
    'traditional Lebanese recipes',
    'food manufacturing Lebanon',
  ],
  authors: [
    { name: 'Shaheen Amjed', url: 'https://fiverr.com/shaheen_amjed' },
    { name: 'Shaheen Amjed', url: 'https://shaheen-amjed.vercel.app' }
  ],
  creator: 'Shaheen Amjed',
  publisher: 'LFMC - Lebanese Food Manufacturing Company',
  applicationName: 'LFMC Web App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
