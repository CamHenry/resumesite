module.exports = {
  darkmode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
