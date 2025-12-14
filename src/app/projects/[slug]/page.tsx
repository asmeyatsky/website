import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getProjects, ProjectSkeleton, getImageUrl, getSafeString } from '@/lib/contentful'
import type { Entry, Asset } from 'contentful'

// Revalidate this page every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects.map((project: Entry<ProjectSkeleton>) => ({
      slug: project.fields.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for projects:', error);
    return []; // Return empty array if Contentful is not accessible
  }
}

export default async function ProjectPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await params as { slug: string };

  try {
    const project = await getProject(resolvedParams.slug);

    if (!project) {
      notFound();
    }

    const projectFields = project.fields;

    return (
      <Layout>
        <div className="min-h-screen py-12">
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary-accent hover:text-primary-accent/80 transition-colors duration-300"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-primary-accent/80 font-mono">{getSafeString(projectFields.category, 'Uncategorized')}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
                <span className="gradient-text">{getSafeString(projectFields.title, 'Untitled Project')}</span>
              </h1>

              <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
                {getSafeString(projectFields.description, 'No description available.')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {projectFields.githubUrl && (
                  <a
                    href={getSafeString(projectFields.githubUrl, '#')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect px-6 py-3 text-primary-accent hover-glow inline-flex items-center justify-center"
                  >
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                )}
                {projectFields.liveUrl && (
                  <a
                    href={getSafeString(projectFields.liveUrl, '#')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-accent text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary-accent/90 transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Project Image */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="glass-effect p-4 rounded-lg">
              {projectFields.featuredImage ? (
                <img
                  src={getImageUrl(projectFields.featuredImage, 800, 400)}
                  alt={(typeof projectFields.title === 'string' ? projectFields.title : 'Project Image')}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="aspect-video bg-primary-secondary/50 rounded-lg flex items-center justify-center">
                  <div className="text-8xl opacity-50">🤖</div>
                </div>
              )}
            </div>
          </section>

          {/* Technologies */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {(Array.isArray(projectFields.technologies) ? projectFields.technologies : []).map((tech: string) => (
                <span
                  key={tech}
                  className="bg-primary-accent/20 text-primary-accent px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Detailed Description */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {getSafeString(projectFields.longDescription).split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-primary-text/80 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>


            </div>
          </section>

          {/* Related Projects */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(await getProjects())
                .filter(p => p.sys.id !== project.sys.id && getSafeString(p.fields.category) === getSafeString(projectFields.category))
                .slice(0, 3)
                .map((relatedProject: Entry<ProjectSkeleton>) => (
                  <Link
                    key={relatedProject.sys.id}
                    href={`/projects/${relatedProject.fields.slug}`}
                    className="glass-effect p-4 rounded-lg hover-glow group"
                  >
                    <h3 className="font-bold text-primary-text group-hover:text-primary-accent transition-colors duration-300 mb-2">
                      {getSafeString(relatedProject.fields.title, 'Untitled Project')}
                    </h3>
                    <p className="text-primary-text/60 text-sm mb-3 line-clamp-2">
                      {getSafeString(relatedProject.fields.description, 'No description available.')}
                    </p>
                    <div className="flex items-center text-primary-accent text-sm">
                      View Project
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </Layout>
    )
  } catch (error) {
    console.error(`Error rendering project page for slug "${resolvedParams.slug}":`, error);

    // Return a fallback page with error information
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">Project Unavailable</h1>
            <p className="text-xl text-primary-text/80 mb-6">
              We're unable to load this project at the moment. The content may be temporarily unavailable.
            </p>
            <div className="space-y-4">
              <Link
                href="/projects"
                className="inline-block bg-primary-accent text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary-accent/90 transition-colors duration-300"
              >
                Browse All Projects
              </Link>
              <p className="text-sm text-primary-text/60">
                Error code: PROJECT_LOAD_ERROR
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}