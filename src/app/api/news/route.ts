import { NextResponse } from 'next/server'

const GCS_NEWS_URL = process.env.NEXT_PUBLIC_GCS_NEWS_JSON_URL ||
  'https://storage.googleapis.com/website2-480712-ai-news/ai_news.json'

export async function GET() {
  try {
    console.log('Fetching news from:', GCS_NEWS_URL)

    const response = await fetch(GCS_NEWS_URL, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'Cache-Control': 'no-cache'
      }
    })

    console.log('Response status:', response.status)
    console.log('Response OK:', response.ok)

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Raw data received:', typeof data, Array.isArray(data) ? 'array' : 'object')

    // Check if data is an array or object
    let articles: Array<{
      title: string
      link: string
      published: string
      category: string
    }> = []

    if (Array.isArray(data)) {
      // If data is already an array, use it directly
      articles = data.map((item: any) => ({
        title: item.title || 'No title',
        link: item.link || '#',
        published: item.published || new Date().toISOString(),
        category: item.category || 'General',
      }))
    } else if (typeof data === 'object') {
      // If data is an object with categories, flatten it
      for (const category in data) {
        if (Object.prototype.hasOwnProperty.call(data, category)) {
          const categoryItems = Array.isArray(data[category]) ? data[category] : [data[category]]
          categoryItems.forEach((article: any) => {
            articles.push({
              title: article.title || 'No title',
              link: article.link || '#',
              published: article.published || new Date().toISOString(),
              category: category,
            })
          })
        }
      }
    }

    console.log('Processed articles count:', articles.length)
    return NextResponse.json(articles)
  } catch (error: any) {
    console.error('Error fetching news data from GCS:', error?.message || error)
    console.error('Error stack:', error?.stack)
    return NextResponse.json({ error: 'Failed to fetch news data', details: error?.message || 'Unknown error' }, { status: 500 })
  }
}