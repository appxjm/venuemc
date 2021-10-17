module.exports = {
    purge: ['./src/**/*.{js,jsx}', './public/index.html'],
    darkMode: 'media',
    theme: {
      extend: {
        backgroundImage: {
          'splash': "url('./images/venuemc-landing.png')",
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }