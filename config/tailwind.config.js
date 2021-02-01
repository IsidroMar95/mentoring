const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '425px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      primary: {
        50: '#f3f4f5',
        100: '#e7e9ec',
        200: '#c4c9cf',
        300: '#a1a8b1',
        400: '#5a6777',
        500: '#13263d',
        600: '#112237',
        700: '#0e1d2e',
        800: '#0b1725',
        900: '#09131e'
      },
      secondary: {
        50: '#f6fbfa',
        100: '#eef6f5',
        200: '#d4e9e7',
        300: '#bbdbd8',
        400: '#87c1bb',
        500: '#54a69e',
        600: '#4c958e',
        700: '#3f7d77',
        800: '#32645f',
        900: '#29514d'
      },
      gray: colors.gray,
      red: colors.red,
      green: colors.green
    },
    fontFamily: {
      raleway: ['Raleway', 'Arial', 'sans-serif', 'system-ui', '-apple-system']
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled']
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // https://github.com/tailwindlabs/tailwindcss-line-clamp
    require('@tailwindcss/line-clamp'),
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require('@tailwindcss/aspect-ratio')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
