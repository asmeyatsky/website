import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample project data (will be replaced with CMS data later)
const sampleProjects = [
  {
    id: 1,
    title: "Sentiment Analysis AI",
    description: "A sophisticated deep learning model that analyzes text sentiment with 94% accuracy using transformer architecture. This project demonstrates the power of natural language processing in understanding human emotions and opinions from textual data.",
    technologies: ["Python", "TensorFlow", "BERT", "Flask", "Docker", "AWS"],
    category: "NLP",
    image: "/api/placeholder/800/400",
    date: "2024-01",
    featured: true,
    slug: "sentiment-analysis-ai",
    longDescription: `This sentiment analysis project leverages state-of-the-art transformer models to understand and classify emotional content in text data. Built using BERT (Bidirectional Encoder Representations from Transformers), the model achieves exceptional accuracy in sentiment classification tasks.

The system can process various types of text input, from social media posts to product reviews, and provides detailed sentiment scores along with confidence metrics. The model has been fine-tuned on multiple datasets to ensure robust performance across different domains and writing styles.

Key features include real-time processing capabilities, batch analysis for large datasets, and a RESTful API for easy integration into existing systems. The entire solution is containerized using Docker and deployed on AWS for scalability and reliability.`,
    challenges: [
      "Handling diverse text formats and informal language",
      "Optimizing model performance for real-time processing",
      "Ensuring accuracy across different domains and contexts",
      "Managing computational resources efficiently"
    ],
    results: [
      "94% accuracy on test datasets",
      "Sub-100ms response times for real-time analysis",
      "Successfully deployed to production handling 10k+ requests daily",
      "Improved customer feedback analysis by 40%"
    ],
    githubUrl: "https://github.com/example/sentiment-analysis",
    liveUrl: "https://sentiment-demo.example.com",
    demoVideo: "https://youtube.com/watch?v=example"
  },
  {
    id: 2,
    title: "Computer Vision Object Detection",
    description: "Real-time object detection system using YOLO v8 for autonomous vehicle applications.",
    technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
    category: "Computer Vision",
    image: "/api/placeholder/800/400",
    date: "2023-11",
    featured: true,
    slug: "computer-vision-detection",
    longDescription: `Advanced computer vision system built for autonomous vehicle applications, utilizing the latest YOLO v8 architecture for real-time object detection and tracking. This project demonstrates cutting-edge computer vision techniques applied to real-world scenarios.

The system can detect and classify over 80 different object types including vehicles, pedestrians, traffic signs, and road obstacles with high precision and speed. Optimized for edge computing devices, it can process video streams at 30+ FPS while maintaining detection accuracy.

Built with modularity in mind, the system includes preprocessing pipelines for various camera types, post-processing for tracking and trajectory prediction, and integration APIs for autonomous vehicle control systems.`,
    challenges: [
      "Achieving real-time performance on edge devices",
      "Handling various lighting and weather conditions",
      "Minimizing false positives in critical safety scenarios",
      "Optimizing model size while maintaining accuracy"
    ],
    results: [
      "30+ FPS processing speed on NVIDIA Jetson devices",
      "92% mAP (mean Average Precision) on COCO dataset",
      "Successfully tested in 500+ hours of real-world driving",
      "Reduced object detection latency by 60%"
    ],
    githubUrl: "https://github.com/example/yolo-detection",
    liveUrl: null,
    demoVideo: "https://youtube.com/watch?v=example2"
  }
  // Add more projects as needed
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return sampleProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: any }) {
  const project = sampleProjects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

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
              <span className="text-primary-accent/80 font-mono">{project.category}</span>
              <span className="text-primary-text/60">{project.date}</span>
              {project.featured && (
                <span className="bg-primary-accent text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
              <span className="gradient-text">{project.title}</span>
            </h1>
            
            <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
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
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
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
            <div className="aspect-video bg-primary-secondary/50 rounded-lg flex items-center justify-center">
              <div className="text-8xl opacity-50">🤖</div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
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
                {project.longDescription?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-primary-text/80 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Challenges */}
              {project.challenges && (
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-mono font-bold text-primary-accent mb-4">Key Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-primary-text/80 text-sm flex items-start">
                        <span className="text-primary-accent mr-2 mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-mono font-bold text-primary-accent mb-4">Results & Impact</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-primary-text/80 text-sm flex items-start">
                        <span className="text-neon-green mr-2 mt-1">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProjects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="glass-effect p-4 rounded-lg hover-glow group"
                >
                  <h3 className="font-bold text-primary-text group-hover:text-primary-accent transition-colors duration-300 mb-2">
                    {relatedProject.title}
                  </h3>
                  <p className="text-primary-text/60 text-sm mb-3 line-clamp-2">
                    {relatedProject.description}
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
}