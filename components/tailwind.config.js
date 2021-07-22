const defaultFonts = require("tailwindcss/defaultTheme").fontFamily.sans;

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //Stats Preview Card
        "SPC-bg": "hsl(233, 47%, 7%)",
        "SPC-card-bg": "hsl(244, 38%, 16%)",
        "SPC-accent": "hsl(277, 64%, 61%)",
        "SPC-text-primary": "hsl(0, 0%, 100%)",
        "SPC-text-secondary": "hsla(0, 0%, 100%, 0.75)",
        "SPC-text-tertiary": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", ...defaultFonts],
        "lexend-deca": ["Lexend Deca", ...defaultFonts],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
