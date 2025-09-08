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
          '50': '#f0f5ff',
          '100': '#e0eaff',
          '200': '#c8d9ff',
          '300': '#a6c1ff',
          '400': '#81a8ff',
          '500': '#6688ff',
          '600': '#526eff',
          '700': '#475aff',
          '800': '#3a4bff',
          '900': '#323bff',
          '950': '#1e25ff',
          'dark': '#0a0b0f',
          'secondary': '#1a1b2e',
          'accent': '#6d28d9',
          'text': '#f1f5f9'
        },
        'accent': {
          'cyan': '#06b6d4',
          'purple': '#8b5cf6'
        },
        'neutral': {
          'medium': '#94a3b8'
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