'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

// Sample news articles (will be replaced with CMS data later)
const sampleArticles = [
  {
    id: 1,
    title: "The Future of Large Language Models: What's Next for AI?",
    excerpt: "Exploring the latest developments in LLM technology and their implications for businesses and developers.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "AI Trends",
    tags: ["LLM", "GPT", "AI Development", "Future Tech"],
    featured: true,
    slug: "future-of-large-language-models"
  },
  {
    id: 2,
    title: "Computer Vision Breakthroughs in Autonomous Vehicles",
    excerpt: "How recent advances in computer vision are accelerating the development of self-driving cars.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Computer Vision",
    tags: ["Computer Vision", "Autonomous Vehicles", "YOLO", "Deep Learning"],
    featured: true,
    slug: "computer-vision-autonomous-vehicles"
  },
  {
    id: 3,
    title: "Building Ethical AI: Principles for Responsible Development",
    excerpt: "A guide to implementing ethical considerations in AI projects from conception to deployment.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "AI Ethics",
    tags: ["AI Ethics", "Responsible AI", "Bias", "Fairness"],
    featured: false,
    slug: "building-ethical-ai"
  },
  {
    id: 4,
    title: "MLOps Best Practices: From Model to Production",
    excerpt: "Essential strategies for deploying and maintaining machine learning models in production environments.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2023-12-28",
    readTime: "12 min read",
    category: "MLOps",
    tags: ["MLOps", "Production", "DevOps", "Machine Learning"],
    featured: false,
    slug: "mlops-best-practices"
  },
  {
    id: 5,
    title: "Natural Language Processing: From BERT to ChatGPT",
    excerpt: "Tracing the evolution of NLP models and their impact on conversational AI applications.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2023-12-20",
    readTime: "7 min read",
    category: "NLP",
    tags: ["NLP", "BERT", "ChatGPT", "Transformers"],
    featured: false,
    slug: "nlp-bert-to-chatgpt"
  },
  {
    id: 6,
    title: "AI in Healthcare: Transforming Patient Care",
    excerpt: "Examining how artificial intelligence is revolutionizing diagnosis, treatment, and patient outcomes.",
    content: "Full article content would go here...",
    author: "Your Name",
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    category: "AI Applications",
    tags: ["Healthcare", "Medical AI", "Diagnostics", "Patient Care"],
    featured: false,
    slug: "ai-in-healthcare"
  }
]

const ArticleCard = ({ article }: { article: typeof sampleArticles[0] }) => {
  return (
    <article className="glass-effect rounded-lg overflow-hidden hover-glow group">
      {/* Article Image Placeholder */}
      <div className="relative h-48 bg-primary-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">📰</div>
        </div>
        {article.featured && (
          <div className="absolute top-3 right-3 bg-primary-accent text-primary-dark px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-primary-secondary/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-xs text-primary-accent font-medium">{article.category}</span>
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
          <span>{article.readTime}</span>
        </div>
        
        <h2 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary-accent transition-colors duration-300 line-clamp-2">
          {article.title}
        </h2>
        
        <p className="text-primary-text/80 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-primary-text/60 px-2 py-1">
              +{article.tags.length - 3} more
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
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...Array.from(new Set(sampleArticles.map(a => a.category)))]
  
  const filteredArticles = sampleArticles
    .filter(article => filter === 'All' || article.category === filter)
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )

  const featuredArticles = filteredArticles.filter(a => a.featured)
  const regularArticles = filteredArticles.filter(a => !a.featured)

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">
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
              <h3 className="text-xl font-mono font-bold text-primary-accent mb-2">Stay Updated</h3>
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

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">
            {featuredArticles.length > 0 ? 'Recent Articles' : 'All Articles'}
          </h2>
          
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
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
      </div>
    </Layout>
  )
}

export default NewsPage