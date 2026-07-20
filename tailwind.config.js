/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de marca Easy Flow / G3N — tema claro
        ink: '#0A1C2E',
        'ink-deep': '#081523',
        navy: '#16314F',
        blue: '#1C6FA8',
        teal: '#0D9488',
        'teal-dark': '#0B7A6E',
        'teal-soft': '#5EEAD4',
        paper: '#F6FAFB',
        'paper-2': '#ECF3F5',
        // Texto sobre fondo claro (tokens usados sobre bandas navy van con white/*)
        text: '#0E2235',
        'text-dim': '#5A7488',
        'ink-text': '#0E2235',
        'ink-text-dim': '#5A7488',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 50px -30px rgba(14,34,53,.18)',
        card: '0 10px 30px -18px rgba(14,34,53,.14)',
      },
      borderRadius: {
        brand: '22px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        isoFloat: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.015)' },
        },
        cue: {
          '0%': { transform: 'scaleY(.2)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.1%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(.2)', transformOrigin: 'bottom' },
        },
        dash: {
          to: { strokeDashoffset: '-400' },
        },
      },
      animation: {
        'iso-float': 'isoFloat 6s cubic-bezier(.2,.7,.2,1) infinite',
        cue: 'cue 2.2s cubic-bezier(.2,.7,.2,1) infinite',
        dash: 'dash 9s linear infinite',
      },
    },
  },
  plugins: [],
};
