module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screen: {
      'mobile': '375px',
      'desktop': '1440px'
    },
    extend: { 
      colors: {
        'orange': '#FF7D1A'
      },
      fontFamily: {
        sans: ['"Kumbh Sans"', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
