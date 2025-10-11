'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GitHubData {
  profile: {
    login: string
    name: string
    avatar_url: string
    bio: string
    public_repos: number
    followers: number
    html_url: string
  }
  repos: Array<{
    name: string
    description: string
    html_url: string
    stars: number
    language: string
    updated_at: string
  }>
  stats: {
    repos: number
    followers: number
    totalStars: number
  }
}

export default function GitHubProfile() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true)
        } else {
          setData(data)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="bg-code-bg border border-border rounded-lg p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-border rounded w-3/4"></div>
          <div className="h-4 bg-border rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="bg-code-bg border border-border rounded-lg p-8">
        <p className="text-text-secondary">GitHub data unavailable</p>
        <Link
          href="https://github.com/asmeyatsky"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dim transition-colors mt-2 inline-block"
        >
          View on GitHub →
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-code-bg border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent flex-shrink-0">
            <Image
              src={data.profile.avatar_url}
              alt={data.profile.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-text font-mono">{data.profile.name}</h3>
            <Link
              href={data.profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-dim transition-colors font-mono text-sm"
            >
              @{data.profile.login}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b border-border">
        <div className="p-4 text-center border-r border-border">
          <div className="text-2xl font-bold text-accent font-mono">{data.stats.repos}</div>
          <div className="text-xs text-text-secondary font-mono">repos</div>
        </div>
        <div className="p-4 text-center border-r border-border">
          <div className="text-2xl font-bold text-accent font-mono">{data.stats.followers}</div>
          <div className="text-xs text-text-secondary font-mono">followers</div>
        </div>
        <div className="p-4 text-center">
          <div className="text-2xl font-bold text-accent font-mono">{data.stats.totalStars}</div>
          <div className="text-xs text-text-secondary font-mono">stars</div>
        </div>
      </div>

      {/* Recent Repos */}
      <div className="p-6">
        <h4 className="text-sm font-mono text-text-secondary mb-4">Recent Projects:</h4>
        <div className="space-y-3">
          {data.repos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center justify-between">
                <span className="text-accent group-hover:text-text transition-colors font-mono text-sm">
                  {repo.name}
                </span>
                <span className="text-xs text-text-secondary">→</span>
              </div>
              {repo.description && (
                <p className="text-xs text-text-secondary mt-1 line-clamp-1">
                  {repo.description}
                </p>
              )}
            </Link>
          ))}
        </div>

        <Link
          href={data.profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-center py-3 bg-accent text-bg hover:bg-accent-dim transition-colors font-mono text-sm font-bold rounded"
        >
          View All Repos →
        </Link>
      </div>
    </div>
  )
}
