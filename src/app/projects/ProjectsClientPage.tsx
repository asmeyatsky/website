'use client'

import React, { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getProjects, Project, ProjectSkeleton } from '@/lib/contentful'
import type { Entry } from 'contentful'
import BookCallButton from '@/components/BookCallButton'
import CalendlySection from '@/components/CalendlySection'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="glass-effect rounded-lg overflow-hidden hover-glow group">
      {/* Project Image */}
      <div className="relative h-48 bg-primary-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">🤖</div>
        </div>
        {project.status === 'Completed' && (
          <div className="absolute top-3 right-3 bg-primary-accent text-primary-dark px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary-accent/80 text-sm font-mono">{project.category}</span>
          <span className="text-primary-text/60 text-sm">{project.status}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-primary-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-primary-text/80 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(Array.isArray(project.technologies) ? project.technologies : []).slice(0, 3).map((tech: string) => (
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

const ProjectsClientPage = ({ initialProjects }: { initialProjects: Entry<ProjectSkeleton>[] }) => {
  const [projects, setProjects] = useState<Entry<ProjectSkeleton>[]>(initialProjects)
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Categories are derived from the initial projects, or from the current projects state after filtering/searching
  const categories = ['All', ...Array.from(new Set((projects.length > 0 ? projects : initialProjects).map(p => typeof p.fields.category === 'string' ? p.fields.category : '').filter(Boolean)))]
  
  const filteredProjects = projects
    .filter(project => filter === 'All' || (typeof project.fields.category === 'string' && project.fields.category === filter))
    .filter(project => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const titleMatch = typeof project.fields.title === 'string' && (project.fields.title as string).toLowerCase().includes(lowerSearchTerm);
      const descriptionMatch = typeof project.fields.description === 'string' && (project.fields.description as string).toLowerCase().includes(lowerSearchTerm);
      const technologiesMatch = Array.isArray(project.fields.technologies) && project.fields.technologies.some(tech => typeof tech === 'string' && tech.toLowerCase().includes(lowerSearchTerm));
      return titleMatch || descriptionMatch || technologiesMatch;
    })

  const featuredProjects = filteredProjects.filter(p => typeof p.fields.status === 'string' && p.fields.status === 'Completed')
  const regularProjects = filteredProjects.filter(p => typeof p.fields.status !== 'string' || p.fields.status !== 'Completed')

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">
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
                  key={String(category)}
                  onClick={() => setFilter(String(category))}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary-accent text-primary-dark'
                      : 'glass-effect text-primary-text/80 hover:text-primary-accent'
                  }`}
                >
                  {String(category)}
                </button>
              ))}
            </div>
          </div>
        </section>

        <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.sys.id} project={project.fields} />
                  ))}
                </div>
              </section>
            )}

            {/* All Projects */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-sans font-bold text-primary-accent mb-6">
                {featuredProjects.length > 0 ? 'All Projects' : 'Projects'}
              </h2>
              
              {regularProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularProjects.map((project) => (
                    <ProjectCard key={project.sys.id} project={project.fields} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 opacity-50">🔍</div>
                  <h3 className="text-xl font-bold text-primary-text/80 mb-2">No projects found</h3>
                  <p className="text-primary-text/60 mb-6">Try adjusting your search or filter criteria.</p>
                  
                  {/* CTA for consultation */}
                  <div className="max-w-md mx-auto">
                    <BookCallButton 
                      className="ai-button px-8 py-4"
                    >
                      Schedule Free Consultation
                    </BookCallButton>
                    <p className="text-primary-text/60 text-sm mt-4">
                      Want to discuss a custom AI project? Let's talk!
                    </p>
                  </div>
                </div>
              )}
            </section>
          </>

        {/* Calendly Section */}
        <CalendlySection 
          title="Discuss Your Custom AI Project"
          description="Have a unique project in mind? Schedule a free 30-minute consultation to discuss your specific AI needs and explore how we can achieve your goals together."
          showWidget={false}
          showButton={true}
          buttonText="Schedule Free Consultation"
          buttonClass="ai-button px-8 py-4"
          showAlternativeLink={false}
        />
      </div>
    </Layout>
  )
}

export default ProjectsClientPage