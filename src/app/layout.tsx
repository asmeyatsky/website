import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Script from 'next/script'
import { CalendlyProvider } from '@/context/calendly-context'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Allan Smeyatsky | Technology Executive & AI Solutions Architect',
  description: 'Transformational Technology Executive with 30+ years of experience in enterprise architecture, AI-native solutions, and multi-cloud strategies.',
  keywords: ['Allan Smeyatsky', 'Technology Executive', 'AI Solutions', 'Enterprise Architecture', 'Multi-Cloud', 'Solution Architect', 'Consulting'],
  authors: [{ name: 'Allan Smeyatsky' }],
  creator: 'Allan Smeyatsky',
  publisher: 'Allan Smeyatsky',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Allan Smeyatsky | Technology Executive & AI Solutions Architect',
    description: 'Transformational Technology Executive with 30+ years of experience in enterprise architecture, AI-native solutions, and multi-cloud strategies.',
    url: 'https://smeyatsky.com',
    siteName: 'Allan Smeyatsky',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://smeyatsky.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Allan Smeyatsky - Technology Executive & AI Solutions Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allan Smeyatsky | Technology Executive & AI Solutions Architect',
    description: 'Transformational Technology Executive with 30+ years of experience in enterprise architecture, AI-native solutions, and multi-cloud strategies.',
    images: ['https://smeyatsky.com/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        <CalendlyProvider>
          {children}
        </CalendlyProvider>
        <Script src="https://assets.calendly.com/assets/external/widget.js" async />
      </body>
    </html>
  )
}