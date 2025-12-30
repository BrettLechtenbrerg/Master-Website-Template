import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // MACC Purple/Orange Glassmorphic Palette
        purple: {
          deep: '#490096',
          DEFAULT: '#7c3aed',
          light: '#a855f7',
          glow: '#c084fc',
        },
        orange: {
          DEFAULT: '#ff7a00',
          light: '#ffb347',
          glow: '#ffd89b',
        },
        // Background colors
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'aurora': 'aurora 15s ease-in-out infinite',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) rotate(5deg) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 5%) rotate(-5deg) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -50px) scale(1.05)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(30px, 50px) scale(1.02)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
