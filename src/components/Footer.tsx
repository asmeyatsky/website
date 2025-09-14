import React from 'react'
import Link from 'next/link'
import BookCallButton from '@/components/BookCallButton'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/asmeyatsky', icon: '🔗' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/allansmeyatsky', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: 'https://www.instagram.com/allansmeyatsky/', icon: '📸' },
    { name: 'Email', href: 'mailto:allan@smeyatsky.com', icon: '📧' },
  ]

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'AI News', href: '/news' },
        { name: 'About', href: '/about' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Consulting', href: '/consulting' },
        { name: 'Contact', href: '/contact' },
        { name: 'Newsletter', href: '#newsletter' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Sitemap', href: '/sitemap.xml' },
      ]
    }
  ]

  return (
    <footer className="bg-primary-secondary border-t border-primary-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-slate rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <span className="font-bold text-xl elegant-gradient">Allan Smeyatsky</span>
            </div>
            <p className="text-primary-text/60 text-sm mb-4">
              Transformational Technology Executive specializing in AI-native solutions and enterprise architecture.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-primary-text/60 hover:text-accent-blue transition-colors duration-200 text-xl"
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
              <h3 className="font-semibold text-accent-blue mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-text/60 hover:text-accent-blue transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="professional-card p-6 rounded-xl mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-accent-blue mb-2">Stay Connected</h3>
            <p className="text-primary-text/60 text-sm mb-4">
              Get insights on AI innovation, enterprise architecture, and technology leadership.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-dark/50 border border-accent-blue/30 rounded-xl px-4 py-2 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-accent-blue transition-colors duration-200"
              />
              <button className="bg-accent-blue text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="professional-card p-6 rounded-xl mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-semibold text-accent-blue mb-2">Ready to Transform Your Business?</h3>
            <p className="text-primary-text/60 text-sm mb-4">
              Book a free 30-minute consultation to discuss your AI and technology challenges.
            </p>
            <BookCallButton 
              className="ai-button px-8 py-3"
            >
              Schedule Free Consultation
            </BookCallButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-accent/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-text/60">
          <p>© {currentYear} Allan Smeyatsky. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ and{' '}
            <span className="text-accent-blue">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer