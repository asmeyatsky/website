'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

// Sample project data (will be replaced with CMS data later)
const sampleProjects = [
  {
    id: 1,
    title: "Sentiment Analysis AI",
    description: "Deep learning model that analyzes text sentiment with 94% accuracy using transformers.",
    technologies: ["Python", "TensorFlow", "BERT", "Flask"],
    category: "NLP",
    image: "/api/placeholder/400/250",
    date: "2024-01",
    featured: true,
    slug: "sentiment-analysis-ai"
  },
  {
    id: 2,
    title: "Computer Vision Object Detection",
    description: "Real-time object detection system using YOLO v8 for autonomous vehicle applications.",
    technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
    category: "Computer Vision",
    image: "/api/placeholder/400/250",
    date: "2023-11",
    featured: true,
    slug: "computer-vision-detection"
  },
  {
    id: 3,
    title: "Chatbot with RAG",
    description: "Intelligent chatbot using Retrieval-Augmented Generation for customer support automation.",
    technologies: ["Python", "LangChain", "Vector DB", "OpenAI"],
    category: "Chatbots",
    image: "/api/placeholder/400/250",
    date: "2023-09",
    featured: false,
    slug: "rag-chatbot"
  },
  {
    id: 4,
    title: "Time Series Forecasting",
    description: "LSTM-based model for predicting stock prices and market trends with high accuracy.",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    category: "ML",
    image: "/api/placeholder/400/250",
    date: "2023-07",
    featured: false,
    slug: "time-series-forecasting"
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Stable Diffusion-based image generation API with custom fine-tuning capabilities.",
    technologies: ["Python", "Stable Diffusion", "FastAPI", "Docker"],
    category: "Generative AI",
    image: "/api/placeholder/400/250",
    date: "2023-05",
    featured: false,
    slug: "ai-image-generator"
  },
  {
    id: 6,
    title: "Voice Recognition System",
    description: "Real-time speech-to-text system with custom wake word detection and noise filtering.",
    technologies: ["Python", "Whisper", "WebRTC", "React"],
    category: "Speech AI",
    image: "/api/placeholder/400/250",
    date: "2023-03",
    featured: false,
    slug: "voice-recognition-system"
  }
]

const ProjectCard = ({ project }: { project: typeof sampleProjects[0] }) => {
  return (
    <div className="glass-effect rounded-lg overflow-hidden hover-glow group">
      {/* Project Image */}
      <div className="relative h-48 bg-primary-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">🤖</div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary-accent text-primary-dark px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary-accent/80 text-sm font-mono">{project.category}</span>
          <span className="text-primary-text/60 text-sm">{project.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-primary-text/80 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-primary-text/60 px-2 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Action Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-primary-accent hover:text-primary-accent/80 transition-colors duration-300 font-medium"
        >
          View Details
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...Array.from(new Set(sampleProjects.map(p => p.category)))]
  
  const filteredProjects = sampleProjects
    .filter(project => filter === 'All' || project.category === filter)
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    )

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const regularProjects = filteredProjects.filter(p => !p.featured)

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">
              <span className="gradient-text">AI Projects</span>
            </h1>
            <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
              Explore my portfolio of artificial intelligence projects, from machine learning models 
              to intelligent automation systems.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-primary-secondary/50 border border-primary-accent/30 rounded-lg px-4 py-3 pl-10 text-primary-text placeholder-primary-text/40 focus:outline-none focus:border-primary-accent transition-colors duration-300"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-text/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary-accent text-primary-dark'
                      : 'glass-effect text-primary-text/80 hover:text-primary-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">
            {featuredProjects.length > 0 ? 'All Projects' : 'Projects'}
          </h2>
          
          {regularProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-xl font-bold text-primary-text/80 mb-2">No projects found</h3>
              <p className="text-primary-text/60">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}

export default ProjectsPage