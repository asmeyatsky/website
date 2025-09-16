import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Get the path to revalidate from the request body
    const body = await request.json()
    const path = body.path || '/projects'

    // Revalidate the path
    revalidatePath(path)

    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({
      revalidated: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Also allow GET for testing
export async function GET() {
  try {
    revalidatePath('/projects')
    return NextResponse.json({
      revalidated: true,
      path: '/projects',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({
      revalidated: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}