'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/5 rounded-full blur-3xl floating-element animation-delay-100"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent-cyan/5 rounded-full blur-3xl floating-element animation-delay-200"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl floating-element animation-delay-300"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            {/* Main Title */}
            <h1 className="professional-title">
              <span className="elegant-gradient">Allan Smeyatsky</span>
            </h1>
            
            {/* Subtitle */}
            <p className="professional-subtitle">
              Transformational Technology Executive with three decades of solution architecture excellence spanning on-premises to cloud-native ecosystems across global enterprises.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/projects"
                className="professional-button px-8 py-4 text-lg"
              >
                Explore Portfolio
              </Link>

              <Link
                href="/about"
                className="professional-card px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                Learn About My Journey
              </Link>

              <Link
                href="/vibecoding-charter"
                className="professional-card px-8 py-4 text-lg font-semibold text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                VibeCode Charter
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="professional-card p-6 rounded-xl text-center hover-glow-intense">
                <div className="text-3xl font-bold professional-gradient mb-2">30+</div>
                <div className="text-neutral-medium text-sm">Years Experience</div>
              </div>
              <div className="professional-card p-6 rounded-xl text-center hover-glow-intense">
                <div className="text-3xl font-bold professional-gradient mb-2">AI-Native</div>
                <div className="text-neutral-medium text-sm">Architecture</div>
              </div>
              <div className="professional-card p-6 rounded-xl text-center hover-glow-intense">
                <div className="text-3xl font-bold professional-gradient mb-2">Multi-Cloud</div>
                <div className="text-neutral-medium text-sm">Expert</div>
              </div>
              <div className="professional-card p-6 rounded-xl text-center hover-glow-intense">
                <div className="text-3xl font-bold professional-gradient mb-2">Enterprise</div>
                <div className="text-neutral-medium text-sm">Scale Impact</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Sections */}
        <section className="section-padding professional-section">
          <div className="content-container">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="section-header">Core Expertise</h2>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                Three decades of transformational technology leadership and innovation
              </p>
            </div>

            <div className="card-grid">
              {/* Solution Architecture */}
              <div className="elegant-card p-8 elegant-hover">
                <div className="professional-icon">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="section-subheader">Solution Architecture</h3>
                <p className="text-primary-text/80 mb-6">
                  30 years of experience in enterprise architecture, hybrid/multi-cloud strategies, microservices, API-first design, and domain-driven design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="professional-badge">Enterprise Architecture</span>
                  <span className="professional-badge">API-First</span>
                </div>
                <Link href="/consulting" className="font-semibold text-accent-blue hover:text-white transition-colors duration-200">
                  View Capabilities →
                </Link>
              </div>
              
              {/* Multi-Cloud Expertise */}
              <div className="elegant-card p-8 elegant-hover">
                <div className="professional-icon">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="section-subheader">Multi-Cloud Expertise</h3>
                <p className="text-primary-text/80 mb-6">
                  8 years of expertise across GCP, AWS, and Azure, with specializations in GKE, EKS, AKS, serverless, and more.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="professional-badge">GCP</span>
                  <span className="professional-badge">AWS</span>
                  <span className="professional-badge">Azure</span>
                </div>
                <Link href="/consulting" className="font-semibold text-accent-blue hover:text-white transition-colors duration-200">
                  Technical Expertise →
                </Link>
              </div>
              
              {/* AI & Machine Learning */}
              <div className="elegant-card p-8 elegant-hover">
                <div className="professional-icon">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="section-subheader">AI & Machine Learning</h3>
                <p className="text-primary-text/80 mb-6">
                  2 years of experience with Anthropic Claude, Google Gemini, and OpenAI, including API integration, prompt engineering, and function calling.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="professional-badge">Gemini</span>
                  <span className="professional-badge">Claude</span>
                  <span className="professional-badge">OpenAI</span>
                </div>
                <Link href="/consulting" className="font-semibold text-accent-blue hover:text-white transition-colors duration-200">
                  AI Experience →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section className="section-padding">
          <div className="content-container">
            <div className="text-center mb-16">
              <h2 className="section-header">Technology Leadership</h2>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                Modern technology stack driving innovation and architectural excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="professional-card p-6 rounded-xl text-center professional-hover">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold text-primary-text mb-2">iOS Development</h3>
                <p className="text-neutral-medium text-sm">Swift 5.9, SwiftUI, Xcode 15, UIKit, Core Data, CloudKit</p>
              </div>
              <div className="professional-card p-6 rounded-xl text-center professional-hover">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-semibold text-primary-text mb-2">Full-Stack JavaScript</h3>
                <p className="text-neutral-medium text-sm">Node.js, Express.js, React, TypeScript, RESTful APIs</p>
              </div>
              <div className="professional-card p-6 rounded-xl text-center professional-hover">
                <div className="text-4xl mb-4">🐍</div>
                <h3 className="font-semibold text-primary-text mb-2">Python Development</h3>
                <p className="text-neutral-medium text-sm">FastAPI, Flask, CLI Tools, Data Processing, Automation Scripts</p>
              </div>
              <div className="professional-card p-6 rounded-xl text-center professional-hover">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-semibold text-primary-text mb-2">AI-Assisted Development</h3>
                <p className="text-neutral-medium text-sm">Claude Code, Gemini CLI, GitHub Copilot (1 Year)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}