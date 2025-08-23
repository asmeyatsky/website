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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
              Passionate AI engineer and consultant with 5+ years of experience building intelligent systems 
              that solve real-world problems and drive business value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-accent/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                  <div className="text-8xl">🤖</div>
                </div>
                <h2 className="text-2xl font-bold text-primary-text mb-2">Your Name</h2>
                <p className="text-primary-accent font-mono mb-4">AI Engineer & Consultant</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/yourname" className="text-primary-text/60 hover:text-primary-accent transition-colors">
                    <span className="text-2xl">🔗</span>
                  </a>
                  <a href="https://linkedin.com/in/yourname" className="text-primary-text/60 hover:text-primary-accent transition-colors">
                    <span className="text-2xl">💼</span>
                  </a>
                  <a href="https://twitter.com/yourname" className="text-primary-text/60 hover:text-primary-accent transition-colors">
                    <span className="text-2xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-mono font-bold text-primary-accent mb-4">My Story</h3>
                <div className="space-y-4 text-primary-text/80">
                  <p>
                    I&apos;m a passionate AI engineer with over 5 years of experience transforming businesses through 
                    intelligent automation and machine learning solutions. My journey began with a fascination 
                    for how computers could learn and make decisions, leading me to pursue advanced degrees in 
                    computer science and AI.
                  </p>
                  <p>
                    Throughout my career, I&apos;ve had the privilege of working on cutting-edge projects ranging from 
                    natural language processing systems that understand human emotions, to computer vision models 
                    that power autonomous vehicles. I believe in the transformative power of AI when applied 
                    thoughtfully and ethically.
                  </p>
                  <p>
                    Today, I help organizations navigate the complex landscape of AI implementation, from strategic 
                    planning to hands-on development. My goal is to make AI accessible and valuable for businesses 
                    of all sizes, while ensuring responsible and sustainable adoption.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-accent">50+</div>
                  <div className="text-sm text-primary-text/80">Projects Completed</div>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-accent">5+</div>
                  <div className="text-sm text-primary-text/80">Years Experience</div>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-accent">25+</div>
                  <div className="text-sm text-primary-text/80">Happy Clients</div>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-accent">300%</div>
                  <div className="text-sm text-primary-text/80">Avg ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-mono font-bold text-primary-accent text-center mb-12">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg hover-glow">
                <h3 className="text-lg font-bold text-primary-accent mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded-full"
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-mono font-bold text-primary-accent text-center mb-12">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="glass-effect p-8 rounded-lg hover-glow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-text">{exp.title}</h3>
                    <p className="text-primary-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-primary-text/60 font-mono">{exp.period}</span>
                </div>
                
                <p className="text-primary-text/80 mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold text-primary-text mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-primary-text/80 text-sm flex items-start">
                        <span className="text-primary-accent mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass-effect p-6 rounded-lg">
                    <h3 className="font-bold text-primary-text">{edu.degree}</h3>
                    <p className="text-primary-accent">{edu.school}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-primary-text/60 text-sm">{edu.focus}</span>
                      <span className="text-primary-text/60 text-sm font-mono">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-mono font-bold text-primary-accent mb-6">Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg flex items-center">
                    <span className="text-primary-accent mr-3">🎓</span>
                    <span className="text-primary-text/80 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-mono font-bold text-primary-accent mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
              Ready to bring AI innovation to your organization? I&apos;d love to discuss your challenges 
              and explore how we can achieve your goals together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consulting"
                className="bg-primary-accent text-primary-dark px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary-accent/90 transition-colors duration-300"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="glass-effect px-8 py-4 text-lg font-semibold text-primary-accent border-primary-accent/50 hover-glow"
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