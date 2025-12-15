import { NextResponse } from 'next/server'

const GCS_NEWS_URL = process.env.NEXT_PUBLIC_GCS_NEWS_JSON_URL ||
  'https://storage.googleapis.com/website2-480712-ai-news/ai_news.json'

export async function GET() {
  try {
    console.log('Fetching news from:', GCS_NEWS_URL)

    const response = await fetch(GCS_NEWS_URL, {
      next: { revalidate: 900 }, // Cache for 15 minutes to reduce GCS requests
      headers: {
        'User-Agent': 'Website-News-Service/1.0',
        'Accept': 'application/json',
      }
    })

    console.log('Response status:', response.status)
    console.log('Response OK:', response.ok)

    if (!response.ok) {
      // Return empty array instead of throwing for 429 errors to avoid cascading failures
      if (response.status === 429) {
        console.warn('Rate limited when fetching news data from GCS')
        return NextResponse.json([], {
          headers: {
            'X-Rate-Limited': 'true',
            'Cache-Control': 'public, s-maxage=60' // Cache for 1 minute if rate limited
          }
        })
      }
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`)
    }

    const rawData = await response.text()  // Get raw text first for debugging
    console.log('Raw data string (first 200 chars):', rawData.substring(0, 200))

    let data;
    try {
      data = JSON.parse(rawData)
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError)
      console.error('Raw data that failed to parse:', rawData)
      return NextResponse.json({
        error: 'Failed to parse news data',
        details: 'Invalid JSON format'
      }, { status: 500 })
    }

    console.log('Parsed data type:', typeof data, Array.isArray(data) ? 'array' : 'object')

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
    } else if (typeof data === 'object' && data !== null) {
      // If data is an object with categories, flatten it
      for (const category in data) {
        if (Object.prototype.hasOwnProperty.call(data, category)) {
          const categoryItems = Array.isArray(data[category]) ? data[category] : [data[category]]
          categoryItems.forEach((article: any) => {
            articles.push({
              title: article?.title || 'No title',
              link: article?.link || '#',
              published: article?.published || new Date().toISOString(),
              category: category,
            })
          })
        }
      }
    }

    console.log('Processed articles count:', articles.length)
    console.log('Sample article:', articles.length > 0 ? articles[0] : 'No articles')

    // Add cache headers for the response to reduce load
    return NextResponse.json(articles, {
      headers: {
        'Cache-Control': 'public, s-maxage=900' // Cache for 15 minutes on CDN
      }
    })
  } catch (error: any) {
    console.error('Error fetching news data from GCS:', error?.message || error)
    console.error('Error stack:', error?.stack)
    return NextResponse.json({
      error: 'Failed to fetch news data',
      details: error?.message || 'Unknown error',
      message: 'Please check if the GCS bucket contains properly formatted JSON data'
    }, {
      status: 500,
      headers: {
        'Cache-Control': 'public, s-maxage=60' // Cache error responses briefly
      }
    })
  }
}