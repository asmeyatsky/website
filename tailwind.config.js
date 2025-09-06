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
        // Futuristic Professional AI Theme
        'primary-dark': '#0A0F1F',       // Deep space blue
        'primary-secondary': '#161D31',  // Dark blue
        'primary-tertiary': '#222B45',   // Medium blue
        'primary-text': '#EDF2F7',       // Light gray-white
        'primary-accent': '#4361EE',     // Vibrant blue
        'accent-cyan': '#4CC9F0',        // Bright cyan
        'accent-purple': '#7209B7',      // Deep purple
        'accent-teal': '#06D6A0',        // Vibrant teal
        'accent-indigo': '#5E60CE',      // Indigo
        // Neutrals
        'neutral-light': '#E2E8F0',
        'neutral-medium': '#94A3B8',
        'neutral-dark': '#475569',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Subtle futuristic animations
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropFilter: {
        'glass': 'blur(12px) saturate(120%)',
        'glass-strong': 'blur(16px) saturate(150%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-futuristic': 'linear-gradient(135deg, #0A0F1F 0%, #161D31 50%, #0A0F1F 100%)',
      },
      boxShadow: {
        'futuristic': '0 4px 20px rgba(67, 97, 238, 0.15), 0 2px 8px rgba(67, 97, 238, 0.1)',
        'futuristic-hover': '0 6px 25px rgba(67, 97, 238, 0.25), 0 4px 12px rgba(67, 97, 238, 0.15)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 8px 15px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}