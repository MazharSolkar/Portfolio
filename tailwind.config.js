/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        puslseEffect: {
          '0%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        puslseEffectDelay: {
          '0%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0,0,0)',
          },
          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },
          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },
          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },
          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
          },
          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },
          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(1.390625deg)',
          },
          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(0.1953125deg)',
          },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        puslseEffect: 'puslseEffect 4s linear infinite ',
        puslseEffectDelay: 'puslseEffect 4s linear 2s infinite',
        jello: 'jello 2s',
        heartBeat: 'heartBeat 1s infinite',
      },
    },
  },
  plugins: [],
};
