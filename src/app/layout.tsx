import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'

// Force deployment - professional styling update

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}