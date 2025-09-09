import Image from 'next/image'
import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const AboutPage = () => {
  const skills = [
    { category: "Solution Architecture (30 Years)", technologies: ["Enterprise Architecture Design", "Hybrid & Multi-Cloud Strategies", "Microservices Architecture", "API-First Design", "Event-Driven Architecture", "Domain-Driven Design"] },
    { category: "Multi-Cloud Expertise (8 Years)", technologies: ["Google Cloud Platform", "Amazon Web Services", "Microsoft Azure"] },
    { category: "Google Cloud Specialization", technologies: ["Containerization & Kubernetes", "DevSecOps Pipelines", "Cloud-to-Cloud Migrations", "API Modernization", "Middleware Modernization", "Infrastructure as Code (Terraform)", "Container Security", "Network Policies", "Identity & Access Management"] },
    { category: "AI & Machine Learning (2 Years)", technologies: ["Anthropic Claude", "Google Gemini", "OpenAI"] },
    { category: "Active Development Stack", technologies: ["iOS Development", "Full-Stack JavaScript", "Python Development", "AI-Assisted Development"] }
  ]

  const experience = [
    {
      title: "Global Infrastructure Modernization Leader (Senior Director)",
      company: "Searce Inc",
      period: "2021 - Present",
      description: "Established and scaled global Infrastructure Modernization Practice from inception to 25+ direct reports and 800+ professionals across five continents. Generated practice revenue exceeding $50M through comprehensive cloud modernization strategies and AI-native architecture implementations.",
      achievements: [
        "Architect and implement Google Cloud solutions utilizing GKE, Cloud Functions, and Google Distributed Cloud for Enterprise and Public Sector clients.",
        "Spearhead DevSecOps transformations integrating advanced security scanning, policy enforcement, and automated compliance frameworks.",
        "Pioneer AI integration strategies leveraging Anthropic Claude and Google Gemini for automated code generation, review, and optimization.",
        "Develop internal iOS applications using Swift and SwiftUI integrated with AI APIs for operational efficiency and team productivity enhancement.",
        "Create Python-based CLI tools for intelligent cloud resource management and automation workflows.",
        "Build Node.js microservices with embedded AI capabilities for real-time data processing and API orchestration.",
        "Orchestrate comprehensive architecture reviews and technical due diligence for enterprise transformation initiatives.",
        "Design hybrid cloud strategies addressing complex regulatory compliance, data sovereignty, and performance requirements.",
        "Implement API modernization programs transforming legacy SOAP services to GraphQL and RESTful architectures.",
      ]
    },
    {
      title: "Global Head of Application Modernization (Assistant Director)",
      company: "HCL Technologies",
      period: "March 2020 – August 2021",
      description: "Directed global Application Modernization Tower with full P&L responsibility, overseeing integrated teams across presales, solution architecture, and delivery. Designed enterprise workload transformations through intelligent cloud migration strategies and AI/ML integration. Developed comprehensive hybrid and multi-cloud strategies leveraging Apigee and Google Anthos Ecosystem for enhanced performance optimization.",
      achievements: [
        "Directed global Application Modernization Tower with full P&L responsibility, overseeing integrated teams across presales, solution architecture, and delivery.",
        "Designed enterprise workload transformations through intelligent cloud migration strategies and AI/ML integration.",
        "Developed comprehensive hybrid and multi-cloud strategies leveraging Apigee and Google Anthos Ecosystem for enhanced performance optimization.",
      ]
    },
    {
      title: "Principal Solution Architect – Innovations & Solutions, Risk Advisory",
      company: "Deloitte UK",
      period: "September 2017 – February 2020",
      description: "Designed cloud-native architectures for sophisticated risk analytics solutions across AWS and Azure platforms, ensuring enterprise-scale scalability and data integrity. Developed advanced Machine Learning algorithms and OCR automation systems for intelligent document processing. Created resilient Disaster Recovery frameworks with automated failover mechanisms and comprehensive business continuity planning.",
      achievements: [
        "Designed cloud-native architectures for sophisticated risk analytics solutions across AWS and Azure platforms, ensuring enterprise-scale scalability and data integrity.",
        "Developed advanced Machine Learning algorithms and OCR automation systems for intelligent document processing.",
        "Created resilient Disaster Recovery frameworks with automated failover mechanisms and comprehensive business continuity planning.",
      ]
    },
    {
      title: "Previous Leadership Roles",
      company: "",
      period: "",
      description: "Genesys Solution Architect | PC1 - Enterprise Communications Solutions | March 2017 – September 2017. Information Technology Solutions Architect | Nationwide - UK Financial Services | August 2015 – March 2017. Senior Technical Leadership Positions | EE, Vodafone, Orange, T-Mobile, Legion UK Limited - Telecommunications & Technology Companies.",
      achievements: []
    }
  ]

  const education = [
    {
      degree: "National Diploma in Computer Data Processing",
      school: "Technikon Witwatersrand, Johannesburg",
      year: "1989-1992",
      focus: ""
    }
  ]

  const certifications = [
    "Google Cloud Professional Architect",
    "AWS Solutions Architect Professional",
    "Azure Solutions Architect Expert"
  ]

  return (
    <Layout>
      <div className="min-h-screen py-12">
        {/* Hero Section */}
        <section className="content-container mb-16">
          <div className="text-center mb-12">
            <h1 className="professional-title">
              <span className="gradient-text-cyber">About Me</span>
            </h1>
            <p className="professional-subtitle">
              Transformational Technology Executive with three decades of solution architecture excellence spanning on-premises to cloud-native ecosystems across global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="glass-effect p-8 rounded-xl text-center hover-glow-intense">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden relative">
                  <Image
                    src="/allan_smeyatsky.jpg" 
                    alt="Allan Smeyatsky"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold text-primary-text mb-2">Allan Smeyatsky</h2>
                <p className="text-accent-cyan font-semibold mb-4">Global Technology Executive & Solution Architect</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/asmeyatsky" className="text-primary-text/60 hover:text-accent-cyan transition-colors">
                    <span className="text-2xl">🔗</span>
                  </a>
                  <a href="https://linkedin.com/in/allansmeyatsky" className="text-primary-text/60 hover:text-accent-cyan transition-colors">
                    <span className="text-2xl">💼</span>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="section-subheader">My Journey</h3>
                <div className="space-y-4 text-primary-text/80">
                  <p>
                    Transformational Technology Executive with three decades of solution architecture excellence spanning 
                    on-premises to cloud-native ecosystems across global enterprises. I am a distinguished leader who combines 
                    strategic vision with hands-on technical execution, leading from architecting enterprise solutions to 
                    developing production applications while building world-class engineering organizations.
                  </p>
                  <p>
                    My current focus is on advancing AI-native architectures through direct experience with Anthropic Claude, 
                    Google Gemini, and OpenAI platforms, complemented by active development in Swift/iOS, Node.js, and Python ecosystems.
                  </p>
                  <p>
                    I embody a Technical Leadership Mindset, emphasizing strategic execution through direct involvement. 
                    I seamlessly transition between architecting enterprise solutions, coding innovative applications, 
                    and mentoring global engineering talent.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-sm text-primary-text/80">Years Experience</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">$50M+</div>
                  <div className="text-sm text-primary-text/80">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="content-container section-padding">
          <h2 className="section-header">Agentic AI Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="hologram-card p-6 rounded-xl hover-glow-intense">
                <h3 className="text-lg font-bold text-accent-cyan mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs futuristic-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="content-container section-padding bg-gradient-futuristic">
          <h2 className="section-header">Professional Journey</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="hologram-card p-8 rounded-xl hover-glow-intense">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-text">{exp.title}</h3>
                    <p className="text-accent-cyan font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-neutral-medium font-medium">{exp.period}</span>
                </div>
                
                <p className="text-primary-text/80 mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold text-primary-text mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-primary-text/80 flex items-start">
                        <span className="text-accent-cyan mr-3 mt-1">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="content-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="section-subheader">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass-effect p-6 rounded-xl hover-glow">
                    <h3 className="font-bold text-primary-text">{edu.degree}</h3>
                    <p className="text-accent-cyan font-semibold">{edu.school}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-neutral-medium text-sm">{edu.focus}</span>
                      <span className="text-neutral-medium text-sm">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="section-subheader">Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-effect p-4 rounded-xl flex items-center hover-glow">
                    <span className="text-accent-cyan mr-3 text-xl">🎓</span>
                    <span className="text-primary-text/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="content-container section-padding">
          <div className="glass-effect p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Let&apos;s Build the Future
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Ready to bring agentic AI innovation to your organization? I&apos;d love to discuss your challenges 
              and explore how we can achieve your goals together with autonomous AI systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consulting"
                className="ai-button px-8 py-4"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 rounded-xl"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage