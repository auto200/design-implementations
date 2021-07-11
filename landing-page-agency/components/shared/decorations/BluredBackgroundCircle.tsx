import styled from "styled-components";

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary + "80"};
  backdrop-filter: blur(5px);
`;
interface Props {
  [key: string]: any;
}
const BluredBackgroundCircle: React.FC<Props> = ({ ...rest }) => {
  return <Circle {...rest} />;
};

export default BluredBackgroundCircle;
