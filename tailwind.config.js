module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '500px',
      sm:  '750px',
      md: '950px',
      lg: '1200px',
      xl: '2000px',
    },
    keyframes: {
      from: {
        opacity: 0,
        scale: 0.5,
      },
      to: {
        opacity: 1,
        scale: 1,
      },
    },
  },
  plugins: [],
}

