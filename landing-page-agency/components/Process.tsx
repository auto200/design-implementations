import styled from "styled-components";
import DotGrid from "./shared/DotGrid";
import PillButton from "./shared/PillButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  & > div {
    width: 50%;
    height: 100%;
  }
`;

const Left = styled.div`
  & > div {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      width: 85%;
    }

    button {
      padding-left: 50px;
    }
  }
`;

const DetailsButton = styled(PillButton)`
  padding-left: 50px;
  padding-right: 50px;
`;

const Right = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);

  & > div {
    position: relative;
    margin: 11px;
    width: 250px;
    height: 260px;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .floating-circle {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      /* backdrop-filter: blur(10px) opacity(50%)
        drop-shadow(0 0 0 ${({ theme }) => theme.colors.secondary}); */
      background-color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }

    .semi-circle {
      position: absolute;
      top: 100px;
      left: -55px;
      width: 100px;
      height: 50px;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 0.5;
    }
  }
`;

const OrangeDotGrid = styled(DotGrid)`
  position: absolute;
  z-index: -1;
  bottom: -75px;
  right: -45px;
  border-radius: 25px;
  overflow: hidden;
`;

const Process: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <div>
          <h2>How does our process work?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <DetailsButton>See Details</DetailsButton>
      </Left>
      <Right>
        <div>
          <div>
            <img src="images/process/planning.png" alt="planning" />
          </div>
        </div>
        <div>
          <img src="images/process/research.png" alt="research" />
          <div className="floating-circle" />
        </div>
        <div>
          <img src="images/process/consulting.png" alt="consulting" />
          <div className="semi-circle" />
        </div>
        <div>
          <img src="images/process/development.png" alt="development" />
          <OrangeDotGrid dotColor="#FCA311" />
        </div>
      </Right>
    </Wrapper>
  );
};

export default Process;
