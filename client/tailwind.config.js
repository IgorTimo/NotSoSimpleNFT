module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './TW_components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-sidenav-layout': '272px 1fr',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
}
