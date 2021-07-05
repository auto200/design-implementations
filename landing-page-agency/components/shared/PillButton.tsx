import styled from "styled-components";

type Variant = "dark" | "light";

const Button = styled.button<{ variant: Variant }>`
  all: unset;
  border-radius: 9999px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  padding: 15px 35px 20px 35px;
  text-align: center;
  color: ${({ theme, variant }) =>
    variant === "dark" ? theme.colors.white : theme.colors.text};
  background-color: ${({ theme, variant }) =>
    variant === "dark" ? theme.colors.primary : theme.colors.white};

  transition: text-shadow 0.2s ease;

  &:hover {
    text-shadow: ${({ theme, variant }) =>
        variant === "dark" ? theme.colors.white : theme.colors.text}
      0 2px 3px;
  }
`;

interface Props {
  variant?: Variant;
  [key: string]: any;
}

const PillButton: React.FC<Props> = ({
  variant = "dark",
  children,
  ...rest
}) => {
  return (
    <Button variant={variant} {...rest}>
      {children}
    </Button>
  );
};

export default PillButton;
