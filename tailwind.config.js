const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
colors.blue["600"] = '#284268';
colors.gray["900"] = '#222';
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        highlight: ['Telemarines', 'Nunito', ...defaultTheme.fontFamily.sans]
      },
      grayscale: {
        50: '50%',
      },
      height: {
        'screen-web': 'calc(100vh - 4rem)',
      },
      minHeight: {
        'screen-web': 'calc(100vh - 4rem)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
