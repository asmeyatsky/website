import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/contentful'

export async function GET() {
  try {
    // Check environment variables
    const envInfo = {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID ? 'SET' : 'MISSING',
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN ? 'SET' : 'MISSING',
      nodeEnv: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    }

    // Try to fetch projects
    const projects = await getProjects()

    return NextResponse.json({
      environment: envInfo,
      projectsCount: projects.length,
      projects: projects.map(p => ({
        id: p.sys.id,
        title: p.fields.title,
        slug: p.fields.slug,
        category: p.fields.category,
        status: p.fields.status
      }))
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to fetch debug info',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}