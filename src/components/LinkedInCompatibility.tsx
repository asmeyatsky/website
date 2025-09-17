'use client'

import { useEffect, useState } from 'react'

export default function LinkedInCompatibility() {
  const [isLinkedInApp, setIsLinkedInApp] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || ''
    const isLinkedIn = userAgent.includes('LinkedInApp') ||
                      userAgent.includes('com.linkedin.LinkedIn') ||
                      userAgent.includes('LinkedInBot') ||
                      userAgent.includes('LinkedIn') ||
                      // Check if we're in an in-app browser that might be LinkedIn
                      (userAgent.includes('Mobile') && userAgent.includes('Safari') && !userAgent.includes('Chrome'))

    setIsLinkedInApp(isLinkedIn)
  }, [])

  if (!isLinkedInApp) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-3 text-center text-sm">
      <div className="flex items-center justify-center gap-2">
        <span>💼</span>
        <span>For the best experience, tap the menu and select "Open in Browser"</span>
        <button
          onClick={() => window.open(window.location.href, '_blank')}
          className="ml-2 underline hover:no-underline"
        >
          Open
        </button>
      </div>
    </div>
  )
}