import { createClient } from 'contentful'
import type { Entry, Asset, EntrySkeletonType } from 'contentful'

// Blog post content type interface
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost'
  fields: {
    title: string
    slug: string
    excerpt: string
    content: any // Rich text field
    featuredimage: Asset
    publishedAt: string
    author: string
    tags: string
    readtime?: number
  }
}

export type BlogPost = BlogPostSkeleton['fields']

// Project content type interface
export interface ProjectSkeleton extends EntrySkeletonType {
  contentTypeId: 'project'
  fields: {
    title: string
    slug: string
    description: string
    longDescription: any // Rich text field
    featuredImage: Asset
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    category: 'AI/ML' | 'Web Development' | 'Mobile' | 'Data Science'
    status: 'Completed' | 'In Progress' | 'Planned'
  }
}

export type Project = ProjectSkeleton['fields']

// Create Contentful client only if environment variables are set
const client = process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  : null

// Log client initialization status
if (typeof window === 'undefined') {
  if (client) {
    console.log('Contentful client initialized with Space ID:', process.env.CONTENTFUL_SPACE_ID)
  } else {
    console.log('Contentful client not initialized. Missing environment variables:')
    console.log('- CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID ? 'SET' : 'MISSING')
    console.log('- CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? 'SET' : 'MISSING')
  }
} else {
  console.log('Browser context - checking environment variables:')
  console.log('- CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID ? 'SET' : 'MISSING')
  console.log('- CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? 'SET' : 'MISSING')
}

// Get all blog posts
export async function getBlogPosts(): Promise<Entry<BlogPostSkeleton>[]> {
  console.log('getBlogPosts called - checking if running on server or client')
  console.log('typeof window:', typeof window)
  
  // Return empty array if Contentful is not configured
  if (!client) {
    console.warn('Contentful not configured. Returning empty array.')
    return []
  }
  
  try {
    console.log('Fetching blog posts from Contentful...')
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      limit: 20,
    })
    console.log('Contentful API response:', JSON.stringify(entries, null, 2))
    console.log('Successfully fetched blog posts:', entries.items.length)
    if (entries.items.length > 0) {
      console.log('First item preview:', entries.items[0]?.fields)
    }
    return entries.items
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Get single blog post by slug
export async function getBlogPost(slug: string): Promise<Entry<BlogPostSkeleton> | null> {
  // Return null if Contentful is not configured
  if (!client) {
    console.warn('Contentful not configured. Returning null.')
    return null
  }
  
  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
      limit: 1,
    })
    // Filter by slug on the client side since Contentful doesn't support field queries in this version
    const filtered = entries.items.filter(item => item.fields.slug === slug)
    return filtered[0] || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get all projects
export async function getProjects(): Promise<Entry<ProjectSkeleton>[]> {
  // Return empty array if Contentful is not configured
  if (!client) {
    console.warn('Contentful not configured. Returning empty array.')
    return []
  }
  
  try {
    const entries = await client.getEntries<ProjectSkeleton>({
      content_type: 'project',
      order: ['-sys.createdAt'],
      limit: 50,
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Get single project by slug
export async function getProject(slug: string): Promise<Entry<ProjectSkeleton> | null> {
  // Return null if Contentful is not configured
  if (!client) {
    console.warn('Contentful not configured. Returning null.')
    return null
  }
  
  try {
    const entries = await client.getEntries<ProjectSkeleton>({
      content_type: 'project',
      limit: 1,
    })
    // Filter by slug on the client side since Contentful doesn't support field queries in this version
    const filtered = entries.items.filter(item => item.fields.slug === slug)
    return filtered[0] || null
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

// Get projects by category
export async function getProjectsByCategory(category: string): Promise<Entry<ProjectSkeleton>[]> {
  // Return empty array if Contentful is not configured
  if (!client) {
    console.warn('Contentful not configured. Returning empty array.')
    return []
  }
  
  try {
    const entries = await client.getEntries<ProjectSkeleton>({
      content_type: 'project',
      order: ['-sys.createdAt'],
    })
    // Filter by category on the client side since Contentful doesn't support field queries in this version
    const filtered = entries.items.filter(item => item.fields.category === category)
    return filtered
  } catch (error) {
    console.error('Error fetching projects by category:', error)
    return []
  }
}

// Helper function to extract image URL from Contentful asset
export function getImageUrl(asset: Asset | undefined, width?: number, height?: number, format?: string): string {
  if (!asset?.fields?.file?.url) return ''
  
  let url = asset.fields.file.url
  if (typeof url === 'string' && url.startsWith('//')) url = `https:${url}`
  
  // Add image optimization parameters
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (format) params.append('fm', format)
  params.append('q', '80') // Quality
  
  return params.toString() ? `${url as string}?${params.toString()}` : url as string
}