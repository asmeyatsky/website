'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function VibecodingCharter() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding professional-section">
          <div className="content-container max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="section-header">
                <span className="elegant-gradient">VibeCode Charter</span>
              </h1>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                A manifesto for mindful, human-centered development in the age of AI
              </p>
              <div className="mt-8">
                <Link
                  href="https://github.com/asmeyatsky/vibecoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="professional-button inline-flex items-center gap-2"
                >
                  <span>View on GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Charter Content */}
            <div className="elegant-card p-12">
              <div className="prose prose-lg prose-invert max-w-none">

                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="section-subheader mb-6">The Philosophy</h2>
                  <p className="text-primary-text/90 text-lg leading-relaxed mb-6">
                    VibeCode represents a new paradigm in software development—one that embraces the harmonious collaboration between human intuition and artificial intelligence. It's about maintaining the human element while leveraging AI as a powerful creative partner.
                  </p>
                  <p className="text-primary-text/80 leading-relaxed">
                    In an era where AI can write code faster than ever before, VibeCode reminds us that the most meaningful software emerges from the intersection of technical precision and human empathy.
                  </p>
                </div>

                {/* Core Principles */}
                <div className="mb-12">
                  <h2 className="section-subheader mb-8">Core Principles</h2>

                  <div className="grid gap-8">
                    <div className="professional-card p-6 rounded-xl border border-accent-blue/20">
                      <h3 className="text-xl font-semibold text-accent-blue mb-4">🧠 Human-AI Symbiosis</h3>
                      <p className="text-primary-text/80">
                        AI amplifies human creativity, not replaces it. Every line of code should reflect intentional human decision-making enhanced by artificial intelligence.
                      </p>
                    </div>

                    <div className="professional-card p-6 rounded-xl border border-accent-cyan/20">
                      <h3 className="text-xl font-semibold text-accent-cyan mb-4">💭 Mindful Development</h3>
                      <p className="text-primary-text/80">
                        Take time to understand the 'why' behind every feature. Code with awareness of its impact on users, maintainers, and the broader ecosystem.
                      </p>
                    </div>

                    <div className="professional-card p-6 rounded-xl border border-accent-purple/20">
                      <h3 className="text-xl font-semibold text-accent-purple mb-4">🌊 Flow State Engineering</h3>
                      <p className="text-primary-text/80">
                        Create development environments and practices that promote deep focus and creative flow, where both human and AI can perform at their best.
                      </p>
                    </div>

                    <div className="professional-card p-6 rounded-xl border border-primary-accent/20">
                      <h3 className="text-xl font-semibold text-primary-accent mb-4">🎯 Intentional Architecture</h3>
                      <p className="text-primary-text/80">
                        Every architectural decision should be deliberate, documented, and aligned with long-term vision. Build systems that evolve gracefully with changing requirements.
                      </p>
                    </div>

                    <div className="professional-card p-6 rounded-xl border border-accent-blue/20">
                      <h3 className="text-xl font-semibold text-accent-blue mb-4">🤝 Empathetic Code</h3>
                      <p className="text-primary-text/80">
                        Write code that shows compassion for future maintainers, end users, and the broader community. Prioritize clarity, accessibility, and inclusive design.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Practices */}
                <div className="mb-12">
                  <h2 className="section-subheader mb-8">VibeCode Practices</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-primary-text mb-3">🎵 Rhythm-Based Development</h3>
                      <p className="text-primary-text/80">
                        Establish natural rhythms for coding, reviewing, and reflecting. Allow for creative breakthroughs by balancing focused work with intentional breaks.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-text mb-3">🔄 Continuous Reflection</h3>
                      <p className="text-primary-text/80">
                        Regularly pause to assess not just what you're building, but how and why. Use retrospectives to refine both technical and collaborative practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-text mb-3">🌱 Growth-Oriented Learning</h3>
                      <p className="text-primary-text/80">
                        Embrace curiosity over certainty. Share knowledge openly, learn from failures, and celebrate the journey of continuous improvement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-text mb-3">⚖️ Ethical AI Integration</h3>
                      <p className="text-primary-text/80">
                        Use AI tools responsibly, understanding their limitations and biases. Maintain transparency about AI assistance and ensure human oversight in critical decisions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 border-t border-neutral-dark/20">
                  <h2 className="section-subheader mb-6">Join the Movement</h2>
                  <p className="text-lg text-primary-text/90 mb-8 max-w-2xl mx-auto">
                    VibeCode is more than a methodology—it's a community of developers committed to creating technology that serves humanity while celebrating the unique value of human creativity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="https://github.com/asmeyatsky/vibecoding"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional-button"
                    >
                      Contribute on GitHub
                    </Link>
                    <Link
                      href="/contact"
                      className="professional-card px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
                    >
                      Share Your Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}