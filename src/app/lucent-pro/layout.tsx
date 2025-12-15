import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucent Pro - AI Photo Manager | Smeyatsky Labs',
  description: 'Production iOS application for intelligent photo organization. On-device AI processing, smart search, duplicate detection, and photo maps. Privacy-first architecture.',
  openGraph: {
    title: 'Lucent Pro - AI Photo Manager',
    description: 'Production iOS application for intelligent photo organization with on-device AI. Your photos never leave your device.',
    type: 'website',
    images: ['/lucent-pro-og.png'],
  },
}

export default function LucentProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
