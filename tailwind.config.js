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
        'dark': '#66acac',
        'footer': '#008080'
      },

    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/img/toa-heftiba-Bm-N1gh4AUs-unsplash.jpg')",
        logo: "url('/src/assets/img/logo-big.png')",
        login: "url('/src/assets/img/alejandro-cartagena-eqzcs-hNvN0-unsplash.jpg')",
        backpacker: "url('/src/assets/img/mukuko-studio-tPKQwYHy8q4-unsplash.jpg')",
        register: "url('/src/assets/img/tobias-tullius-pb7gfl7_Ni8-unsplash.jpg')",
        dashboard: "url('/src/assets/img/s-migaj-Yui5vfKHuzs-unsplash.jpg')"
      }),
      fontFamily: {
        zeyada: ["zeyada", "cursive"],
        noto: ["noto", "ui-sans-serif"]
      },
    },
  plugins: []
  }
}
