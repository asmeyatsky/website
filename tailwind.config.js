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
        'primary': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
          'dark': '#0f172a',
          'secondary': '#1e293b',
          'accent': '#3b82f6',
          'text': '#f8fafc'
        },
        'accent': {
          'blue': '#3b82f6',
          'slate': '#64748b',
          'gold': '#f59e0b'
        },
        'neutral': {
          'light': '#f1f5f9',
          'medium': '#64748b',
          'dark': '#334155'
        },
        'professional': {
          'navy': '#1e293b',
          'blue': '#3b82f6',
          'gray': '#64748b',
          'light': '#f8fafc'
        }
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'floating-element': 'floatingElement 3s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatingElement: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}