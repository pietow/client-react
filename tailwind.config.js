// import './src/assets/font/header/Knewave-Regular.ttf'

module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'best-white': '#FFFDFA',
      'light-orange': '#F6D7A7',
      'lemon-meringue': '#F6EABE',
      'aero-blue': '#C8E3D4',
      'morning-sky-blue': '#87AAAA',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'apricot': {
        'bright': '#fff6e8',
        'normal': '#F6D7A7',
        'dark': '#ffb648'
      },
      'yellow': {
        'bright': '#fffae8',
        'normal': '#F6EABE',
        'dark': '#ffe482'
      },
      'pistachio': {
        'bright': '#dfebe4',
        'normal': '#C8E3D4',
        'dark': '#b6f0d0'
      },
      'teal': {
        'bright': '#9eb1b1',
        'normal': '#87AAAA',
        'dark': '#66acac'
      },

    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/img/toa-heftiba-Bm-N1gh4AUs-unsplash.jpg')",
        logo: "url('/src/assets/img/logo-big.png')",
      }),
      fontFamily: {
        zeyada: ["zeyada", "cursive"]
      },
    },
  plugins: []
  }
}
