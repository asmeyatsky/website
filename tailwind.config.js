/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark futuristic theme
        'primary-dark': '#000814',      // Deep space black
        'primary-secondary': '#001D3D', // Dark blue
        'primary-tertiary': '#003566',  // Medium blue
        'primary-text': '#E0E1DD',      // Off-white
        'primary-accent': '#00F5FF',    // Electric cyan
        // Neon colors for AI effects
        'neon-blue': '#00D4FF',
        'neon-purple': '#9D4EDD',
        'neon-green': '#39FF14',
        'neon-pink': '#FF0080',
        'neon-orange': '#FF6B35',
        'neon-yellow': '#FFFF00',
        // Matrix-style colors
        'matrix-green': '#00FF41',
        'ai-blue': '#4CC9F0',
        'cyber-purple': '#7209B7',
        'electric-blue': '#560BAD',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cyber: ['Orbitron', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-intense': 'glowIntense 1.5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'matrix-rain': 'matrixRain 10s linear infinite',
        'data-stream': 'dataStream 3s linear infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'circuit-pulse': 'circuitPulse 3s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite',
        'type-writer': 'typeWriter 3s steps(40, end)',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
        'rotate-3d': 'rotate3d 10s linear infinite',
        'particle-float': 'particleFloat 15s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF, 0 0 20px #00F5FF',
            textShadow: '0 0 5px #00F5FF, 0 0 10px #00F5FF'
          },
          '100%': { 
            boxShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF, 0 0 40px #00F5FF',
            textShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF'
          }
        },
        glowIntense: {
          '0%': { 
            boxShadow: '0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 30px #FF0080, 0 0 40px #FF0080',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 20px #FF0080, 0 0 40px #FF0080, 0 0 60px #FF0080, 0 0 80px #FF0080',
            filter: 'brightness(1.3)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.3)' }
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' }
        },
        dataStream: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }
        },
        circuitPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1', filter: 'brightness(1.5)' }
        },
        hologram: {
          '0%, 100%': { opacity: '0.8', filter: 'hue-rotate(0deg)' },
          '25%': { opacity: '0.9', filter: 'hue-rotate(90deg)' },
          '50%': { opacity: '1', filter: 'hue-rotate(180deg)' },
          '75%': { opacity: '0.9', filter: 'hue-rotate(270deg)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        typeWriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        rotate3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-30px) translateX(5px)' }
        }
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)',
        'glass-strong': 'blur(20px) saturate(200%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)',
        'circuit-pattern': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"%3E%3Cg fill=\"%2300F5FF\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 0h40v40H0z\"/%3E%3Cpath d=\"M0 0h20v20H0z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        'neon-blue': '0 0 20px #00D4FF, 0 0 40px #00D4FF, 0 0 60px #00D4FF',
        'neon-purple': '0 0 20px #9D4EDD, 0 0 40px #9D4EDD, 0 0 60px #9D4EDD',
        'neon-green': '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14',
        'neon-pink': '0 0 20px #FF0080, 0 0 40px #FF0080, 0 0 60px #FF0080',
        'cyber': '0 0 30px rgba(0, 245, 255, 0.5), inset 0 0 30px rgba(0, 245, 255, 0.1)',
        'hologram': '0 0 50px rgba(157, 78, 221, 0.6), 0 0 100px rgba(157, 78, 221, 0.4)',
      }
    },
  },
  plugins: [],
}