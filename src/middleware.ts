import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  // Detect LinkedIn in-app browser
  const isLinkedInApp = userAgent.includes('LinkedInApp') ||
                       userAgent.includes('com.linkedin.LinkedIn') ||
                       userAgent.includes('LinkedInBot')

  // If LinkedIn app, add compatibility headers
  if (isLinkedInApp) {
    const response = NextResponse.next()

    // Add headers to help LinkedIn's browser
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')

    // Add LinkedIn-specific meta refresh as backup
    response.headers.set('X-LinkedIn-Compatibility', 'true')

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}