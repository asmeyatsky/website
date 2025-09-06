# Gemini AI Website Development Plan

This document consolidates the development plans from CLAUDE.md and QWEN.md.

---

# AI-Themed Website Development Plan (from CLAUDE.md)

## Project Overview
Building a futuristic AI-themed website with React/Next.js, featuring an AI projects showcase, news blog, consulting services, and admin panel. The site will be deployed on Google Cloud Run with a custom Squarespace domain.

## Development Order & Tasks

### Phase 1: Foundation Setup
1. **Project Initialization**
   - Initialize Next.js project with TypeScript
   - Set up project structure and configuration
   - Install core dependencies

2. **Styling & Design System**
   - Configure Tailwind CSS
   - Set up futuristic color palette (#0A192F, #112240, #CCD6F6, #64FFDA)
   - Create design tokens and utility classes
   - Implement glassmorphism and glow effects

3. **Core Layout Components**
   - Responsive navigation bar
   - Footer with social links
   - Page layout wrapper
   - Loading states and transitions

### Phase 2: Core Pages Development
4. **Homepage**
   - Hero section with compelling headline
   - Brief intro sections (Projects, News, Consulting)
   - Futuristic animations and micro-interactions

5. **AI Projects Showcase**
   - Project gallery with cards (image, title, description)
   - Filtering/sorting functionality (by technology, date)
   - Individual project detail pages with tech stacks

6. **AI News Blog**
   - Blog listing page with recent articles
   - Individual article pages with social sharing
   - Reading time estimates and metadata

7. **Consulting Services**
   - Services overview with methodology
   - Clear call-to-action ("Book a Free Consultation")
   - Process timeline visualization

8. **About & Contact Pages**
   - Personal background and expertise section
   - Contact form with validation
   - Social media integration

### Phase 3: Dynamic Features
9. **Newsletter Integration**
   - Reusable newsletter signup component
   - Email service integration (SendGrid/Mailchimp)
   - Subscription confirmation flow

10. **Headless CMS Integration**
    - Choose and set up CMS (Strapi/Contentful/Sanity)
    - Content models for projects and articles
    - API integration for dynamic content

11. **Admin Panel**
    - Secure CMS dashboard
    - CRUD operations for projects and articles
    - Newsletter subscriber management

### Phase 4: Performance & Optimization
12. **Static Site Generation**
    - Configure Next.js SSG for all pages
    - Dynamic page generation for projects/articles
    - Build-time content fetching

13. **Performance Optimization**
    - Image optimization (WebP/AVIF formats)
    - Code splitting and lazy loading
    - React performance optimizations (memo, useCallback)

14. **SEO & Analytics**
    - Meta tags and structured data
    - Sitemap generation
    - Google Lighthouse optimization

### Phase 5: Deployment & Infrastructure
15. **Containerization**
    - Create multi-stage Dockerfile
    - Optimize container size with Nginx
    - Environment configuration

16. **Google Cloud Setup**
    - Configure Google Cloud Build
    - Set up Artifact Registry
    - Create Cloud Run service

17. **Domain Configuration**
    - Custom domain mapping in Cloud Run
    - DNS configuration for Squarespace domain
    - SSL certificate setup

18. **CI/CD Pipeline**
    - Automated builds on code changes
    - Environment-specific deployments
    - Rollback strategies

## Key Design Principles
- **Minimalism**: Ample white/dark space, clean layouts
- **Futuristic Aesthetics**: Glassmorphism, glowing elements, geometric shapes
- **Performance**: Sub-3s load times, 90+ Lighthouse scores
- **Accessibility**: WCAG 2.1 compliance, keyboard navigation
- **Mobile-First**: Responsive design for all screen sizes

## Technology Stack
- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS
- **CMS**: Strapi (self-hosted) or Contentful (cloud)
- **Email**: SendGrid for transactional emails
- **Hosting**: Google Cloud Run
- **Database**: PostgreSQL (for CMS)
- **Analytics**: Google Analytics 4

## Success Metrics
- Page load speed < 3 seconds
- Lighthouse performance score > 90
- Mobile responsiveness across all devices
- Form submission success rate > 95%
- Newsletter signup conversion rate tracking

## Commands to Remember
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Git & Security
git commit -m "..."        # Triggers security scan + auto-sync
./setup-remote.sh <url>    # Connect to GitHub repository
git commit --no-verify     # Bypass hooks (emergency only!)

# Deployment
docker build -t ai-website .
gcloud run deploy --image gcr.io/PROJECT-ID/ai-website
```

## Security Features 🔒

### Pre-commit Security Scanner
- ✅ Scans for API keys, tokens, passwords, and secrets
- ✅ Blocks suspicious files (.pem, .key, .env)
- ✅ Runs linting and type checking
- ✅ POSIX-compliant shell script

### Post-commit Auto-sync
- 🚀 Automatically pushes commits to remote
- 🌐 Checks internet connectivity
- 🔄 Handles branch creation and conflicts
- 📊 Provides detailed sync status

### Setup Instructions
1. Create GitHub repository
2. Run: `./setup-remote.sh https://github.com/username/repo.git`
3. Commits now auto-sync to remote!

See SECURITY.md for full documentation.

---

# AI Nexus Website Development Guide (from QWEN.md)

## Project Overview
This document outlines the development approach for the AI Nexus website, a professional yet futuristic platform focused on agentic AI solutions. The site combines clean, modern design with subtle futuristic elements to create a professional presence that reflects the cutting-edge nature of our AI services.

## Technology Stack
- **Framework**: Next.js 15.5.0 (App Router)
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 3.4.17 with custom configurations
- **Components**: React Server Components and Client Components
- **Deployment**: Vercel (recommended)

## Design Philosophy
### Professional Futurism
- Clean, minimalist aesthetic with subtle futuristic touches
- Professional color palette: Deep blues, cyans, and purples
- Glass-morphism effects for depth and modernity
- Smooth animations and transitions for enhanced UX
- Responsive design for all device sizes

### Agentic AI Focus
- Content emphasizes autonomous AI systems that perceive, reason, and act
- Google-inspired Material Design icons for AI concepts
- Clear differentiation between traditional AI and agentic AI
- Case studies and examples focused on autonomous systems

## Component Structure
```
src/
├── app/                 # App router pages
│   ├── page.tsx         # Home page
│   ├── about/page.tsx   # About page
│   ├── consulting/page.tsx # Consulting services
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Page footer
│   └── Layout.tsx       # Page layout wrapper
├── styles/              # Global styles and Tailwind config
│   └── globals.css      # Global CSS utilities
└── lib/                 # Utility functions
```

## Styling System
### Color Palette
- Primary Dark: #0A0F1F (Deep space blue)
- Primary Accent: #4361EE (Vibrant blue)
- Accent Cyan: #4CC9F0 (Bright cyan)
- Accent Purple: #7209B7 (Deep purple)
- Text: #EDF2F7 (Light gray-white)

### Custom CSS Classes
Global CSS utilities defined in `src/styles/globals.css`:
- `.glass-effect` - Frosted glass panels
- `.hologram-card` - Elevated content cards with hover effects
- `.ai-button` - Primary call-to-action buttons
- `.gradient-text` - Text with gradient coloring
- `.hover-glow` - Subtle hover animations
- `.ai-icon` - Agentic AI icon containers with gradient backgrounds

### Animations
- Fade-in effects for content
- Floating elements for subtle motion
- Smooth transitions for interactive elements
- Pulse animations for active states

## Agentic AI Icon System
We use a custom icon system inspired by Google's Material Design principles:
- 🧠 Cognitive Reasoning - Brain icon for reasoning capabilities
- 👁️ Multi-Modal Perception - Eye icon for perception systems
- ⚡ Autonomous Action - Bolt icon for action execution
- 🔬 Deep Learning - Microscope for neural architectures
- 🌐 Cloud-Native - Globe for distributed systems
- 🔒 Secure AI - Lock for privacy features
- 🔄 Continuous - Arrows for learning systems

Each icon is contained within an `.ai-icon` class that provides:
- Circular gradient background
- Subtle shadow
- Consistent sizing
- Visual hierarchy

## Key Pages

### Home Page
- Hero section with value proposition
- Agentic AI solutions showcase with custom icons
- Technology stack overview with Google-inspired icons
- Statistics and social proof

### Consulting Page
- Service offerings with detailed descriptions
- Process methodology with step-by-step visualization
- Client testimonials
- Contact options

### About Page
- Professional background and expertise
- Skills and certifications
- Career timeline
- Personal philosophy

## Responsive Design
All components are designed to work across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1440px+)

