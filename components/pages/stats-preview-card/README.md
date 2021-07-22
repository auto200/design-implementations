[https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62)

## Tailwind css seems fun

Good thing to do if you import custom font is to add `defaultFonts` as fallback

```js
//tailwind.config.js

const defaultFonts = require("tailwindcss/defaultTheme").fontFamily.sans;

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultFonts],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```
