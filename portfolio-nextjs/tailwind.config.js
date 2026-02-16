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
          blue: '#00f0ff',
          purple: '#b829ff',
          pink: '#ff006b',
          green: '#00ff88',
          yellow: '#ffea00',
        },
        dark: {
          100: '#0a0a0f',
          200: '#12121a',
          300: '#1a1a2e',
          400: '#16213e',
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(184, 41, 255, 0.5), 0 0 40px rgba(184, 41, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 107, 0.5), 0 0 40px rgba(255, 0, 107, 0.3)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slideIn': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 10px currentColor)' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
