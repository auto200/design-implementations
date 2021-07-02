export const theme = {
  colors: {
    white: "#FFFFFF",
    background: "#FAFAFA",
    primary: "#14213D",
    secondary: "#FCA311",
    text: "#303948",
    text2: "#59616D",
  },
  fontSizes: {
    h1: "50px",
    h2: "36px",
    regular: "18px",
  },
} as const;

export type ThemeType = typeof theme;
