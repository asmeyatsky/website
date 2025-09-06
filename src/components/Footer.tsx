import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '🔗' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Email', href: 'mailto:hello@example.com', icon: '📧' },
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
              <div className="w-10 h-10 bg-gradient-to-br from-primary-accent to-accent-cyan rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-accent-cyan bg-clip-text text-transparent">Nexus</span>
            </div>
            <p className="text-primary-text/60 text-sm mb-4">
              Professional agentic AI solutions and consulting services for the future.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-primary-text/60 hover:text-accent-cyan transition-colors duration-300 text-xl"
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
              <h3 className="font-semibold text-accent-cyan mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-text/60 hover:text-accent-cyan transition-colors duration-300 text-sm"
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
        <div className="glass-effect p-6 rounded-xl mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-accent-cyan mb-2">Stay at the Forefront</h3>
            <p className="text-primary-text/60 text-sm mb-4">
              Get the latest agentic AI insights and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-dark/50 border border-accent-cyan/30 rounded-xl px-4 py-2 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-accent-cyan transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-primary-accent to-accent-cyan text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-accent/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-text/60">
          <p>© {currentYear} AI Nexus. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ and{' '}
            <span className="text-accent-cyan">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer