/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue:   '#00d4ff',   // electric cyan  — primary accent
          purple: '#a855f7',   // vivid purple   — secondary
          pink:   '#f472b6',   // hot pink       — tertiary
          green:  '#34d399',   // emerald        — success/gpa
          yellow: '#fbbf24',   // amber          — star ratings
        },
        dark: {
          100: '#060b17',   // deepest bg
          200: '#0d1427',   // section bg
          300: '#111d35',   // elevated card
          400: '#1a2a4a',   // border / divider
        },
      },
      boxShadow: {
        // Vivid neon glow shadows
        'neon-blue':   '0 0 18px rgba(0, 212, 255, 0.55),  0 0 40px rgba(0, 212, 255, 0.25)',
        'neon-purple': '0 0 18px rgba(168, 85, 247, 0.55), 0 0 40px rgba(168, 85, 247, 0.25)',
        'neon-pink':   '0 0 18px rgba(244, 114, 182, 0.55),0 0 40px rgba(244, 114, 182, 0.25)',
        'neon-green':  '0 0 18px rgba(52, 211, 153, 0.55), 0 0 40px rgba(52, 211, 153, 0.25)',
      },
      animation: {
        'glow':    'glow 2s ease-in-out infinite alternate',
        'float':   'float 3s ease-in-out infinite',
        'slideIn': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%':   { filter: 'brightness(1) drop-shadow(0 0 8px currentColor)' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 18px currentColor)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
