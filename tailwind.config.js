/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`index.html`],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#2C3379',
        dark: '#0f172a',
        grey: '#64748b'
      }
    },
    screens: {
      'lg': '1320px',
      'md': '800px'
    }
  },
  plugins: [],
}

