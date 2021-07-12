import styled from "styled-components";
import Image from "next/image";
import JoeZImg from "public/images/testimontials/joe_z.png";
import SliderControls from "./shared/SliderControls";
import DotGrid from "./shared/DotGrid";
import BluredBackgroundCircle from "./shared/decorations/BluredBackgroundCircle";

const Wrapper = styled.div`
  margin-top: 250px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  & > div {
    position: relative;
  }
`;

const RectangleBehindImage = styled.div`
  position: absolute;
  top: 150px;
  left: -50px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary + "80"};
  z-index: -1;
`;

const DotGridBehindImage = styled(DotGrid)`
  position: absolute;
  top: -64px;
  right: -59px;
  z-index: -1;
`;

const DotGridInfrontImage = styled(DotGrid)`
  position: absolute;
  top: -7px;
  right: -19px;
`;

const Circle = styled(BluredBackgroundCircle)`
  position: absolute;
  bottom: 100px;
  right: -5px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 140px;
  margin-left: 150px;

  p {
    font-size: 24px;
    margin-top: 15px;
    max-width: 650px;
  }

  p span {
    font-weight: bold;
  }

  & > div {
    height: 100%;
    display: flex;
    align-self: flex-end;
    align-items: flex-end;
  }
`;

const Testimonials: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <div>
          <Image src={JoeZImg} />
          <RectangleBehindImage />
          <DotGridBehindImage />
          <DotGridInfrontImage dotThemeColor="secondary" boxSize={100} />
          <Circle />
        </div>
      </Left>
      <Right>
        <h2>Testimonials by them</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <span>-Joe Z</span>
        </p>
        <div>
          <SliderControls
            backDisabled={false}
            onBackClick={() => {}}
            onForwardClick={() => {}}
          />
        </div>
      </Right>
    </Wrapper>
  );
};

export default Testimonials;
