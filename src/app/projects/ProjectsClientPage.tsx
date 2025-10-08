'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const ProjectsClientPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">
            <span className="gradient-text">AI Projects</span>
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
            Explore my portfolio of artificial intelligence projects on GitHub.
          </p>
          <Link
            href="https://github.com/asmeyatsky"
            target="_blank"
            rel="noopener noreferrer"
            className="ai-button px-8 py-4"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsClientPage
