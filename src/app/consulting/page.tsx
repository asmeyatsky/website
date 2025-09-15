import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import CalendlySection from '@/components/CalendlySection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Consulting Services | Allan Smeyatsky',
  description: 'Expert technology consulting services specializing in AI strategy, enterprise architecture, cloud migration, and digital transformation. Book a free 30-minute consultation to discuss your business challenges.',
  keywords: ['technology consulting', 'AI strategy', 'enterprise architecture', 'cloud migration', 'digital transformation', 'business consulting', 'technology solutions'],
  openGraph: {
    title: 'Expert Technology Consulting Services',
    description: 'Transform your business with intelligent AI solutions and enterprise architecture. Schedule a free consultation today.',
    type: 'website',
    locale: 'en_US',
    url: 'https://asmeyatsky.com/consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Technology Consulting Services | Allan Smeyatsky',
    description: 'Transform your business with intelligent AI solutions and enterprise architecture. Schedule a free consultation today.',
  },
}

const ConsultingPage = () => {
  // Service offerings data
  const services = [
    {
      title: "AI Strategy & Implementation",
      description: "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.",
      icon: "🤖"
    },
    {
      title: "Enterprise Architecture",
      description: "Design scalable, secure, and efficient technology infrastructures that support your business growth.",
      icon: "🏗️"
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud and optimize your infrastructure for performance and cost-efficiency.",
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Guide your organization through comprehensive digital transformation initiatives with minimal disruption.",
      icon: "🚀"
    }
  ]

  // Benefits data
  const benefits = [
    {
      title: "30+ Years Experience",
      description: "Proven track record in enterprise technology and AI solutions"
    },
    {
      title: "Custom Solutions",
      description: "Tailored approaches that align with your unique business objectives"
    },
    {
      title: "Future-Proof Strategies",
      description: "Implementations designed to scale with emerging technologies"
    },
    {
      title: "ROI Focused",
      description: "Solutions that deliver measurable business value and return on investment"
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      quote: "Allan's expertise in AI implementation transformed our business operations, resulting in 40% efficiency gains.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp"
    },
    {
      quote: "The strategic guidance provided during our cloud migration saved us months of development time.",
      author: "Michael Chen",
      role: "VP Engineering, InnovateCo"
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
              <span className="elegant-gradient">Expert Technology Consulting</span>
            </h1>
            <p className="professional-subtitle mb-10">
              Transform your business with intelligent AI solutions and enterprise architecture. 
              Schedule a free 30-minute consultation to discuss your challenges and explore how we can achieve your goals together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#schedule"
                className="professional-button px-8 py-4"
              >
                Book Your Free Consultation
              </Link>
              <Link 
                href="/projects" 
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="content-container section-padding">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Specialized Consulting Services</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="professional-card p-8 text-center elegant-hover">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{service.title}</h3>
                <p className="text-primary-text/80">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="content-container section-padding professional-section">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Why Choose My Consulting Services</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Decades of experience delivering transformative technology solutions for enterprises worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="professional-icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{benefit.title}</h3>
                <p className="text-primary-text/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="content-container section-padding">
          <div className="text-center mb-16">
            <h2 className="section-header">
              <span className="elegant-gradient">Client Success Stories</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Hear from organizations that have transformed their business through our consulting services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="professional-card p-8">
                <div className="text-accent-blue text-5xl mb-4">"</div>
                <p className="text-primary-text/90 text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-primary-text">{testimonial.author}</p>
                  <p className="text-primary-text/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendly Section */}
        <section id="schedule" className="content-container section-padding">
          <div className="text-center mb-12">
            <h2 className="section-header">
              <span className="elegant-gradient">Schedule Your Free Consultation</span>
            </h2>
            <p className="professional-subtitle max-w-3xl mx-auto">
              Book a 30-minute session to discuss your technology challenges and explore how we can work together to achieve your business objectives.
            </p>
          </div>
          
          <CalendlySection 
            title="Find a Time That Works For You"
            description="Select a convenient 30-minute slot below. My availability is Monday to Friday, 09:00 to 17:00, in your local timezone."
            widgetUrl="https://calendly.com/allan-smeyatsky/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            widgetHeight="700px"
            buttonText="Schedule Your Free Consultation"
            buttonClass="professional-button px-8 py-4"
          />
        </section>

        {/* Final CTA Section */}
        <section className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards digital transformation with a free consultation. 
              Let's discuss how we can solve your technology challenges together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#schedule"
                className="professional-button px-8 py-4"
              >
                Book Your Free Consultation
              </Link>
              <Link
                href="/contact"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
              >
                Contact Me Directly
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ConsultingPage