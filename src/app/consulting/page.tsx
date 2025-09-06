'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const ConsultingPage = () => {
  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      title: "AI Strategy & Planning",
      description: "Develop comprehensive AI strategies tailored to your business goals and technical requirements.",
      details: [
        "AI readiness assessment and gap analysis",
        "Technology roadmap and implementation planning", 
        "ROI analysis and business case development",
        "Risk assessment and mitigation strategies"
      ],
      duration: "2-4 weeks",
      deliverable: "Strategic AI implementation roadmap"
    },
    {
      title: "Custom AI Development",
      description: "Build bespoke AI solutions from concept to deployment, tailored to your specific needs.",
      details: [
        "Machine learning model development and training",
        "Natural language processing solutions",
        "Computer vision and image recognition systems",
        "Automated workflow and decision-making systems"
      ],
      duration: "6-16 weeks",
      deliverable: "Production-ready AI system"
    },
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      details: [
        "API development and system integration",
        "Cloud deployment and scaling solutions",
        "Performance monitoring and optimization",
        "Staff training and knowledge transfer"
      ],
      duration: "4-8 weeks", 
      deliverable: "Fully integrated AI system"
    },
    {
      title: "AI Audit & Optimization",
      description: "Evaluate and improve existing AI systems for better performance and efficiency.",
      details: [
        "Model performance analysis and benchmarking",
        "Cost optimization and resource efficiency",
        "Security and compliance assessment",
        "Continuous improvement recommendations"
      ],
      duration: "2-6 weeks",
      deliverable: "Optimization report with implementation plan"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your business challenges, goals, and technical requirements through comprehensive consultation."
    },
    {
      step: "02", 
      title: "Analysis",
      description: "Evaluating your data, systems, and processes to identify optimal AI opportunities and solutions."
    },
    {
      step: "03",
      title: "Strategy",
      description: "Developing a detailed implementation plan with timelines, resources, and success metrics."
    },
    {
      step: "04",
      title: "Development",
      description: "Building and training AI models with rigorous testing and validation throughout the process."
    },
    {
      step: "05",
      title: "Deployment",
      description: "Implementing the solution in your environment with full integration and performance optimization."
    },
    {
      step: "06",
      title: "Support",
      description: "Providing ongoing maintenance, monitoring, and improvements to ensure continued success."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Industries",
      role: "CTO",
      quote: "The AI strategy consultation transformed our approach to automation. We saw 40% efficiency gains within 3 months.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CEO",
      quote: "Exceptional expertise in machine learning. The custom solution exceeded our expectations and delivered measurable ROI.",
      image: "👨‍💼"
    },
    {
      name: "Emma Rodriguez",
      company: "InnovateLab",
      role: "Head of AI",
      quote: "Professional, knowledgeable, and results-driven. The integration was seamless and the team training was excellent.",
      image: "👩‍🔬"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Hero Section */}
        <section className="content-container mb-16">
          <div className="text-center">
            <h1 className="professional-title">
              <span className="gradient-text-cyber">AI Consulting</span>
            </h1>
            <p className="professional-subtitle">
              Transform your business with intelligent agentic AI solutions. From strategy to implementation, 
              we help organizations harness the power of autonomous AI systems to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="ai-button px-8 py-4"
              >
                Book Free Consultation
              </Link>
              <Link
                href="#services"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 rounded-xl"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="content-container section-padding">
          <h2 className="section-header">Agentic AI Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Selection */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedService === index
                      ? 'bg-gradient-to-r from-primary-accent/30 to-accent-cyan/30 border border-accent-cyan'
                      : 'glass-effect hover-glow-intense'
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <h3 className="text-xl font-bold text-primary-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-text/80">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-primary-text/80 mb-6">
                {services[selectedService].description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="section-subheader">What's Included:</h4>
                  <ul className="space-y-3">
                    {services[selectedService].details.map((detail, index) => (
                      <li key={index} className="text-primary-text/80 flex items-start">
                        <span className="text-accent-cyan mr-3 mt-1">●</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-primary-text mb-1">Duration</h4>
                <p className="text-accent-cyan font-medium">{services[selectedService].duration}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-primary-text mb-1">Deliverable</h4>
                <p className="text-accent-cyan font-medium">{services[selectedService].deliverable}</p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="content-container section-padding bg-gradient-futuristic">
          <h2 className="section-header">Our Agentic AI Process</h2>
          
          <div className="card-grid">
            {process.map((step, index) => (
              <div key={index} className="hologram-card p-6 rounded-xl hover-glow-intense">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-accent/30 to-accent-cyan/30 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold text-accent-cyan">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-text">{step.title}</h3>
                </div>
                <p className="text-primary-text/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="content-container section-padding">
          <h2 className="section-header">Client Success Stories</h2>
          
          <div className="card-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hologram-card p-6 rounded-xl hover-glow">
                <div className="text-4xl mb-4 text-center">{testimonial.image}</div>
                <blockquote className="text-primary-text/80 italic mb-4 text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-primary-text">{testimonial.name}</div>
                  <div className="text-neutral-medium text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Ready to Deploy Agentic AI?
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your AI needs and explore how we can work together to achieve your goals. 
              Book a free 30-minute consultation to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="ai-button px-8 py-4"
              >
                Schedule Consultation
              </Link>
              <a
                href="mailto:hello@example.com"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 rounded-xl"
              >
                Send Email
              </a>
            </div>

            <div className="text-center text-neutral-medium text-sm">
              <p>🔒 Confidential consultation • 📞 No commitment required • ⚡ Quick response time</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ConsultingPage