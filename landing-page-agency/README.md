[<img src="./preview.png">](https://www.uplabs.com/posts/freebies-landing-page-agency)

# What i learned?

## Styled Components

#### Strict type annotations for styled components theme.

First create `theme.ts` file, theme object and mark it `as const` thanks to [typescript 3.4+](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) Then export it's type

```tsx
export const theme = {
  colors: {
    primary: "#14213D",
    secondary: "#FCA311",
  },
  fontSizes: {
    lg: "50px",
  },
} as const;

export type ThemeType = typeof theme;
```

Then create `styled.d.ts` file and extend `DefaultTheme`

```tsx
import "styled-components";
import { ThemeType } from "utils/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
```

Even further you can strongly type props of a React component to recive theme key

```tsx
interface ComponentProps {
  themedColor: keyof ThemeType["colors"];
}
```

Pass it to styled component and use it like so

```tsx
const StyledComponent = styled.div<{ themedColor: keyof ThemeType["colors"] }>`
  color: ${({ theme, themedColor }) => theme.colors[themedColor]};
`;
```

#### Whole example

```tsx
import styled from "styled-components";
import { ThemeType } from "utils/theme";

type Color = keyof ThemeType["colors"];

interface StyledTextProps {
  themedColor: Color;
}

const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme, themedColor }) => theme.colors[themedColor]};
`;

interface Props {
  themedColor?: Color;
}

const Text: React.FC<Props> = ({ themedColor = "primary", children }) => {
  return <StyledText themedColor={themedColor}>{children}</StyledText>;
};

export default Text;
```

#### [Transient props](https://styled-components.com/docs/api#transient-props) v5.1+

Prevent Styled Components from passing props to he DOM element

##### Problem:

```tsx
const StyledSquare = styled.div<{ size: number }>`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
`;

const Square = () => {
  return <StyledSquare size={50} />;
};
```

What gets rendered to the DOM:

```html
<div size="50"></div>
```

##### Solution:

```tsx
const StyledSquare = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size + "px"};
  height: ${({ $size }) => $size + "px"};
`;

const Square = () => {
  return <StyledSquare $size={50} />;
};
```

What gets rendered to the DOM:

```html
<div></div>
```

##### Conclusion

Use `$` in front of prop name to prevent it from being passed to the DOM element

## CSS

Apparently there is a property called [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) (whitch is not available in firefox yet). Can be used to blur content behind

"`>`" Selector becomes very handy to target nearest children and not make tedious styled components for every tag

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
