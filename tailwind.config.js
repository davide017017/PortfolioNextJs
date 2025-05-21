// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],

  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem', // Esempio di dimensione personalizzata
      },
      colors: {
        'forest-night': {
          // Gradazioni per forest-night
          50: '#030f14', // Molto chiaro
          100: '#010a0f', // Più chiaro
          200: '#00070a', // Colore base (leggermente scurito per coerenza)
          300: '#000407',
          400: '#000204',
          500: '#000102',
          600: '#000001',
          700: '#000000', // Quasi nero
          800: '#000000',
          900: '#000000', // Nero
        },
        'dark-olive': {
          // Gradazioni per dark-olive
          50: '#383b2b',
          100: '#303323',
          200: '#282b1b', // Colore base
          300: '#202313',
          400: '#181b0b',
          500: '#101303',
          600: '#080b00',
          700: '#000300',
          800: '#000000',
          900: '#000000',
        },
        'forest-green': {
          50: '#384b38',
          100: '#304330',
          200: '#283b28', // Colore base
          300: '#203320',
          400: '#182b18',
          500: '#102310',
          600: '#081b08',
          700: '#001300',
          800: '#000b00',
          900: '#000300',
        },
        'sage-green': {
          50: '#5e7a6b',
          100: '#567263',
          200: '#4e6a5b', // Colore base
          300: '#466253',
          400: '#3e5a4b',
          500: '#365243',
          600: '#2e4a3b',
          700: '#264233',
          800: '#1e3a2b',
          900: '#163223',
        },
        'off-white': {
          50: '#f5f4f0',
          100: '#ecebe2',
          200: '#e0ded1', // Colore base
          300: '#d5d2c0',
          400: '#cac6af',
          500: '#bebaa0',
          600: '#b3ae91',
          700: '#a8a282',
          800: '#9d9673',
          900: '#928a64',
        },
        'golden-brown': {
          50: '#b69d5a',
          100: '#ae9552',
          200: '#a68d4a', // Colore base
          300: '#9e8542',
          400: '#967d3a',
          500: '#8e7532',
          600: '#866d2a',
          700: '#7e6522',
          800: '#765d1a',
          900: '#6e5512',
        },
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
