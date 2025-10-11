import { NextResponse } from 'next/server'

export const revalidate = 3600 // Cache for 1 hour

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

interface GitHubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  updated_at: string
}

export async function GET() {
  try {
    // Fetch user profile
    const userResponse = await fetch('https://api.github.com/users/asmeyatsky', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Allan-Smeyatsky-Portfolio',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`)
    }

    const user: GitHubUser = await userResponse.json()

    // Fetch repositories (sorted by updated, limited to 6)
    const reposResponse = await fetch('https://api.github.com/users/asmeyatsky/repos?sort=updated&per_page=6', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Allan-Smeyatsky-Portfolio',
      },
      next: { revalidate: 3600 }
    })

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`)
    }

    const repos: GitHubRepo[] = await reposResponse.json()

    // Calculate total stars across all repos
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

    return NextResponse.json({
      profile: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        html_url: user.html_url,
      },
      repos: repos.slice(0, 3).map(repo => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        updated_at: repo.updated_at,
      })),
      stats: {
        repos: user.public_repos,
        followers: user.followers,
        totalStars,
      }
    })
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    )
  }
}
