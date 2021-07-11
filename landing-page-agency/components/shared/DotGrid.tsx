import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeType } from "utils/theme";

interface WraperProps {
  size: number;
  gridRowCount: number;
  gap: number;
}

const Wrapper = styled.div.attrs<WraperProps>(
  ({ size, gridRowCount, gap }) => ({
    style: {
      width: size,
      height: size,
      gridTemplate: `repeat(${gridRowCount}, ${gap}px) / repeat(${gridRowCount}, ${gap}px)`,
    },
  })
)<WraperProps>`
  display: grid;
`;

interface DotProps {
  size: number;
  dotThemeColor: keyof ThemeType["colors"];
}

const Dot = styled.div.attrs<DotProps>(({ size }) => ({
  style: {
    width: `${size}px`,
    height: `${size}px`,
  },
}))<DotProps>`
  border-radius: 50%;
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${({ theme, dotThemeColor }) =>
    theme.colors[dotThemeColor]};
`;

interface IDotGrid {
  boxSize?: number;
  dotSize?: number;
  gap?: number;
  dotThemeColor?: keyof ThemeType["colors"];
  [key: string]: any;
}

const DotGrid: React.FC<IDotGrid> = ({
  boxSize = 200,
  gap = 15,
  dotSize = 6,
  dotThemeColor = "primary",
  ...rest
}) => {
  const [grid, setGrid] = useState<null[]>([]);
  const [gridRowCount, setGridRowCount] = useState<number>(0);

  useEffect(() => {
    const rowCount = Math.floor(boxSize / gap);
    setGridRowCount(rowCount);
    setGrid(new Array(rowCount ** 2).fill(null));
  }, [boxSize, gap]);

  return (
    <div {...rest}>
      <Wrapper size={boxSize} gridRowCount={gridRowCount} gap={gap}>
        {grid.map((_, i) => (
          <Dot dotThemeColor={dotThemeColor} size={dotSize} key={i} />
        ))}
      </Wrapper>
    </div>
  );
};

export default DotGrid;
