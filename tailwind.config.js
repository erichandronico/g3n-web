/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens de marca G3N — estilo corporativo
        ink: '#1B2126',
        navy: '#16314F',
        blue: '#1C6FA8',
        'blue-dark': '#155A88',
        'blue-soft': '#82BEE8',
        teal: '#0D9488',
        gray: '#F0F2F4',
        'gray-2': '#E7EAED',
        text: '#1F2933',
        'text-dim': '#5C6873',
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
