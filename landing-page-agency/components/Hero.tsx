import styled from "styled-components";
import Image from "next/image";
import background from "public/images/hero/background.png";
import person from "public/images/hero/person.png";
import PillButton from "./shared/PillButton";

const Wrapper = styled.div`
  position: relative;
  height: 707px;
  border-radius: 35px;
  overflow: hidden;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  z-index: -1;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
`;

const Text = styled.div`
  align-self: center;
  margin-left: 76px;

  p {
    max-width: 471px;
    margin-top: 35px;
    margin-bottom: 40px;
  }
`;

const PersonWrapper = styled.div`
  margin: auto 0 0 auto;
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Background>
        <Image src={background} />
      </Background>
      <Text>
        <h1>Go digital with us</h1>
        <p>
          We have designed hundreds of websites and helped improve their online
          performance through SEO, SEM and Social Media Marketing
        </p>
        <PillButton variant="light">See Portfolio</PillButton>
      </Text>
      <PersonWrapper>
        <Image src={person} />
      </PersonWrapper>
    </Wrapper>
  );
};

export default Hero;
