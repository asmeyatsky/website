import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/5 rounded-full blur-3xl floating-element animation-delay-100"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent-cyan/5 rounded-full blur-3xl floating-element animation-delay-200"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl floating-element animation-delay-300"></div>
          </div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10">
            {/* Main Title */}
            <h1 className="professional-title">
              <span className="gradient-text-cyber">AI Nexus</span>
            </h1>
            
            {/* Subtitle */}
            <p className="professional-subtitle">
              Professional artificial intelligence solutions for the agentic era. 
              Transform your business with cutting-edge AI systems that think, act, and adapt.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/projects" 
                className="ai-button px-8 py-4"
              >
                Explore Solutions
              </Link>
              
              <Link 
                href="/consulting" 
                className="glass-effect px-8 py-4 text-lg font-semibold text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 rounded-xl"
              >
                Start Consulting
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-effect p-6 rounded-xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-neutral-medium text-sm">AI Projects</div>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-neutral-medium text-sm">Accuracy</div>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-neutral-medium text-sm">Support</div>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-neutral-medium text-sm">Potential</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Sections */}
        <section className="section-padding bg-gradient-futuristic">
          <div className="content-container">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="section-header">Agentic AI Solutions</h2>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                Next-generation AI systems that perceive, reason, and act autonomously
              </p>
            </div>

            <div className="card-grid">
              {/* AI Reasoning Module */}
              <div className="hologram-card p-8 hover-glow-intense">
                <div className="ai-icon">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="section-subheader">Cognitive Reasoning</h3>
                <p className="text-primary-text/80 mb-6">
                  Advanced neural architectures that understand context, infer meaning, and solve complex problems with human-like reasoning.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="futuristic-badge">Neural Networks</span>
                  <span className="futuristic-badge">Inference</span>
                </div>
                <Link href="/projects" className="font-semibold text-accent-cyan hover:text-white transition-colors duration-300">
                  Learn More →
                </Link>
              </div>
              
              {/* AI Perception Module */}
              <div className="hologram-card p-8 hover-glow-intense">
                <div className="ai-icon">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="section-subheader">Multi-Modal Perception</h3>
                <p className="text-primary-text/80 mb-6">
                  Systems that see, hear, and understand the world through advanced computer vision, NLP, and sensory processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="futuristic-badge">Computer Vision</span>
                  <span className="futuristic-badge">NLP</span>
                </div>
                <Link href="/projects" className="font-semibold text-accent-cyan hover:text-white transition-colors duration-300">
                  Explore Tech →
                </Link>
              </div>
              
              {/* AI Action Module */}
              <div className="hologram-card p-8 hover-glow-intense">
                <div className="ai-icon">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="section-subheader">Autonomous Action</h3>
                <p className="text-primary-text/80 mb-6">
                  Intelligent agents that make decisions and execute actions in complex environments with minimal human intervention.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="futuristic-badge">Reinforcement</span>
                  <span className="futuristic-badge">Automation</span>
                </div>
                <Link href="/consulting" className="font-semibold text-accent-cyan hover:text-white transition-colors duration-300">
                  Deploy Agents →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section className="section-padding">
          <div className="content-container">
            <div className="text-center mb-16">
              <h2 className="section-header">Enterprise AI Stack</h2>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                Cutting-edge technologies powering our agentic AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-effect p-6 rounded-xl text-center hover-glow">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-semibold text-primary-text mb-2">Deep Learning</h3>
                <p className="text-neutral-medium text-sm">Neural architectures</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center hover-glow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="font-semibold text-primary-text mb-2">Cloud-Native</h3>
                <p className="text-neutral-medium text-sm">Scalable infrastructure</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center hover-glow">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-primary-text mb-2">Secure AI</h3>
                <p className="text-neutral-medium text-sm">Privacy-first models</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center hover-glow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-semibold text-primary-text mb-2">Continuous</h3>
                <p className="text-neutral-medium text-sm">Learning systems</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}