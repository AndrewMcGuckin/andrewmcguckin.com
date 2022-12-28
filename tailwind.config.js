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
        '4xl': '2560px',
        '5xl': '3840px',
      },
      colors: {
          black: {
            700: '#131313',
            800: '#232323',
            900: '#000000',
          },
          darkGrey: {
            700: '#313131',
            800: '#414141',
          },
          lightGrey: '#D6D6D6',
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
