import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Script from 'next/script'
import { CalendlyProvider } from '@/context/calendly-context'
import LinkedInCompatibility from '@/components/LinkedInCompatibility'

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

// Add LinkedIn-specific meta tags
const linkedInMeta = `
<meta http-equiv="refresh" content="0; url=https://smeyatsky.com" />
<script>
  // Fallback for LinkedIn in-app browser
  if (window.location !== window.parent.location) {
    window.top.location.href = 'https://smeyatsky.com';
  }
</script>
`

export const metadata: Metadata = {
  title: 'Smeyatsky Labs - Indie Apps & Tools',
  description: 'Building small, high-impact tools that solve real problems.',
  keywords: ['Smeyatsky Labs', 'Indie Apps', 'Developer Tools', 'AI', 'Productivity', 'Software'],
  authors: [{ name: 'Allan Smeyatsky' }],
  creator: 'Allan Smeyatsky',
  publisher: 'Smeyatsky Labs',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Smeyatsky Labs - Indie Apps & Tools',
    description: 'Building small, high-impact tools that solve real problems.',
    url: 'https://smeyatsky.com',
    siteName: 'Smeyatsky Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://smeyatsky.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smeyatsky Labs - Indie Apps & Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smeyatsky Labs - Indie Apps & Tools',
    description: 'Building small, high-impact tools that solve real problems.',
    images: ['https://smeyatsky.com/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '12px',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            💼 For the best experience, open this link in your browser instead of the LinkedIn app
          </div>
        </noscript>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var ua = navigator.userAgent || '';
              var isLinkedIn = ua.includes('LinkedInApp') || ua.includes('com.linkedin.LinkedIn') ||
                               (ua.includes('Mobile') && ua.includes('Safari') && !ua.includes('Chrome'));

              if (isLinkedIn || window.location !== window.parent.location) {
                var banner = document.createElement('div');
                banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#1f2937;color:white;padding:12px;text-align:center;font-size:14px;font-family:system-ui,sans-serif';
                banner.innerHTML = '💼 <span style="margin:0 8px">For best experience, tap menu → "Open in Browser"</span> <button onclick="window.open(location.href)" style="background:#3b82f6;color:white;border:none;padding:4px 12px;border-radius:4px;margin-left:8px">Open</button>';
                document.body.insertBefore(banner, document.body.firstChild);

                // Try to break out of iframe
                if (window.top && window.top !== window) {
                  try { window.top.location.href = window.location.href; } catch(e) {}
                }
              }
            })();
          `
        }} />
        <LinkedInCompatibility />
        <CalendlyProvider>
          {children}
        </CalendlyProvider>
        <Script src="https://assets.calendly.com/assets/external/widget.js" async />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9TKS0RBM9P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9TKS0RBM9P');
          `}
        </Script>
      </body>
    </html>
  )
}