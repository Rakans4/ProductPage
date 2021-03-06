module.exports = {
  prefix: '',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class',
  theme: {
    extend: { 
      screens: {
        'mobile': {'max': '1023px'}
      },
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
        'ver-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'black' : 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        sans: ['"Kumbh Sans"', 'sans-serif']
      },
      minWidth: {
        '1': '1rem',
      },
      width: {
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
