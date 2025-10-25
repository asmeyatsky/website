import { NextResponse } from 'next/server'
import { Storage } from '@google-cloud/storage'

export async function GET() {
  if (process.env.NODE_ENV !== 'production') {
    // Return mock data in development
    const mockData = [
      {
        title: "The Rise of AI in Software Development",
        link: "/news/the-rise-of-ai-in-software-development",
        published: "2025-10-24T10:00:00Z",
        category: "AI Development"
      },
      {
        title: "Next.js 15: What's New?",
        link: "/news/nextjs-15-whats-new",
        published: "2025-10-23T14:30:00Z",
        category: "Web Development"
      },
      {
        title: "A Deep Dive into Serverless Architecture",
        link: "/news/a-deep-dive-into-serverless-architecture",
        published: "2025-10-22T11:00:00Z",
        category: "Cloud Computing"
      }
    ];
    return NextResponse.json(mockData);
  }

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