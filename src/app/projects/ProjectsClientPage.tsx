'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const projects = [
  {
    title: "aicache",
    description: "An AI CLI session caching system designed to enhance developer workflow efficiency by caching responses from various AI CLIs (Gemini, Claude, Qwen, OpenAI, gcloud, llm).",
    features: ["Advanced caching", "Intelligent argument parsing", "Persistent storage", "Comprehensive cache management", "Interactive tools", "Shell integration", "Semantic search", "Behavioral analytics", "Predictive prefetching", "Multi-modal support", "Enhanced security"],
    tech: "Python",
    targetAudience: "Developers using AI CLIs",
    why: "To improve developer productivity by caching AI CLI responses.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/aicache" }
  },
  {
    title: "AI Education Platform (aiteach)",
    description: "An innovative AI/ML education platform offering personalized learning paths based on user proficiency levels. It integrates educational content from leading academic institutions and industry leaders.",
    features: ["Proficiency assessment", "Adaptive course recommendations", "Content with progressive difficulty", "Level-based organization", "Secure JWT-based authentication", "Full CRUD for courses and lessons", "Progress tracking", "Gamification", "Community forum", "Responsive design"],
    tech: "Backend: FastAPI (Python) with PostgreSQL and Docker. Frontend: Flutter",
    targetAudience: "Students and professionals looking to learn AI/ML",
    why: "To provide a personalized and effective learning experience for AI/ML education.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "Classic Games - World-Class Cross-Platform Gaming Suite (classic-games-monorepo)",
    description: "A unified monorepo featuring graphics-rich implementations of classic card and board games with realistic 3D graphics and online multiplayer.",
    features: ["Poker (Texas Hold'em)", "Backgammon", "Scrabble", "Realistic 3D graphics with physics", "Cross-platform (iOS, Android, Web)", "Online multiplayer with matchmaking", "Real-time synchronization", "Offline AI opponents", "Sound effects", "Haptic feedback (mobile)", "Responsive design"],
    tech: "Frontend: React, React Native, Next.js, TypeScript, Three.js, React Three Fiber, Expo GL. Backend: Node.js server with WebSocket support. Monorepo management with Turborepo.",
    targetAudience: "Casual gamers and enthusiasts of classic board games",
    why: "To create a high-quality, modern, and accessible platform for playing classic games.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/classic-games-monorepo" }
  },
  {
    title: "Echo - Audio Memory Platform (echo)",
    description: "A mobile-first application that intelligently and passively records audio, using AI to transcribe, identify speakers, and tag key moments automatically. It aims to make memories searchable and relivable for generations.",
    features: ["One-tap ambient recording", "AI transcription with speaker diarization", "Chronological Echo Stream", "Universal search", "Memory curation", "Secure sharing", "Privacy-first"],
    tech: "Backend: Node.js with Express, PostgreSQL with full-text search, Google Cloud Platform (Cloud Storage, Speech-to-Text API, Cloud Natural Language API), JWT authentication. Frontend: React (planned).",
    targetAudience: "Individuals who want to capture and cherish their memories",
    why: "To create a new way to capture, organize, and relive audio memories.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "Little Canvas - World's #1 Kids Super App (littlecanvas)",
    description: "A comprehensive kids' application for ages 3-8+ that combines coloring, storytelling, learning modules, rewards, and offline activities in a safe, engaging platform. It's enhanced with AI-powered personalization, global localization, and advanced safety features.",
    features: ["Advanced creative tools", "AI-powered learning system", "Global localization", "Ultimate safety & privacy", "Offline-first architecture", "Comprehensive learning system", "Advanced gamification & rewards", "Creative storytelling platform", "Seasonal content", "Offline activity integration", "Inclusive accessibility", "Social & family features", "Enhanced parent dashboard"],
    tech: "Frontend: React Native for cross-platform (iOS & Android) with Redux Toolkit. Backend: Firebase for authentication and data storage, serverless functions, AI/ML components for personalization.",
    targetAudience: "Children aged 3-8+ and their parents",
    why: "To provide a safe, engaging, and educational digital playground for children.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "NexusComm - The Ultimate Unified Communication Platform (nexuscomm)",
    description: "A comprehensive unified communication platform that consolidates all personal, professional, and social digital communications into one intelligent, organized stream, aiming to eliminate app-switching fatigue.",
    features: ["AI-powered intelligence", "Unified communication", "Enterprise-grade security", "Business intelligence", "Accessibility"],
    tech: "Microservices architecture. Backend: Node.js 18+ with Express.js, PostgreSQL with TypeORM, Redis, Socket.IO, Bull.js, OpenAI GPT models. Frontend: React Native with Expo (mobile), React with TypeScript (web). DevOps: Docker, Kubernetes-ready, GitHub Actions.",
    targetAudience: "Busy professionals and individuals who want to streamline their communication",
    why: "To solve the problem of app-switching fatigue and create a more unified communication experience.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "P2P Gear Rental Platform (p2p-gear-rental)",
    description: "A modern peer-to-peer marketplace for renting photography and videography equipment, enabling users to list their gear and discover equipment from other creators in their area.",
    features: ["Gear listings", "Advanced search filters", "Rental management", "User profiles", "Secure payments via Stripe", "Supabase-powered authentication"],
    tech: "Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS. Backend & Database: Next.js API Routes, Prisma ORM, PostgreSQL, Zod. Authentication & Payments: Supabase, Stripe. Development & DevOps: Jest, Playwright, ESLint, Docker, GitHub Actions.",
    targetAudience: "Photographers, videographers, and content creators",
    why: "To create a community-driven marketplace for renting creative equipment.",
    cta: { text: "View on GitHub", link: "https://github.com/asmeyatsky/p2p-gear-rental" }
  },
  {
    title: "Universal Agent Builder (UAB)",
    description: "A web-based application for creating AI agents from prompts, supporting A2A (Agent-to-Agent Protocol), ADK (Agent Development Kit), and MCP (Model Context Protocol) frameworks.",
    features: ["Interactive agent creation", "Support for multiple AI frameworks", "Pre-built templates", "Auto-framework selection", "Real-time configuration forms", "Built-in mock testing environment", "State persistence", "Export functionality", "Multiple deployment configuration options"],
    tech: "Vanilla JavaScript for the web application.",
    targetAudience: "Developers and researchers working with AI agents",
    why: "To simplify the process of creating and configuring AI agents.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "Vibe Coding Charter (vibecharter)",
    description: "A comprehensive governance framework designed to transform AI from a spontaneous automaton into a disciplined, architecture-aware co-pilot, addressing the challenge of harnessing AI's speed without sacrificing long-term architectural integrity.",
    features: ["Four core architectural principles", "Five non-negotiable rules", "Layered defense mechanism", "Prevention of abstraction gaps", "Advanced prompt engineering guidance", "Introduction of an 'Intent Engineer' role"],
    tech: "Primarily a conceptual framework and documentation project, not a software application with a distinct tech stack for its implementation.",
    targetAudience: "Software development teams using AI assistants",
    why: "To provide a framework for using AI assistants in a disciplined and architecturally sound way.",
    cta: { text: "Read the Charter", link: "/vibecoding-charter" }
  },
  {
    title: "Lucent (NextGenMediaManager)",
    description: "A cutting-edge iOS application that revolutionizes media organization through comprehensive AI-powered features, including duplicate detection, semantic search, photo clustering, and intelligent insights. All processing is on-device for complete privacy.",
    features: ["Intelligent tagging", "Smart collections", "Natural language search", "OCR text recognition", "Semantic embeddings", "NIMA-powered aesthetic quality scoring", "Duplicate and near-duplicate photo detection", "K-means photo clustering", "ML insights", "Seamless CloudKit integration", "Modern SwiftUI interface"],
    tech: "iOS (SwiftUI, Photos Framework, CloudKit, Combine, Core Location, Vision Framework). External Services & ML Models: Google Gemini AI, Google MLKit, CLIP Embeddings, NIMA Model, custom ML models. Development: macOS 14+, Xcode 15+, iOS 17+ SDK.",
    targetAudience: "iPhone users with large photo libraries",
    why: "To bring powerful, on-device AI to photo management on iOS, ensuring privacy and performance.",
    cta: { text: "Coming Soon", link: "#" }
  },
  {
    title: "WellnessApp - Enterprise-Grade Wellness Platform (wellness)",
    description: "A comprehensive, production-ready wellness application with a secure Node.js backend API and a native iOS client. It empowers users to manage their mental, physical, and social wellbeing holistically.",
    features: ["Backend: JWT authentication, user management, APIs for mood/sleep/workout/nutrition tracking, meditation library, habit system, real-time messaging (WebSocket), e-commerce (Stripe), file uploads (Google Cloud Storage), security (rate limiting, input sanitization), and email service.", "iOS App: Guided meditation, mood/stress tracker with AI insights, breathing exercises, journaling, sleep/activity tracking, HealthKit integration, custom habit tracker, AI wellness assistant (personalized nudges, insights), community features (forums, challenges), biometric authentication, and personalized onboarding."],
    tech: "Backend: Node.js 18+ with Express.js, MongoDB 5.0+, Socket.IO, Stripe, Google Cloud Storage, Nodemailer. iOS: iOS 16.0+, Swift 5.9, SwiftUI, MVVM architecture, Alamofire, Socket.IO Client, Core Data (encrypted), Keychain Services, HealthKit."
  }
]

const ProjectsClientPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">
            <span className="gradient-text">AI Projects</span>
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
            Explore my portfolio of artificial intelligence projects. You can find the source code for most of these projects on my GitHub.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h2>
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
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsClientPage
