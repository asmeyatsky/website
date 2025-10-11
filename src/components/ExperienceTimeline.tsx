'use client'

import React, { useState } from 'react'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    title: "Global Infrastructure Modernization Leader",
    company: "Senior Director",
    period: "2021 - Present",
    description: "Established and scaled global Infrastructure Modernization Practice from inception to 25+ direct reports and 800+ professionals across five continents.",
    achievements: [
      "Architect and implement Google Cloud solutions utilizing GKE, Cloud Functions, and Google Distributed Cloud",
      "Spearhead DevSecOps transformations integrating advanced security scanning",
      "Pioneer AI integration strategies leveraging Anthropic Claude and Google Gemini",
      "Orchestrate comprehensive architecture reviews for enterprise transformation",
    ]
  },
  {
    title: "Global Head of Application Modernization",
    company: "Assistant Director",
    period: "2020 - 2021",
    description: "Directed global Application Modernization Tower with full P&L responsibility, overseeing integrated teams across presales, solution architecture, and delivery.",
    achievements: [
      "Designed enterprise workload transformations through intelligent cloud migration strategies",
      "Developed comprehensive hybrid and multi-cloud strategies leveraging Apigee and Google Anthos",
    ]
  },
  {
    title: "Principal Solution Architect",
    company: "Risk Advisory, Big Four",
    period: "2017 - 2020",
    description: "Designed cloud-native architectures for sophisticated risk analytics solutions across AWS and Azure platforms.",
    achievements: [
      "Developed advanced Machine Learning algorithms and OCR automation systems",
      "Created resilient Disaster Recovery frameworks with automated failover mechanisms",
    ]
  },
]

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-code-bg border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-accent"
        >
          <button
            onClick={() => toggleExpand(index)}
            className="w-full p-6 text-left"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-accent text-2xl">●</span>
                  <h3 className="text-lg md:text-xl font-bold text-text font-mono">{exp.title}</h3>
                </div>
                <p className="text-accent text-sm font-mono ml-8">{exp.company}</p>
                <p className="text-text-secondary text-sm font-mono ml-8 mt-1">{exp.period}</p>
              </div>
              <div className="flex-shrink-0 mt-2">
                <span className="text-accent text-xl font-mono">
                  {expandedIndex === index ? '▲' : '▼'}
                </span>
              </div>
            </div>
          </button>

          {expandedIndex === index && (
            <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in-up">
              <p className="text-text-secondary mb-4 ml-8">{exp.description}</p>
              <div className="ml-8">
                <h4 className="text-accent font-mono text-sm mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-3">
                      <span className="text-accent mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="text-center pt-4">
        <p className="text-text-secondary font-mono text-sm mb-4">30 years of technology leadership</p>
      </div>
    </div>
  )
}
