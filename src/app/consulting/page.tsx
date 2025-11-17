import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Capabilities | Allan Smeyatsky',
  description: 'Technology expertise in AI implementation, enterprise architecture, cloud migration, and digital transformation gained through three decades of experience.',
  keywords: ['technology expertise', 'AI experience', 'enterprise architecture', 'cloud migration', 'digital transformation', 'technology capabilities'],
  openGraph: {
    title: 'Technology Capabilities and Experience',
    description: 'Explore technology expertise in AI solutions and enterprise architecture gained through decades of experience.',
    type: 'website',
    locale: 'en_US',
    url: 'https://asmeyatsky.com/consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Capabilities | Allan Smeyatsky',
    description: 'Explore technology expertise in AI solutions and enterprise architecture gained through decades of experience.',
  },
}

const ConsultingPage = () => {
  // Capability areas data
  const capabilities = [
    {
      title: "Application Architecture & Design",
      description: "Strategic architecture for scalable, production-grade applications from prototype to enterprise scale. API-first design, domain-driven architecture, and microservices patterns.",
      icon: "🏛️"
    },
    {
      title: "Full-Stack Development",
      description: "Hands-on development across iOS, full-stack web, and backend systems. Swift, TypeScript, Python, and cloud-native technologies.",
      icon: "💻"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Design and implement scalable cloud infrastructure on GCP, AWS, and Azure. Kubernetes, serverless platforms, and CI/CD automation.",
      icon: "☁️"
    },
    {
      title: "AI-Native Application Development",
      description: "Integrate Claude, Gemini, and OpenAI into production applications. Prompt engineering, RAG systems, and AI-powered user experiences.",
      icon: "🤖"
    }
  ]

  // Experience highlights data
  const highlights = [
    {
      title: "30+ Years Experience",
      description: "Proven track record in enterprise technology and AI solutions"
    },
    {
      title: "Global Experience",
      description: "Multi-continental experience across diverse industries and enterprise scales"
    },
    {
      title: "Modern Technology Stack",
      description: "Active development with cutting-edge technologies and AI platforms"
    },
    {
      title: "Architecture Excellence",
      description: "Deep expertise in solution architecture and technical leadership"
    }
  ]

  // Key achievements data
  const achievements = [
    {
      title: "AI-Native Architecture",
      description: "2+ years hands-on experience with Anthropic Claude, Google Gemini, and OpenAI platforms"
    },
    {
      title: "Multi-Cloud Expertise",
      description: "8+ years across GCP, AWS, and Azure with specialized focus on containerization and DevSecOps"
    },
    {
      title: "Enterprise Scale",
      description: "Led global infrastructure modernization practices across 5 continents"
    },
    {
      title: "Technical Leadership",
      description: "Built and scaled engineering organizations from startup to enterprise level"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of consulting services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I offer specialized consulting services in AI Strategy & Implementation, Enterprise Architecture, Cloud Migration & Optimization, and Digital Transformation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long is a consulting session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Initial consultations are 30 minutes free sessions to discuss your challenges and explore how we can work together to achieve your business objectives."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is your experience in technology consulting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With over 30 years of experience in enterprise technology and AI solutions, I have a proven track record delivering transformative technology solutions for enterprises worldwide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with clients worldwide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I provide consulting services to clients worldwide, working remotely to deliver technology solutions regardless of geographic location."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Technology Consulting",
              "provider": {
                "@type": "Person",
                "name": "Allan Smeyatsky",
                "url": "https://asmeyatsky.com",
                "sameAs": [
                  "https://www.linkedin.com/in/allansmeyatsky",
                  "https://twitter.com/allansmeyatsky"
                ]
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Consulting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Strategy & Implementation",
                      "description": "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise Architecture",
                      "description": "Design scalable, secure, and efficient technology infrastructures that support your business growth."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Migration & Optimization",
                      "description": "Seamlessly migrate to the cloud and optimize your infrastructure for performance and cost-efficiency."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Transformation",
                      "description": "Guide your organization through comprehensive digital transformation initiatives with minimal disruption."
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* Hero Section */}
        <section className="content-container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="professional-title mb-6">
              <span className="elegant-gradient">Architecture & Development Services</span>
            </h1>
            <p className="professional-subtitle mb-10">
              Strategic consulting and hands-on development for building production-grade applications and modernizing enterprise infrastructure. 30+ years of experience combined with active full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="professional-button px-8 py-4"
              >
                Learn More About My Experience
              </Link>
              <Link
                href="/projects"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                View Technical Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="content-container section-padding">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Consulting Services</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Strategic guidance and hands-on implementation across application development, architecture, and cloud infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="professional-card p-8 text-center elegant-hover">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{capability.title}</h3>
                <p className="text-primary-text/80">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="content-container section-padding professional-section">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Experience Highlights</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Key achievements and areas of expertise developed through global technology leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="professional-icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{highlight.title}</h3>
                <p className="text-primary-text/80">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="content-container section-padding">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Key Achievements</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Notable accomplishments and technical milestones across enterprise technology leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="professional-card p-8">
                <h3 className="text-xl font-bold text-accent-blue mb-4">{achievement.title}</h3>
                <p className="text-primary-text/90 text-lg">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="content-container section-padding">
          <div className="text-center mb-12">
            <h2 className="section-header">
              <span className="elegant-gradient">Current Technical Focus</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Active involvement in cutting-edge technologies and hands-on development across multiple platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="professional-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-primary-text mb-2">iOS Development</h3>
              <p className="text-neutral-medium text-sm">Swift 5.9, SwiftUI, Xcode 15</p>
            </div>
            <div className="professional-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-semibold text-primary-text mb-2">Full-Stack JavaScript</h3>
              <p className="text-neutral-medium text-sm">Node.js, React, TypeScript</p>
            </div>
            <div className="professional-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="font-semibold text-primary-text mb-2">Python Development</h3>
              <p className="text-neutral-medium text-sm">FastAPI, CLI Tools, Automation</p>
            </div>
            <div className="professional-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-semibold text-primary-text mb-2">AI Development</h3>
              <p className="text-neutral-medium text-sm">Claude, Gemini, OpenAI APIs</p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Ready to Collaborate
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Discuss architecture, plan cloud modernization, or explore how to integrate AI into your applications. Available for partnerships, advisory, and strategic technology engagements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="professional-button px-8 py-4"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/projects"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                View Production Applications
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ConsultingPage