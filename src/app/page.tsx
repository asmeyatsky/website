'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import GitHubProfile from '@/components/GitHubProfile'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import AINewsPreview from '@/components/AINewsPreview'

export default function Home() {

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Smeyatsky Labs */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 pb-4">
              Smeyatsky Labs
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mt-4 max-w-2xl mx-auto">
              Engineering production-grade applications across App Store, full-stack web, and enterprise platforms.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/projects" className="brutalist-button">
                View Applications
              </Link>
              <Link href="/contact" className="brutalist-button-outline">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">30+</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Years Experience</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">AI</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Native Architecture</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">GCP</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Multi-Cloud Expert</div>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-brutalist-accent">800+</div>
                <div className="text-xs sm:text-sm text-brutalist-text-dim font-mono mt-2">Team Members Led</div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Categories Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Application Development</h2>
            <p className="section-subtitle text-center">
              Shipping production-grade applications across multiple platforms and markets
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* App Store Applications */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">App Store Applications</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Shipped iOS applications with sophisticated UI/UX, on-device AI, cloud integration, and App Store optimization. Focus on user experience and performance at scale.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">SwiftUI</span>
                  <span className="professional-badge">CloudKit</span>
                  <span className="professional-badge">On-Device AI</span>
                </div>
              </div>

              {/* Full-Stack Web Applications */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Full-Stack Web Applications</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Enterprise and consumer web platforms with scalable architectures, real-time features, payment integration, and optimized performance. Production deployments on cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">React</span>
                  <span className="professional-badge">Node.js</span>
                  <span className="professional-badge">Scalable APIs</span>
                </div>
              </div>

              {/* Enterprise Cloud Solutions */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Enterprise Cloud Solutions</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Cloud modernization, infrastructure architecture, API-first design, and multi-cloud strategies. Leveraging 30+ years of enterprise experience for digital transformation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Cloud Architecture</span>
                  <span className="professional-badge">Kubernetes</span>
                  <span className="professional-badge">Modernization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Profile Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Open Source Contributions</h2>
            <p className="section-subtitle text-center">
              Active open source development supporting application ecosystems
            </p>
            <div className="max-w-2xl mx-auto">
              <GitHubProfile />
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Professional Background</h2>
            <p className="section-subtitle text-center">
              Global technology leader combining 30+ years of enterprise architecture with hands-on application development
            </p>
            <div className="max-w-4xl mx-auto">
              <ExperienceTimeline />
            </div>
          </div>
        </section>

        {/* AI News Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">AI Insights</h2>
            <p className="section-subtitle text-center">
              Latest developments in artificial intelligence
            </p>
            <div className="max-w-4xl mx-auto">
              <AINewsPreview />
            </div>
          </div>
        </section>

        {/* Core Expertise Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Technical Leadership</h2>
            <p className="section-subtitle text-center">
              Deep expertise across architecture, infrastructure, and modern AI technologies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Solution Architecture */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Architecture & Design</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  30 years designing enterprise systems. Specializing in scalable architectures, API-first design, domain-driven design, and systems that grow from prototype to production.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">API-First</span>
                  <span className="professional-badge">DDD</span>
                  <span className="professional-badge">Scalability</span>
                </div>
              </div>

              {/* Multi-Cloud */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Cloud Infrastructure</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  8+ years deploying production applications across GCP, AWS, and Azure. Kubernetes, serverless platforms, and DevSecOps for applications at scale.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">GCP</span>
                  <span className="professional-badge">Kubernetes</span>
                  <span className="professional-badge">DevSecOps</span>
                </div>
              </div>

              {/* AI & ML */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">AI-Native Development</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  Integrating Claude, Gemini, and OpenAI into production applications. Prompt engineering, RAG systems, and building AI capabilities that enhance user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Claude</span>
                  <span className="professional-badge">Gemini</span>
                  <span className="professional-badge">RAG Systems</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Technology Stack</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">iOS Dev</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Swift, SwiftUI, Xcode</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Full-Stack JS</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Node.js, React, TypeScript</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🐍</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">Python</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">FastAPI, Flask, CLI Tools</p>
              </div>
              <div className="brutalist-card text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-bold font-mono text-brutalist-text mb-2">AI-Assisted</h3>
                <p className="text-brutalist-text-dim text-sm font-mono">Claude Code, Gemini CLI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-brutalist-text mb-6">
              Ready to Partner
            </h2>
            <p className="text-brutalist-text-dim mb-8 font-mono">
              Available for architecture consulting, full-stack development, and strategic technology partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consulting"
                className="brutalist-button"
              >
                Consulting Services
              </Link>
              <Link
                href="/contact"
                className="brutalist-button-outline"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
