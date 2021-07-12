import styled from "styled-components";
import Image from "next/image";
import person from "public/images/hero/person.png";
import PillButton from "components/shared/PillButton";

const Wrapper = styled.div`
  position: relative;
  height: 707px;
  border-radius: 35px;
  background: url("images/hero/background.png");
  overflow: hidden;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  z-index: -1;
`;

const Left = styled.div`
  flex: 1;
  align-self: center;
  margin-left: 76px;

  p {
    max-width: 471px;
    margin-top: 35px;
    margin-bottom: 40px;
  }
`;

const Right = styled.div`
  flex: 1;
  margin: auto 0 0 auto;
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <h1>Go digital with us</h1>
        <p>
          We have designed hundreds of websites and helped improve their online
          performance through SEO, SEM and Social Media Marketing
        </p>
        <PillButton variant="light">See Portfolio</PillButton>
      </Left>
      <Right>
        <Image src={person} />
      </Right>
    </Wrapper>
  );
};

export default Hero;
