/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        /* ── Espresso dark palette ── */
        espresso: {
          950: '#0F0E0E',   // primary bg
          900: '#181615',   // surface
          800: '#1F1C1A',   // elevated card
          700: '#2A2624',   // border solid
          600: '#3A3532',   // lighter border
        },
        /* ── Amber / bronze accent ── */
        amber: {
          DEFAULT: '#D97706',
          light:   '#E2A85C',
          pale:    '#F5C87A',
          glow:    'rgba(217,119,6,0.12)',
        },
        /* ── Text palette ── */
        warm: {
          100: '#F5F2EB',   // headings
          200: '#E8E2D9',
          300: '#C7BFB5',   // body
          400: '#9E978F',   // muted
          500: '#706860',
        },
        /* ── Legacy neon kept for any residual refs ── */
        neon: {
          blue:   '#D97706',
          purple: '#E2A85C',
          pink:   '#F5C87A',
          green:  '#D97706',
          yellow: '#E2A85C',
        },
        dark: {
          100: '#0F0E0E',
          200: '#181615',
          300: '#1F1C1A',
          400: '#2A2624',
        },
      },
      boxShadow: {
        'amber-sm':  '0 0 12px rgba(217,119,6,0.18)',
        'amber':     '0 0 25px -5px rgba(217,119,6,0.12)',
        'amber-lg':  '0 0 40px rgba(217,119,6,0.22)',
        'card':      '0 8px 32px rgba(0,0,0,0.35)',
        'card-hover':'0 20px 48px rgba(0,0,0,0.4)',
      },
      animation: {
        'glow':         'glow 2s ease-in-out infinite alternate',
        'float':        'float 3s ease-in-out infinite',
        'slideIn':      'slideIn 0.3s ease-out',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-amber':  'pulse-amber 2s ease-in-out infinite',
        'marquee':      'marquee 28s linear infinite',
        'marquee-rev':  'marquee-reverse 32s linear infinite',
      },
      keyframes: {
        glow: {
          '0%':   { filter: 'brightness(1) drop-shadow(0 0 8px currentColor)' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 18px currentColor)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