Breakpoints are defined in Tailwind configuration.

## Performance Optimization
- Server-side rendering for fast initial loads
- Code splitting for reduced bundle sizes
- Image optimization through Next.js Image component
- Font optimization with `next/font`
- Lazy loading for non-critical components

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

## Deployment
### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env.local` file with:
```
# Add any required environment variables here
```

## Future Enhancements
1. Integration with Contentful or similar CMS
2. Advanced AI-powered content personalization
3. Dark/light mode toggle
4. Multi-language support
5. Enhanced animation library (Framer Motion)
6. Performance monitoring with Sentry or similar
7. Analytics integration (Google Analytics, Plausible)
8. Interactive AI demos
9. Client portal for project tracking
10. Resource library with downloadable assets

## Brand Guidelines
### Logo Usage
- Primary logo: "AI" in a gradient box with "Nexus" text
- Color variations for different backgrounds
- Minimum size requirements

### Typography
- Primary: Inter font family
- Monospace: JetBrains Mono for technical content
- Hierarchy maintained through size and weight

### Imagery
- Abstract technical concepts
- Professional headshots
- Data visualization
- UI mockups

## Maintenance
- Regular dependency updates
- Performance monitoring
- Security audits
- Content updates
- Browser compatibility testing

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request
5. Code review and merge

## Support
For issues or questions, contact the development team through GitHub issues.
