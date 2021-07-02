import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface WraperProps {
  size: number;
  gridRowCount: number;
}

const Wrapper = styled.div.attrs<WraperProps>(({ size, gridRowCount }) => ({
  style: {
    width: size,
    height: size,
    gridTemplate: `repeat(${gridRowCount}, 1fr) / repeat(${gridRowCount}, 1fr)`,
  },
}))<WraperProps>`
  display: grid;
`;

interface DotProps {
  size: number;
  color?: string;
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
  background-color: ${({ theme, color }) => color || theme.colors.primary};
`;

interface IDotGrid {
  boxSize?: number;
  dotSize?: number;
  gap?: number;
  dotColor?: string;
  [key: string]: any;
}

const DotGrid: React.FC<IDotGrid> = ({
  boxSize = 200,
  gap = 15,
  dotSize = 6,
  dotColor,
  ...rest
}) => {
  const [grid, setGrid] = useState<null[]>([]);
  const [gridRowCount, setGridRowCount] = useState<number>(0);
  console.log(grid, gridRowCount);

  useEffect(() => {
    const rowCount = Math.floor(boxSize / gap);
    const gridSize = rowCount ** 2;
    setGridRowCount(rowCount);
    setGrid(new Array(gridSize).fill(null));
  }, [boxSize, gap]);

  return (
    <Wrapper size={boxSize} gridRowCount={gridRowCount} {...rest}>
      {grid.map((_, i) => (
        <Dot color={dotColor} size={dotSize} key={i} />
      ))}
    </Wrapper>
  );
};

export default DotGrid;
