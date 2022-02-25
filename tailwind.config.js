module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-introduction': "url('/src/assets/images/main/introduction.gif')",
        'project-surglab': "url('/src/assets/images/project/surglab.jpg')",
        'project-runly': "url('/src/assets/images/project/runly.png')",
      }
    },
    colors: {
      black: '#202020',
      black_lighter: '#353535',
      grey: '#4F4F4F',
      grey_lighter: '#B1B1B1',
      white_darker: '#F5F5F5',
      white: '#FFFFFF',
      blue: '#1E68F9'
    },
  },
  plugins: [],
}
