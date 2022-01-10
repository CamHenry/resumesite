module.exports = {
  darkmode: 'class',
  purge: ['./src/**/*.tsx'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
