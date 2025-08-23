import Layout from '@/components/Layout'
import ParticleBackground from '@/components/ParticleBackground'
import MatrixRain from '@/components/MatrixRain'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Background Effects */}
      <ParticleBackground />
      <MatrixRain intensity={0.1} />
      
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-accent/15 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-float animation-delay-400"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-2xl animate-float animation-delay-600 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Circuit patterns */}
            <div className="absolute inset-0 circuit-bg opacity-20"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-20 text-center max-w-5xl mx-auto">
            {/* Terminal-style prefix */}
            <div className="mb-8 font-mono text-sm text-matrix-green animate-fade-in-up">
              <span className="terminal-cursor">root@ai-innovation:~$ ./initialize_neural_network</span>
            </div>
            
            {/* Main Title with Glitch Effect */}
            <h1 className="text-6xl md:text-9xl font-cyber font-black mb-8 leading-none">
              <div className="glitch gradient-text-cyber animate-zoom-in" data-text="AI NEXUS">
                AI NEXUS
              </div>
              <div className="text-2xl md:text-4xl font-mono text-primary-accent/80 mt-4 animate-fade-in-up animation-delay-300">
                NEURAL INNOVATION HUB
              </div>
            </h1>
            
            {/* Subtitle with typewriter effect */}
            <div className="mb-12 animate-fade-in-up animation-delay-500">
              <p className="text-lg md:text-xl text-primary-text/90 mb-4 max-w-3xl mx-auto leading-relaxed">
                <span className="neon-text-green">[SYSTEM ONLINE]</span> Deploying next-generation artificial intelligence solutions.
                Transforming possibilities into reality through advanced neural networks and quantum algorithms.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm font-mono">
                <span className="bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full border border-primary-accent/50">MACHINE_LEARNING</span>
                <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full border border-neon-purple/50">DEEP_NEURAL_NETS</span>
                <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full border border-neon-green/50">QUANTUM_AI</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-700">
              <Link 
                href="/projects" 
                className="group relative px-10 py-4 text-lg font-mono font-bold bg-gradient-to-r from-primary-accent to-ai-blue text-primary-dark rounded-lg hover-glow-intense overflow-hidden"
              >
                <span className="relative z-10">EXPLORE_PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-data-stream"></div>
              </Link>
              
              <Link 
                href="/consulting" 
                className="group relative px-10 py-4 text-lg font-mono font-bold border-2 border-primary-accent text-primary-accent rounded-lg hover-glow overflow-hidden"
              >
                <span className="relative z-10">INITIALIZE_CONSULTATION</span>
                <div className="absolute inset-0 bg-primary-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse animation-delay-200"></div>
              </Link>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-800">
              <div className="hologram-card p-4 text-center">
                <div className="font-cyber text-2xl neon-text mb-1">50+</div>
                <div className="font-mono text-xs text-primary-text/60">AI_MODELS</div>
              </div>
              <div className="hologram-card p-4 text-center">
                <div className="font-cyber text-2xl neon-text-pink mb-1">99.9%</div>
                <div className="font-mono text-xs text-primary-text/60">ACCURACY</div>
              </div>
              <div className="hologram-card p-4 text-center">
                <div className="font-cyber text-2xl neon-text-green mb-1">24/7</div>
                <div className="font-mono text-xs text-primary-text/60">UPTIME</div>
              </div>
              <div className="hologram-card p-4 text-center">
                <div className="font-cyber text-2xl gradient-text-cyber mb-1">∞</div>
                <div className="font-mono text-xs text-primary-text/60">POTENTIAL</div>
              </div>
            </div>
          </div>
          
          {/* Advanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1000">
            <div className="flex flex-col items-center space-y-2">
              <div className="font-mono text-xs text-primary-accent/60">SCROLL_TO_EXPLORE</div>
              <div className="w-8 h-12 border-2 border-primary-accent rounded-full flex justify-center relative overflow-hidden">
                <div className="w-1 h-3 bg-primary-accent rounded-full mt-2 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-accent/20 to-transparent animate-scan-line"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Feature Sections */}
        <section className="py-24 px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-cyber font-bold gradient-text-cyber mb-4">
              SYSTEM_MODULES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-neon-purple mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* AI Projects Module */}
            <div className="hologram-card p-8 hover-glow-intense group relative overflow-hidden animate-fade-in-up">
              <div className="absolute top-4 right-4 text-xs font-mono text-primary-accent/40">MODULE_01</div>
              <div className="text-6xl mb-6 neon-text group-hover:animate-glitch">🧠</div>
              <h3 className="text-2xl font-cyber font-bold mb-4 gradient-text">AI_PROJECTS.exe</h3>
              <p className="text-primary-text/80 mb-6">
                Advanced neural architectures and machine learning implementations. 
                Explore cutting-edge AI models from computer vision to natural language processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-primary-accent/20 text-primary-accent px-2 py-1 rounded border border-primary-accent/30">CNN</span>
                <span className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-1 rounded border border-neon-purple/30">TRANSFORMER</span>
                <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-1 rounded border border-neon-green/30">GAN</span>
              </div>
              <Link href="/projects" className="font-mono text-sm text-primary-accent hover:text-white transition-colors duration-300">
                ACCESS_MODULE →
              </Link>
            </div>
            
            {/* AI News Module */}
            <div className="hologram-card p-8 hover-glow-intense group relative overflow-hidden animate-fade-in-up animation-delay-200">
              <div className="absolute top-4 right-4 text-xs font-mono text-primary-accent/40">MODULE_02</div>
              <div className="text-6xl mb-6 neon-text-pink group-hover:animate-glitch">📡</div>
              <h3 className="text-2xl font-cyber font-bold mb-4 gradient-text">NEURAL_NEWS.feed</h3>
              <p className="text-primary-text/80 mb-6">
                Real-time intelligence on AI breakthroughs, research publications, and industry developments. 
                Stay synchronized with the rapid evolution of artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neon-pink/20 text-neon-pink px-2 py-1 rounded border border-neon-pink/30">RESEARCH</span>
                <span className="text-xs bg-ai-blue/20 text-ai-blue px-2 py-1 rounded border border-ai-blue/30">TRENDS</span>
                <span className="text-xs bg-neon-orange/20 text-neon-orange px-2 py-1 rounded border border-neon-orange/30">UPDATES</span>
              </div>
              <Link href="/news" className="font-mono text-sm text-primary-accent hover:text-white transition-colors duration-300">
                SYNC_FEED →
              </Link>
            </div>
            
            {/* Consulting Module */}
            <div className="hologram-card p-8 hover-glow-intense group relative overflow-hidden animate-fade-in-up animation-delay-400">
              <div className="absolute top-4 right-4 text-xs font-mono text-primary-accent/40">MODULE_03</div>
              <div className="text-6xl mb-6 neon-text-green group-hover:animate-glitch">⚡</div>
              <h3 className="text-2xl font-cyber font-bold mb-4 gradient-text">CONSULTATION.protocol</h3>
              <p className="text-primary-text/80 mb-6">
                Strategic AI implementation services for enterprises. Deploy intelligent solutions 
                that transform business operations and unlock competitive advantages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-1 rounded border border-neon-green/30">STRATEGY</span>
                <span className="text-xs bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded border border-cyber-purple/30">DEPLOYMENT</span>
                <span className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded border border-electric-blue/30">OPTIMIZATION</span>
              </div>
              <Link href="/consulting" className="font-mono text-sm text-primary-accent hover:text-white transition-colors duration-300">
                INITIATE_PROTOCOL →
              </Link>
            </div>
          </div>
          
          {/* Terminal Output */}
          <div className="max-w-4xl mx-auto mt-16 animate-fade-in-up animation-delay-600">
            <div className="terminal-text p-6">
              <div className="font-mono text-sm">
                <div className="text-matrix-green">$ ./status_check --system=ai_nexus</div>
                <div className="text-primary-text/60 mt-2">
                  <span className="text-neon-green">✓</span> Neural networks: ONLINE<br/>
                  <span className="text-neon-green">✓</span> Quantum processors: ACTIVE<br/>
                  <span className="text-neon-green">✓</span> Learning algorithms: OPTIMIZED<br/>
                  <span className="text-primary-accent">→</span> System ready for deployment<span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}