'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

// Define the structure of an article
interface NewsArticle {
  title: string;
  link: string;
  published: string;
  category: string;
}

const ArticleCard = ({ article }: { article: NewsArticle }) => {
  const displayCategory = article.category || 'General';

  return (
    <article className="glass-effect rounded-lg overflow-hidden hover-glow group">
      <div className="relative h-48 bg-primary-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">📰</div>
        </div>
        <div className="absolute bottom-3 left-3 bg-primary-secondary/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-xs text-primary-accent font-medium">{displayCategory}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-primary-text/60 mb-3">
          <span>{new Date(article.published).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        
        <h2 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary-accent transition-colors duration-300 line-clamp-2">
          {article.title}
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            key={displayCategory}
            className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded-full"
          >
            {displayCategory}
          </span>
        </div>
        
        <Link
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
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

interface NewsClientPageProps {
  initialArticles: NewsArticle[];
}

const NewsClientPage = ({ initialArticles }: NewsClientPageProps) => {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles)
  const [loading, setLoading] = useState(initialArticles.length === 0)

  useEffect(() => {
    if (initialArticles.length === 0) {
      // Fetch data from the public GCS URL
      const fetchArticles = async () => {
        try {
          const response = await fetch('https://storage.googleapis.com/website-469906-ai-news/ai_news.json')
          const data = await response.json()

          const fetchedArticles: NewsArticle[] = []

          // Flatten the data and add category
          for (const category in data) {
            if (Object.prototype.hasOwnProperty.call(data, category)) {
              data[category].forEach((article: any) => {
                fetchedArticles.push({
                  title: article.title,
                  link: article.link,
                  published: article.published,
                  category: category,
                })
              })
            }
          }

          setArticles(fetchedArticles)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching news data:', error)
          setLoading(false)
        }
      }

      fetchArticles()
    }
  }, [initialArticles])

  const categories = useMemo(() => [
    'All',
    ...Array.from(new Set(articles.map(a => a.category))),
  ], [articles])

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        if (filter === 'All') return true;
        return article.category === filter;
      })
      .filter(article => {
        const lowerSearchTerm = searchTerm.toLowerCase()
        const titleMatch = article.title.toLowerCase().includes(lowerSearchTerm);
        const categoryMatch = article.category.toLowerCase().includes(lowerSearchTerm);
        return titleMatch || categoryMatch;
      })
  }, [articles, filter, searchTerm])

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => {
      return new Date(b.published).getTime() - new Date(a.published).getTime();
    });
  }, [filteredArticles]);

  const featuredArticles = sortedArticles.slice(0, 2)
  const regularArticles = sortedArticles.slice(2)

  return (
    <>
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
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="flex-1 bg-primary-dark/50 border border-primary-accent/30 rounded-lg px-4 py-3 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
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
      ) : sortedArticles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">📰</div>
          <h3 className="text-xl font-bold text-primary-text/80 mb-2">No articles available</h3>
          <p className="text-primary-text/60">Unable to load news articles at this time.</p>
        </div>
      ) : (
        <>
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.link} article={article} />
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
                  <ArticleCard key={article.link} article={article} />
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
    </>
  )
}

export default NewsClientPage
