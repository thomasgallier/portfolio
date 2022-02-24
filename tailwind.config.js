module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-1': "url('/src/assets/images/main/1.jpg')",
        'main-2': "url('/src/assets/images/main/2.jpg')",
        'main-3': "url('/src/assets/images/main/3.jpg')",
      }
    },
    colors: {
      black: '#000000',
      black_lighter: '#131211',
      grey: '#202020',
      grey_lighter: '#959595',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
