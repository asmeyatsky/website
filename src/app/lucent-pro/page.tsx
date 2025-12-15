'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function LucentProPage() {
  const appStoreUrl = 'https://apps.apple.com/us/app/lucent-pro/id6749473261'

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Hero Banner */}
            <Link
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-8 transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/lucent-pro-banner.png"
                alt="Lucent Pro - Download on the App Store"
                width={1200}
                height={720}
                className="rounded-lg shadow-2xl w-full"
                priority
              />
            </Link>

            <p className="text-xl md:text-2xl text-slate-300 mt-4 max-w-2xl mx-auto">
              Production iOS application for intelligent photo organization with 100% on-device AI processing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button"
              >
                Download on App Store
              </Link>
              <Link href="/projects" className="brutalist-button-outline">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">200+</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">AI Collections</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">100%</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">On-Device AI</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">Zero</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Data Collection</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">4</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Apple Platforms</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Intelligent Photo Organization</h2>
            <p className="section-subtitle text-center">
              Powered by Apple Neural Engine with complete privacy protection
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Smart Search</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Natural language photo discovery. Search for &quot;sunset at the beach&quot; or &quot;birthday party&quot; and find exactly what you need.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Natural Language</span>
                  <span className="professional-badge">Voice Search</span>
                </div>
              </div>

              <div className="brutalist-card">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">AI Collections</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Automatic organization into 200+ smart collections: vacations, family, pets, food, nature, and hundreds more categories.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Auto-Organize</span>
                  <span className="professional-badge">Smart Albums</span>
                </div>
              </div>

              <div className="brutalist-card">
                <div className="text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Duplicate Detection</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Identify and remove duplicate and similar photos. Reclaim storage space while keeping your best shots.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Storage Cleanup</span>
                  <span className="professional-badge">Similar Photos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Advanced Capabilities</h2>
            <p className="section-subtitle text-center">
              Professional-grade features for comprehensive photo management
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Photo Map</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Browse memories on an interactive map. Relive travels and rediscover forgotten moments by location.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Location Browse</span>
                  <span className="professional-badge">Travel History</span>
                </div>
              </div>

              <div className="brutalist-card">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Face Recognition</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Find photos of specific people and pets. All recognition processing happens entirely on-device.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">People Search</span>
                  <span className="professional-badge">Pet Detection</span>
                </div>
              </div>

              <div className="brutalist-card">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Text Recognition</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Search for text in photos. Find screenshots, documents, receipts, or signs by the words they contain.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">OCR</span>
                  <span className="professional-badge">Document Search</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Privacy-First Architecture</h2>
            <p className="section-subtitle text-center">
              All AI processing happens entirely on your device using Apple Neural Engine
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">No Cloud Uploads</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Photos never leave your device</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Zero Data Collection</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">No tracking or analytics</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">On-Device Processing</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Apple Neural Engine powered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Platform Support</h2>
            <p className="section-subtitle text-center">
              Native application across all Apple platforms
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">iPhone</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">iOS 16.0+</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">iPad</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">iPadOS 16.0+</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Mac</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">macOS 13.0+ (M1+)</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-3">🥽</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Vision Pro</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">visionOS 1.0+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Technology Stack</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🍎</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">SwiftUI</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Native iOS Framework</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Core ML</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">On-Device Machine Learning</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Vision</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Image Analysis Framework</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">iCloud</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Photo Library Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-brutalist-text mb-6">
              Ready to Organize Your Photos
            </h2>
            <p className="text-brutalist-text-dim mb-8 font-mono">
              Download Lucent Pro and experience intelligent photo management with complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button"
              >
                Download on App Store
              </Link>
              <Link href="/contact" className="brutalist-button-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
