'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const projects = [
  {
    title: "Lucent Pro - AI Photo Manager",
    category: "App Store Application",
    description: "Production iOS application that organizes your entire photo library using on-device AI. Smart search, 200+ intelligent collections, duplicate detection, and photo maps. Your photos never leave your device.",
    features: ["Natural language photo search", "200+ AI-generated collections", "Duplicate & similar photo detection", "Interactive photo map", "Face & object recognition", "Text recognition (OCR)", "Voice search", "iCloud library support"],
    tech: "iOS (SwiftUI, Vision Framework, Core ML), Apple Neural Engine, On-Device AI",
    targetAudience: "iPhone, iPad, Mac, and Vision Pro users with large photo libraries",
    why: "To deliver powerful, production-grade photo management with 100% on-device AI, prioritizing privacy and performance.",
    cta: { text: "Download on App Store", link: "https://apps.apple.com/us/app/lucent-pro/id6749473261" }
  },
  {
    title: "WellnessApp - Enterprise Wellness Platform",
    category: "App Store Application",
    description: "Enterprise-grade wellness application with secure backend and native iOS client. Empowers users to manage mental, physical, and social wellbeing holistically with production-ready architecture.",
    features: ["Guided meditation library", "Mood/stress tracking with AI insights", "Breathing exercises & journaling", "Sleep/activity tracking with HealthKit", "Habit management system", "Real-time messaging", "AI wellness assistant", "Community features", "Biometric authentication"],
    tech: "Backend: Node.js, Express, MongoDB, Socket.IO, Stripe, Google Cloud Storage. iOS: Swift 5.9, SwiftUI, MVVM, Core Data",
    targetAudience: "Organizations and individuals seeking comprehensive wellness solutions",
    why: "To provide a production-ready wellness platform combining powerful backend services with native iOS experience.",
    cta: { text: "In Development", link: "#" }
  },
  {
    title: "Echo - Audio Memory Platform",
    category: "App Store Application",
    description: "Mobile-first application for intelligent audio recording with AI-powered transcription and speaker identification. Privacy-first architecture with secure cloud storage.",
    features: ["Ambient audio recording", "AI transcription with speaker diarization", "Chronological memory stream", "Universal semantic search", "Memory curation", "Secure sharing", "Privacy-first design"],
    tech: "Backend: Node.js, Express, PostgreSQL, Google Cloud Platform (Speech-to-Text, NLP APIs), JWT. Frontend: React",
    targetAudience: "Individuals seeking to capture, organize, and preserve audio memories",
    why: "To create a production application for capturing and reliving memories with advanced AI capabilities.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "Little Canvas - Kids Super App",
    category: "App Store Application",
    description: "Production iOS/Android application for children aged 3-8+ combining creative tools, storytelling, and learning modules. Features AI-powered personalization, global localization, and enterprise-grade safety.",
    features: ["Advanced creative tools", "AI-powered learning system", "Global localization", "Enterprise-level safety & privacy", "Offline-first architecture", "Gamification & rewards", "Parent dashboard", "Inclusive accessibility"],
    tech: "Frontend: React Native (iOS & Android), Redux Toolkit. Backend: Firebase, serverless functions, AI/ML personalization",
    targetAudience: "Children aged 3-8+ and their parents",
    why: "To deliver a production-grade educational platform combining safety, engagement, and learning outcomes.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "P2P Gear Rental - Marketplace Platform",
    category: "Full-Stack Web Application",
    description: "Production marketplace for renting photography and videography equipment. Built with modern stack featuring real-time inventory, secure payments, and scalable infrastructure.",
    features: ["Gear listings with advanced search", "Real-time inventory management", "User profiles and reviews", "Secure Stripe payments", "Supabase authentication", "Responsive design", "Mobile-optimized"],
    tech: "Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS. Backend: Next.js API Routes, Prisma, PostgreSQL. Deployment: Docker, GitHub Actions",
    targetAudience: "Photographers, videographers, and content creators",
    why: "To create a production-ready marketplace enabling equipment sharing within creative communities.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/p2p-gear-rental" }
  },
  {
    title: "Classic Games - World-Class Cross-Platform Suite",
    category: "Full-Stack Web Application",
    description: "Production gaming suite featuring Texas Hold'em Poker, Backgammon, and Scrabble with realistic 3D graphics and online multiplayer. Enterprise-grade server architecture with real-time synchronization.",
    features: ["Realistic 3D graphics with physics", "Cross-platform (iOS, Android, Web)", "Online multiplayer with matchmaking", "Real-time synchronization", "Offline AI opponents", "Sound and haptic feedback", "Scalable backend infrastructure"],
    tech: "Frontend: React, React Native, Three.js, Expo GL, TypeScript. Backend: Node.js with WebSocket, Turborepo monorepo",
    targetAudience: "Gamers seeking high-quality implementations of classic games",
    why: "To deliver production gaming applications combining sophisticated graphics, multiplayer features, and cross-platform availability.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/classic-games-monorepo" }
  },
  {
    title: "AI Education Platform (aiteach)",
    category: "Full-Stack Web Application",
    description: "Production educational platform offering personalized AI/ML learning paths. Enterprise-grade backend with responsive design, secure authentication, and comprehensive course management.",
    features: ["Proficiency assessment", "Adaptive course recommendations", "Progressive difficulty levels", "JWT-based security", "Full CRUD course management", "Progress tracking", "Gamification", "Community forum", "Responsive design"],
    tech: "Backend: FastAPI (Python), PostgreSQL, Docker. Frontend: Flutter. Scalable API architecture",
    targetAudience: "Students and professionals pursuing AI/ML education",
    why: "To provide a production-ready educational platform with personalized learning and professional-grade infrastructure.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "NexusComm - Unified Communication Platform",
    category: "Full-Stack Web Application",
    description: "Enterprise-grade platform consolidating personal, professional, and social communications. Production microservices architecture with advanced AI intelligence and real-time synchronization.",
    features: ["AI-powered message organization", "Unified communication stream", "Enterprise-grade security", "Real-time synchronization", "Business intelligence", "Advanced accessibility"],
    tech: "Microservices: Node.js 18+, Express.js, PostgreSQL, Redis, Socket.IO. Frontend: React Native (mobile), React (web). Deployment: Docker, Kubernetes",
    targetAudience: "Professionals and enterprises seeking unified communication",
    why: "To deliver a production platform solving communication fragmentation with enterprise-grade security and AI capabilities.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "Universal Agent Builder (UAB)",
    category: "Full-Stack Web Application",
    description: "Web application for creating and configuring AI agents supporting multiple frameworks (A2A, ADK, MCP). Production-ready with template management, testing environment, and deployment options.",
    features: ["Interactive agent creation", "Multi-framework support", "Pre-built templates", "Real-time configuration", "Built-in testing environment", "State persistence", "Export functionality", "Deployment configuration"],
    tech: "Vanilla JavaScript with modern tooling. Scalable web application architecture",
    targetAudience: "Developers and enterprises building AI agents",
    why: "To provide a production tool simplifying AI agent creation and deployment across multiple frameworks.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "aicache - Developer Productivity Tool",
    category: "Enterprise Tool",
    description: "Production command-line tool enhancing developer workflow with intelligent caching across multiple AI CLIs. Used in professional development environments to improve productivity and reduce API costs.",
    features: ["Smart response caching", "Intelligent argument parsing", "Persistent storage", "Semantic search", "Behavioral analytics", "Predictive prefetching", "Multi-modal support", "Enhanced security", "Shell integration"],
    tech: "Python. Production CLI tool with robust architecture",
    targetAudience: "Developers using AI CLIs in professional environments",
    why: "To deliver a production tool that improves developer productivity through intelligent caching and advanced features.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/aicache" }
  },
  {
    title: "Vibe Coding Charter - Development Methodology",
    category: "Enterprise Framework",
    description: "Governance framework transforming AI integration in software development. Provides architecture-aware discipline for AI-assisted coding, addressing the challenge of harnessing AI speed without sacrificing architectural integrity.",
    features: ["Four core architectural principles", "Five governance rules", "Layered defense mechanism", "Prevention of abstraction gaps", "Advanced prompt engineering", "Intent Engineer role definition", "Enterprise-grade discipline"],
    tech: "Conceptual framework and documentation. Applicable across technology stacks",
    targetAudience: "Development teams using AI assistants at scale",
    why: "To provide enterprise teams with a disciplined framework for responsible, architecture-aware AI integration.",
    cta: { text: "Read the Charter", link: "/vibecoding-charter" }
  },
]

