'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { TerminalLines } from '@/components/TerminalTyping'
import GitHubProfile from '@/components/GitHubProfile'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import AINewsPreview from '@/components/AINewsPreview'

export default function Home() {
  const vibeCodePrinciples = [
    'Human-AI Symbiosis',
    'Mindful Development',
    'Flow State Engineering',
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - VibeCode First */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="content-wrapper max-w-4xl">
            <div className="text-center space-y-8">
              {/* Main Title */}
              <h1 className="hero-title">
                VibeCode
                <br />
                Developer
              </h1>

              {/* Animated Principles */}
              <div className="space-y-2 sm:space-y-3">
                <TerminalLines
                  lines={vibeCodePrinciples}
                  lineDelay={800}
                  speed={30}
                  className="terminal-line"
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/vibecoding-charter"
                  className="brutalist-button"
                >
                  Read the Charter
                </Link>
                <Link
                  href="https://github.com/asmeyatsky/vibecoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-button-outline"
                >
                  View on GitHub
                </Link>
              </div>

              {/* Divider */}
              <div className="pt-12 pb-8">
                <div className="h-px bg-border"></div>
              </div>

              {/* Personal Brand */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-text">
                  Allan Smeyatsky
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-mono text-accent">
                  30yr Tech Executive • AI • Cloud • Architecture
                </p>
                <p className="text-sm sm:text-base font-mono text-brutalist-text-dim max-w-2xl mx-auto">
                  Transformational technology leader combining strategic vision with hands-on technical execution
                </p>
              </div>
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

        {/* GitHub Profile Section */}
        <section className="section-spacing">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Open Source Work</h2>
            <div className="max-w-2xl mx-auto">
              <GitHubProfile />
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="section-spacing bg-code-bg">
          <div className="content-wrapper">
            <h2 className="section-title text-center">Experience</h2>
            <p className="section-subtitle text-center">
              Three decades of transformational technology leadership
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
            <h2 className="section-title text-center">Core Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Solution Architecture */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Solution Architecture</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  30 years of enterprise architecture, hybrid/multi-cloud strategies, and domain-driven design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Enterprise</span>
                  <span className="professional-badge">API-First</span>
                  <span className="professional-badge">DDD</span>
                </div>
              </div>

              {/* Multi-Cloud */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">Multi-Cloud Expertise</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  8 years across GCP, AWS, and Azure, with specializations in GKE, serverless, and Kubernetes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">GCP</span>
                  <span className="professional-badge">AWS</span>
                  <span className="professional-badge">Azure</span>
                </div>
              </div>

              {/* AI & ML */}
              <div className="brutalist-card">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold font-mono text-brutalist-text mb-3">AI & Machine Learning</h3>
                <p className="text-brutalist-text-dim text-sm mb-4">
                  2 years with Claude, Gemini, and OpenAI, including API integration and prompt engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="professional-badge">Claude</span>
                  <span className="professional-badge">Gemini</span>
                  <span className="professional-badge">OpenAI</span>
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
              Let's Build Together
            </h2>
            <p className="text-brutalist-text-dim mb-8 font-mono">
              Interested in collaboration, consulting, or just want to connect?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="brutalist-button"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="brutalist-button-outline"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
