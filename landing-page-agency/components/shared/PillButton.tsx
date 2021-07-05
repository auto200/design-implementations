import styled from "styled-components";

type Variant = "dark" | "light";

const Button = styled.button<{ variant: Variant }>`
  all: unset;
  border-radius: 9999px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  padding: 15px 35px 20px 35px;
  color: ${({ theme, variant }) =>
    variant === "dark" ? theme.colors.white : theme.colors.text};
  background-color: ${({ theme, variant }) =>
    variant === "dark" ? theme.colors.text : theme.colors.white};
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
