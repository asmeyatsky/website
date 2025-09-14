import { NextResponse } from 'next/server'
import { Storage } from '@google-cloud/storage'

export async function GET() {
  try {
    const GCS_BUCKET_NAME = process.env.GCS_BUCKET_NAME || "website-469906-ai-news"
    const GCS_FILE_NAME = process.env.GCS_FILE_NAME || "ai_news.json"

    const storage = new Storage()
    const bucket = storage.bucket(GCS_BUCKET_NAME)
    const file = bucket.file(GCS_FILE_NAME)

    const [contents] = await file.download()
    const data = JSON.parse(contents.toString('utf8'))

    // Flatten the data and add category
    const articles: Array<{
      title: string
      link: string
      published: string
      category: string
    }> = []

    for (const category in data) {
      if (Object.prototype.hasOwnProperty.call(data, category)) {
        data[category].forEach((article: any) => {
          articles.push({
            title: article.title,
            link: article.link,
            published: article.published,
            category: category,
          })
        })
      }
    }

    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching news data from GCS:', error)
    return NextResponse.json({ error: 'Failed to fetch news data' }, { status: 500 })
  }
}