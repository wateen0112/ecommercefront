/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm':{'min':'360px'
    ,'max':'590px'
    },
      'md':{'min':'600px',
    'max':'640'},
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(16, minmax(0, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }}
  },
  plugins: [],
}