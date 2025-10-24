'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { sendNewsletterSignup } from '@/lib/email'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const success = await sendNewsletterSignup({ email })
      if (success) {
        setSubmitMessage('Thanks for subscribing!')
        setEmail('')
      } else {
        setSubmitMessage('Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setSubmitMessage('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/asmeyatsky', icon: '🔗' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/allansmeyatsky', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/allansmeyatsky', icon: '🐦' },
    { name: 'Instagram', href: 'https://www.instagram.com/allansmeyatsky/', icon: '📸' },
    { name: 'Email', href: 'mailto:allan@smeyatsky.com', icon: '📧' },
  ]

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'VibeCode', href: '/' },
        { name: 'Work', href: '/projects' },
        { name: 'AI News', href: '/news' },
        { name: 'About', href: '/about' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'Consulting', href: '/consulting' },
        { name: 'VibeCode Charter', href: '/vibecoding-charter' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ]

  return (
    <footer className="bg-brutalist-code-bg border-t-2 border-brutalist-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
                <span className="text-bg font-bold font-mono text-lg">AS</span>
              </div>
              <span className="font-bold font-mono text-lg text-text">Allan Smeyatsky</span>
            </div>
            <p className="text-brutalist-text-dim text-sm mb-4 font-mono">
              VibeCode Developer • AI-Native Solutions • Enterprise Architecture
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-brutalist-text-dim hover:text-accent transition-colors duration-200 text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold font-mono text-accent mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-brutalist-text-dim hover:text-accent transition-colors duration-200 text-sm font-mono"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup - Removed, already on homepage */}

        {/* Bottom Bar */}
        <div className="border-t-2 border-brutalist-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-brutalist-text-dim font-mono">
          <p>© {currentYear} Allan Smeyatsky. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with{' '}
            <span className="text-accent">Next.js</span>
            {' '}+{' '}
            <span className="text-accent">VibeCode</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer