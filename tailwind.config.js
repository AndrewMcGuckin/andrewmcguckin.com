module.exports = {
  content: {
    relative: true,
    files: [
      "./public-dev/**/*.{html,js}",
      "./public-dev/*.{html,js}"
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '3.5xl': '2336px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      colors: {
          darkGrey: {
            800: '#313131',
          },
          trueGray: {
            300: '#D6D6D6',
            700: '#414141',
            800: '#232323',
            900: '#131313',
          },
          custColour: {
            100: '#D1D1D1',
            200: '#EBEBEB',
          },
          darkCustColour: {
            100: '333333',
            200: '636363',
          },
          linkedinBlue: '#0077B5',
      }
    },
  },
  variants: {},
  plugin: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
