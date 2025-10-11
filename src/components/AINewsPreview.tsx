'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface NewsArticle {
  title: string
  link: string
  published: string
  category: string
}

export default function AINewsPreview() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArticles(data.slice(0, 3))
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const { sendNewsletterSignup } = await import('@/lib/email')
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

  return (
    <div className="space-y-6">
      {/* Newsletter Signup - Featured */}
      <div className="bg-code-bg border-2 border-accent p-6 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-accent mb-3">
            Weekly AI Insights
          </h3>
          <p className="text-text-secondary font-mono text-sm sm:text-base mb-6">
            Get the latest in AI development, tools, and industry news
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-bg border-2 border-border px-4 py-3 text-text placeholder-text-secondary focus:outline-none focus:border-accent transition-colors font-mono text-sm sm:text-base"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-accent text-bg px-6 py-3 font-mono font-bold hover:bg-accent-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {submitMessage && (
            <p className={`text-sm mt-3 font-mono ${submitMessage.includes('Thanks') ? 'text-success' : 'text-warning'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>

      {/* Latest Articles */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-code-bg border border-border p-4 animate-pulse">
              <div className="h-4 bg-border rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-border rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : articles.length > 0 ? (
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Link
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-code-bg border border-border p-4 sm:p-6 hover:border-accent transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-text font-mono text-sm sm:text-base font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary font-mono">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{new Date(article.published).toLocaleDateString()}</span>
                  </div>
                </div>
                <span className="text-accent text-lg flex-shrink-0">→</span>
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {/* View All Link */}
      <div className="text-center pt-4">
        <Link
          href="/news"
          className="inline-block bg-transparent border-2 border-accent text-accent px-6 py-3 font-mono font-bold hover:bg-accent hover:text-bg transition-all duration-200 text-sm sm:text-base"
        >
          Browse All AI News →
        </Link>
      </div>
    </div>
  )
}
