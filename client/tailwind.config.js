module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './TW_components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      gallery: ['Helvetica'],
    },

    extend: {
      gridTemplateColumns: {
        'custom-sidenav-layout': '272px 1fr',
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primaryGray: '#E5E5E5',
        white: '#FFFFFF',
        purpleLigth: '#E8E1F4',
        purplePrimary: '#311B92',
        darkPurplePrimary: '#23175E',
        darkPurpleLight: '#988DC8',
      },
    },
  },
  plugins: [],
}
