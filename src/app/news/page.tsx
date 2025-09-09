'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getBlogPosts, BlogPostSkeleton } from '@/lib/contentful'
import type { Entry } from 'contentful'

const ArticleCard = ({ article }: { article: any }) => {
  return (
    <article className="glass-effect rounded-lg overflow-hidden hover-glow group">
      {/* Article Image Placeholder */}
      <div className="relative h-48 bg-primary-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">📰</div>
        </div>
        <div className="absolute bottom-3 left-3 bg-primary-secondary/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-xs text-primary-accent font-medium">{article.tags}</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-primary-text/60 mb-3">
          <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span>{article.readtime} min read</span>
        </div>
        
        <h2 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary-accent transition-colors duration-300 line-clamp-2">
          {article.title}
        </h2>
        
        <p className="text-primary-text/80 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.split(',').slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {article.tags.split(',').length > 3 && (
            <span className="text-xs text-primary-text/60 px-2 py-1">
              +{article.tags.split(',').length - 3} more
            </span>
          )}
        </div>
        
        {/* Read More Link */}
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center text-primary-accent hover:text-primary-accent/80 transition-colors duration-300 font-medium"
        >
          Read Article
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

const NewsPage = () => {
  const [articles, setArticles] = useState<Entry<BlogPostSkeleton>[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getBlogPosts()
      setArticles(fetchedArticles)
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const categories = useMemo(() => [
    'All',
    ...Array.from(
      new Set<string>(
        articles
          .map(a => {
            if (typeof a.fields.tags === 'string') {
              return (a.fields.tags as string).split(',')[0];
            }
            return '';
          })
          .filter(tag => tag)
      )
    ),
  ], [articles])
  
  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        if (filter === 'All') return true;
        if (typeof article.fields.tags === 'string') {
          return (article.fields.tags as string).split(',')[0] === filter;
        }
        return false;
      })
      .filter(article => {
        const lowerSearchTerm = searchTerm.toLowerCase()
        const titleMatch = typeof article.fields.title === 'string' && (article.fields.title as string).toLowerCase().includes(lowerSearchTerm);
        const excerptMatch = typeof article.fields.excerpt === 'string' && (article.fields.excerpt as string).toLowerCase().includes(lowerSearchTerm);
        const tagsMatch = typeof article.fields.tags === 'string' && (article.fields.tags as string).toLowerCase().includes(lowerSearchTerm);
        return titleMatch || excerptMatch || tagsMatch;
      })
  }, [articles, filter, searchTerm])

  const featuredArticles = filteredArticles.slice(0, 2)
  const regularArticles = filteredArticles.slice(2)

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">
              <span className="gradient-text">AI News</span>
            </h1>
            <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
              Stay updated with the latest developments in artificial intelligence, 
              industry insights, and technical deep-dives.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 pl-10 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-text/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary-accent text-primary-dark'
                      : 'glass-effect text-primary-text/80 hover:text-primary-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-effect p-6 rounded-lg max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-sans font-bold text-primary-accent mb-2">Stay Updated</h3>
              <p className="text-primary-text/60 text-sm mb-4">
                Get the latest AI insights delivered to your inbox weekly.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-primary-dark/50 border border-primary-accent/30 rounded-lg px-4 py-2 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
                />
                <button className="bg-primary-accent text-primary-dark px-6 py-2 rounded-lg font-semibold hover:bg-primary-accent/90 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-primary-accent/30 border-t-primary-accent rounded-full mx-auto mb-4"></div>
            <p className="text-primary-text/80">Loading articles...</p>
          </div>
        ) : (
          <>
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredArticles.map((article) => (
                    <ArticleCard key={article.sys.id} article={article.fields} />
                  ))}
                </div>
              </section>
            )}

            {/* Recent Articles */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">
                {featuredArticles.length > 0 ? 'Recent Articles' : 'All Articles'}
              </h2>
              
              {regularArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularArticles.map((article) => (
                    <ArticleCard key={article.sys.id} article={article.fields} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 opacity-50">🔍</div>
                  <h3 className="text-xl font-bold text-primary-text/80 mb-2">No articles found</h3>
                  <p className="text-primary-text/60">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </Layout>
  )
}

export default NewsPage
