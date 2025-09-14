'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const ConsultingPage = () => {

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Hero Section */}
        <section className="content-container mb-16">
          <div className="text-center">
            <h1 className="professional-title">
              <span className="gradient-text-cyber">Book a Consultation</span>
            </h1>
            <p className="professional-subtitle">
              Ready to transform your business with intelligent AI solutions? Schedule a free 30-minute consultation to discuss your challenges and explore how we can achieve your goals together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Calendly Link */}
              <a
                href="https://calendly.com/allan-smeyatsky/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="ai-button px-8 py-4"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Calendly Embed Section */}
        <section className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Find a Time That Works For You
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Use the calendar below to select a convenient 30-minute slot. My availability is Monday to Friday, 09:00 to 17:00, in your local timezone.
            </p>
            
            {/* Calendly Inline Embed Widget */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/allan-smeyatsky/30min?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
            
            <p className="text-primary-text/60 text-sm mt-8">
              If the embed is not loading, please use the direct link above.
            </p>
          </div>
        </section>

        {/* Original CTA Section (simplified) */}
        <section className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Have specific questions or a unique project in mind? Feel free to reach out directly.
            </p>
            
            <Link
              href="/contact"
              className="ai-button px-8 py-4"
            >
              Contact Me Directly
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ConsultingPage