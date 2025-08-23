'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'AI News', href: '/news' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 scan-lines ${
      isScrolled 
        ? 'glass-effect backdrop-blur-lg border-b border-primary-accent/20' 
        : 'bg-gradient-to-b from-primary-dark/80 to-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Holographic overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-accent/5 to-transparent animate-data-stream"></div>
        </div>
        
        <div className="flex justify-between items-center py-4 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-accent via-neon-purple to-neon-pink rounded-lg flex items-center justify-center shadow-neon-blue group-hover:shadow-neon-purple transition-all duration-300 animate-pulse-glow">
                <span className="font-cyber font-black text-lg text-primary-dark group-hover:text-white transition-colors duration-300">AI</span>
              </div>
              {/* Rotating ring effect */}
              <div className="absolute inset-0 border-2 border-primary-accent/30 rounded-lg animate-rotate-3d group-hover:border-neon-pink/50 transition-colors duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-cyber font-bold text-xl gradient-text-cyber">InnovationHub</span>
              <span className="font-mono text-xs text-primary-accent/60 terminal-cursor">NEURAL_NET_v2.1</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-mono font-medium text-primary-text/80 hover:text-primary-accent transition-all duration-300 group animation-delay-${(index + 1) * 100}`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-neon-purple group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/consulting"
              className="ai-button group relative overflow-hidden"
            >
              <span className="relative z-10">INITIALIZE</span>
              {/* Additional hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-primary-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 relative group hover-glow-intense"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-primary-accent shadow-neon-blue transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-primary-accent shadow-neon-blue transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-primary-accent shadow-neon-blue transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
            {/* Animated border */}
            <div className="absolute inset-0 border border-primary-accent/30 rounded group-hover:border-neon-pink/50 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden hologram-card mt-2 p-6 backdrop-blur-xl">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-mono font-medium text-primary-text/80 hover:text-primary-accent transition-all duration-300 hover-glow animation-delay-${(index + 1) * 100} animate-fade-in-up relative group`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </Link>
              ))}
              <Link
                href="/consulting"
                className="ai-button text-center animate-zoom-in animation-delay-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INITIALIZE
              </Link>
            </div>
            
            {/* Mobile menu decorative elements */}
            <div className="absolute top-2 right-2 text-xs font-mono text-primary-accent/40">
              MENU_ACTIVE
            </div>
            <div className="absolute bottom-2 left-2 text-xs font-mono text-primary-accent/40 terminal-cursor">
              SELECT_OPTION
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header