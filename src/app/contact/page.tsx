'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { sendContactEmail, EmailData } from '@/lib/email'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        projectType: formData.projectType || undefined,
        budget: formData.budget || undefined,
        message: formData.message,
        timeline: formData.timeline || undefined
      };

      const success = await sendContactEmail(emailData)
      
      if (success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
          timeline: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Send me a message anytime",
      value: "allan@smeyatsky.com",
      action: "mailto:allan@smeyatsky.com"
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Call for urgent matters",
      value: "+44 7930 399439 / +27 76 247 9862",
      action: "tel:+447930399439"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect professionally",
      value: "allansmeyatsky",
      action: "https://www.linkedin.com/in/allansmeyatsky/"
    },
    {
      icon: "🔗",
      title: "GitHub",
      description: "Explore my code",
      value: "asmeyatsky",
      action: "https://github.com/asmeyatsky"
    },
    {
      icon: "🌍",
      title: "Location",
      description: "Based in London, UK | Cape Town, South Africa",
      value: "Available globally",
      action: null
    }
  ]

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I have deep expertise in AI/ML platforms (Anthropic Claude, Google Gemini, OpenAI), enterprise architecture, multi-cloud solutions (GCP, AWS, Azure), and modern development with Swift, JavaScript, Python, and TypeScript."
    },
    {
      question: "What's your current availability?",
      answer: "I'm currently based in South Africa (SAST timezone) and available Monday-Friday, 9:00 AM - 6:00 PM SAST. I collaborate with teams globally and can accommodate different time zones for important discussions."
    },
    {
      question: "How can we collaborate?",
      answer: "I'm open to discussing various collaboration opportunities including technical advisory roles, architecture reviews, technology strategy discussions, and knowledge sharing on AI and enterprise solutions."
    },
    {
      question: "What's the best way to reach you?",
      answer: "Email (allan@smeyatsky.com) is the most reliable way to reach me. I typically respond within 24 hours. You can also connect with me on LinkedIn for professional networking."
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
              Interested in discussing technology solutions or collaboration opportunities? Let's connect and explore how my expertise in AI, enterprise architecture, and cloud solutions can help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg hover-glow text-center">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-primary-text mb-2">{method.title}</h3>
                <p className="text-primary-text/60 text-sm mb-3">{method.description}</p>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-primary-accent hover:text-primary-accent/80 transition-colors duration-300 font-medium"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-primary-text/80">{method.value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">
                  Let's Connect
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-neon-green/20 border border-neon-green/50 rounded-lg p-4 mb-6">
                    <p className="text-neon-green">Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-neon-pink/20 border border-neon-pink/50 rounded-lg p-4 mb-6">
                    <p className="text-neon-pink">Sorry, there was an error sending your message. Please try again or contact me directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="strategy">AI Strategy & Planning</option>
                        <option value="development">Custom AI Development</option>
                        <option value="integration">AI Integration</option>
                        <option value="audit">AI Audit & Optimization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="over-100k">Over $100K</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-text mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-primary-accent transition-colors duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush)</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-text mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
                      placeholder="Tell me about your project, challenges, and goals. The more details you provide, the better I can help you."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-accent text-primary-dark px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Response Time */}
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="font-bold text-primary-accent mb-4">Quick Response</h3>
                <div className="space-y-3 text-sm text-primary-text/80">
                  <div className="flex items-center">
                    <span className="text-neon-green mr-2">⚡</span>
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-neon-blue mr-2">🔒</span>
                    <span>Confidential consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-neon-purple mr-2">💬</span>
                    <span>Professional consultation</span>
                  </div>
                </div>
              </div>

              {/* Available Hours */}
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="font-bold text-primary-accent mb-4">Availability</h3>
                <div className="space-y-2 text-sm text-primary-text/80">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM SAST</div>
                  <div>Weekend: Limited availability</div>
                  <div className="text-primary-text/60 mt-3">
                    Currently based in South Africa (SAST/UTC+2). Available for global collaboration across all time zones.
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="font-bold text-primary-accent mb-4">Connect Directly</h3>
                <p className="text-primary-text/80 text-sm mb-4">
                  Prefer direct communication? Connect with me on professional platforms.
                </p>
                <div className="space-y-3">
                  <a href="https://linkedin.com/in/allansmeyatsky" className="flex items-center text-accent-blue hover:text-white transition-colors duration-200">
                    <span className="text-xl mr-3">💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:allan@smeyatsky.com" className="flex items-center text-accent-blue hover:text-white transition-colors duration-200">
                    <span className="text-xl mr-3">📧</span>
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Next Steps */}
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="font-bold text-primary-accent mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-sm text-primary-text/80">
                  <div className="flex items-start">
                    <span className="text-primary-accent mr-2 mt-1">1.</span>
                    <span>I review your project details</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-accent mr-2 mt-1">2.</span>
                    <span>Initial response within 24 hours</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-accent mr-2 mt-1">3.</span>
                    <span>Discuss your goals and requirements</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-accent mr-2 mt-1">4.</span>
                    <span>Provide proposal and timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="glass-effect p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary-accent mb-4">Ready to Collaborate?</h2>
            <p className="text-primary-text/80 mb-6">
              I'm always interested in discussing new technology challenges and opportunities. Feel free to reach out to explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="professional-button px-8 py-4"
              >
                Learn About My Experience
              </a>
              <a
                href="/consulting"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl"
              >
                View Technical Capabilities
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-sans font-bold text-primary-accent text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg">
                <h3 className="font-bold text-primary-text mb-3">{faq.question}</h3>
                <p className="text-primary-text/80 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage