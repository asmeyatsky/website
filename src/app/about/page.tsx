import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const AboutPage = () => {
  const skills = [
    { category: "Machine Learning", technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"] },
    { category: "Natural Language Processing", technologies: ["BERT", "GPT", "Transformers", "spaCy", "NLTK"] },
    { category: "Computer Vision", technologies: ["OpenCV", "YOLO", "ResNet", "CNN", "Image Processing"] },
    { category: "Programming Languages", technologies: ["Python", "JavaScript", "TypeScript", "R", "SQL"] },
    { category: "Cloud & DevOps", technologies: ["AWS", "GCP", "Docker", "Kubernetes", "MLOps"] },
    { category: "Frameworks & Tools", technologies: ["Next.js", "React", "Flask", "FastAPI", "Jupyter"] }
  ]

  const experience = [
    {
      title: "Senior AI Consultant",
      company: "Independent Practice",
      period: "2023 - Present",
      description: "Providing AI strategy and implementation services to Fortune 500 companies and startups, focusing on machine learning, NLP, and computer vision solutions.",
      achievements: [
        "Delivered 20+ successful AI projects across various industries",
        "Achieved average ROI of 300% for client implementations",
        "Led teams of 5-15 engineers on complex AI initiatives"
      ]
    },
    {
      title: "Lead AI Engineer",
      company: "TechInnovate Corp",
      period: "2021 - 2023",
      description: "Led the AI research and development team, focusing on cutting-edge machine learning applications for enterprise clients.",
      achievements: [
        "Built and deployed 10+ production ML models serving millions of users",
        "Reduced model inference time by 60% through optimization techniques",
        "Mentored junior engineers and established ML best practices"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataSolutions Inc",
      period: "2019 - 2021",
      description: "Developed and maintained machine learning pipelines for real-time data processing and predictive analytics.",
      achievements: [
        "Designed ML architecture serving 1M+ daily predictions",
        "Improved model accuracy by 25% through advanced feature engineering",
        "Automated ML workflows reducing deployment time by 80%"
      ]
    }
  ]

  const education = [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      year: "2019",
      focus: "Artificial Intelligence & Machine Learning"
    },
    {
      degree: "B.S. Computer Engineering",
      school: "UC Berkeley", 
      year: "2017",
      focus: "Software Systems & Algorithms"
    }
  ]

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "TensorFlow Developer Certificate",
    "Deep Learning Specialization (Coursera)",
    "Advanced Machine Learning (Coursera)"
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
              Pioneering AI engineer and consultant with 5+ years of experience building intelligent agentic systems 
              that solve real-world problems and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="glass-effect p-8 rounded-xl text-center hover-glow-intense">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-accent/20 to-accent-cyan/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <h2 className="text-2xl font-bold text-primary-text mb-2">Your Name</h2>
                <p className="text-accent-cyan font-semibold mb-4">AI Engineer & Consultant</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/yourname" className="text-primary-text/60 hover:text-accent-cyan transition-colors">
                    <span className="text-2xl">🔗</span>
                  </a>
                  <a href="https://linkedin.com/in/yourname" className="text-primary-text/60 hover:text-accent-cyan transition-colors">
                    <span className="text-2xl">💼</span>
                  </a>
                  <a href="https://twitter.com/yourname" className="text-primary-text/60 hover:text-accent-cyan transition-colors">
                    <span className="text-2xl">🐦</span>
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
                    I&apos;m a pioneering AI engineer with over 5 years of experience transforming businesses through 
                    intelligent automation and agentic AI solutions. My journey began with a fascination 
                    for how computers could learn, reason, and act autonomously, leading me to pursue advanced degrees in 
                    computer science and AI.
                  </p>
                  <p>
                    Throughout my career, I&apos;ve had the privilege of working on cutting-edge projects ranging from 
                    large language models that understand human intent, to computer vision systems 
                    that power autonomous agents. I believe in the transformative power of agentic AI when applied 
                    thoughtfully and ethically.
                  </p>
                  <p>
                    Today, I help organizations navigate the complex landscape of agentic AI implementation, from strategic 
                    planning to hands-on development. My goal is to make autonomous AI systems accessible and valuable for businesses 
                    of all sizes, while ensuring responsible and sustainable adoption.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-primary-text/80">AI Projects</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-primary-text/80">Years Experience</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">25+</div>
                  <div className="text-sm text-primary-text/80">Happy Clients</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold gradient-text">300%</div>
                  <div className="text-sm text-primary-text/80">Avg ROI</div>
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