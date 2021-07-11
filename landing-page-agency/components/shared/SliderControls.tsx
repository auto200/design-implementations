import styled from "styled-components";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const Wrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const SliderButton = styled.button<{ disabled: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 40%;
  opacity: ${({ disabled }) => disabled && 0.5};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  backDisabled?: boolean;
  onBackClick: () => void;
  forwardDisabled?: boolean;
  onForwardClick: () => void;
  [key: string]: any;
}

const SliderControls: React.FC<Props> = ({
  backDisabled = true,
  onBackClick,
  forwardDisabled = false,
  onForwardClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <SliderButton
        disabled={backDisabled}
        onClick={() => !backDisabled && onBackClick()}
      >
        <ImArrowLeft2 />
      </SliderButton>
      <SliderButton
        disabled={forwardDisabled}
        onClick={() => !backDisabled && onForwardClick()}
      >
        <ImArrowRight2 />
      </SliderButton>
    </Wrapper>
  );
};

export default SliderControls;