const ProjectsClientPage = () => {
  // Group projects by category
  const appStoreApps = projects.filter(p => p.category === "App Store Application")
  const webApps = projects.filter(p => p.category === "Full-Stack Web Application")
  const enterpriseTools = projects.filter(p => p.category === "Enterprise Tool" || p.category === "Enterprise Framework")

  const renderProjectCard = (project: typeof projects[0]) => {
    const isLucentPro = project.title.includes('Lucent Pro')

    return (
    <div key={project.title} className="glass-effect p-6 rounded-lg flex flex-col">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-brutalist-accent/20 text-brutalist-accent text-xs font-mono rounded mb-2">
          {project.category}
        </span>
      </div>
      {isLucentPro ? (
        <Link href="/lucent-pro" className="text-2xl font-bold mb-2 gradient-text hover:opacity-80 transition-opacity">
          {project.title}
        </Link>
      ) : (
        <h2 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h2>
      )}
      <p className="text-primary-text/80 mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Target Audience:</h3>
        <p className="text-primary-text/80">{project.targetAudience}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Why We Built This:</h3>
        <p className="text-primary-text/80">{project.why}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-primary-text/80">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Technology:</h3>
        <p className="text-primary-text/80">{project.tech}</p>
      </div>
      {project.cta && (
        <div className="mt-auto pt-4">
          <Link href={project.cta.link} target="_blank" rel="noopener noreferrer" className="ai-button w-full text-center">
            {project.cta.text}
          </Link>
        </div>
      )}
    </div>
  )}

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">
            <span className="gradient-text">Production Applications</span>
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
            A portfolio of production-grade applications across App Store, full-stack web, and enterprise platforms. Most projects are open source on GitHub.
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

        {/* App Store Applications Section */}
        {appStoreApps.length > 0 && (
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">App Store Applications</h2>
              <p className="text-primary-text/80">
                Production iOS and cross-platform applications with sophisticated UI/UX, on-device AI, and App Store optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appStoreApps.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Full-Stack Web Applications Section */}
        {webApps.length > 0 && (
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Full-Stack Web Applications</h2>
              <p className="text-primary-text/80">
                Enterprise and consumer web platforms with scalable architectures, real-time features, payment integration, and cloud deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webApps.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Enterprise Tools & Frameworks Section */}
        {enterpriseTools.length > 0 && (
          <div className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Enterprise Tools & Frameworks</h2>
              <p className="text-primary-text/80">
                Production tools and governance frameworks for enterprise development teams and cloud modernization initiatives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseTools.map(renderProjectCard)}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ProjectsClientPage
