export const theme = {
  colors: {
    background: "#FAFAFA",
    primary: "#14213D",
    secondary: "#FCA311",
    text: "#303948",
    text2: "#59616D",
  },
} as const;

export type ThemeType = typeof theme;
