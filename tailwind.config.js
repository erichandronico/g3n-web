/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de marca Easy Flow / G3N
        ink: '#0A1C2E',
        'ink-deep': '#081523',
        navy: '#16314F',
        blue: '#1C6FA8',
        teal: '#2DD4BF',
        'teal-bright': '#39E0CB',
        'teal-light': '#6FF0DD',
        paper: '#F6FAFB',
        'paper-2': '#ECF3F5',
        // Texto sobre fondo oscuro / claro
        text: '#E8F1F7',
        'text-dim': '#9FB6C9',
        'ink-text': '#0E2235',
        'ink-text-dim': '#5A7488',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 30px 80px -30px rgba(8,21,35,.55)',
        glow: '0 14px 36px -12px rgba(45,212,191,.7)',
      },
      borderRadius: {
        brand: '22px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        float: {
          to: { transform: 'translate3d(40px,30px,0) scale(1.12)' },
        },
        isoFloat: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-12px) scale(1.015)' },
        },
        isoGlow: {
          '0%,100%': { opacity: '.35', transform: 'scale(.9)' },
          '50%': { opacity: '.8', transform: 'scale(1.08)' },
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
        sheen: {
          '0%': { backgroundPosition: '140% 0' },
          '60%,100%': { backgroundPosition: '-40% 0' },
        },
      },
      animation: {
        float: 'float 14s cubic-bezier(.2,.7,.2,1) infinite alternate',
        'float-slow': 'float 18s cubic-bezier(.2,.7,.2,1) infinite alternate-reverse',
        'iso-float': 'isoFloat 6s cubic-bezier(.2,.7,.2,1) infinite',
        'iso-glow': 'isoGlow 4.5s cubic-bezier(.2,.7,.2,1) infinite',
        cue: 'cue 2.2s cubic-bezier(.2,.7,.2,1) infinite',
        dash: 'dash 9s linear infinite',
        sheen: 'sheen 6s cubic-bezier(.2,.7,.2,1) infinite',
      },
    },
  },
  plugins: [],
};
