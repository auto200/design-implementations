import styled from "styled-components";
import DotGrid from "components/shared/decorations/DotGrid";

interface IService {
  iconSrc: string;
  title: string;
  description: string;
}

const services: IService[] = [
  {
    iconSrc: "images/services/web-and-mobile.png",
    title: "Web & Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    iconSrc: "images/services/design-services.png",
    title: "Design Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    iconSrc: "images/services/seo.png",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    iconSrc: "images/services/security-tester.png",
    title: "Security Tester",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Wrapper = styled.div`
  position: relative;
  padding-top: 45px;
  padding-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
`;

const RightPanel = styled.div`
  margin: 25px;
  margin-left: 70px;
  width: 60%;

  div {
    margin-top: 30px;
  }

  h2 {
    margin-top: 25px;
    margin-bottom: 25px;
    max-width: 500px;
  }
`;

const Service = styled.div`
  width: 50%;
  display: inline-block;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
    }

    img {
      margin-right: 15px;
    }
  }

  p {
    margin-top: 20px;
    width: 80%;
  }
`;

const FloatingCircle = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  left: -75px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 10;
`;

const FloatingDotGrid = styled(DotGrid)`
  position: absolute;
  top: 18px;
  left: 410px;
  z-index: 10;
`;

const Hero: React.FC = () => {
  return (
    <>
      <Wrapper>
        <FloatingCircle />
        <FloatingDotGrid />

        <div>
          <img src="images/services/high-five.png" />
        </div>
        <RightPanel>
          <p>Who We Help</p>
          <h2>Specific challenges require specific solutions</h2>
          <p>Some of the industries our digital agency specialises in</p>
          <div>
            {services.map(({ iconSrc, title, description }) => (
              <Service key={iconSrc + title}>
                <div>
                  <img src={iconSrc} />
                  <span>{title}</span>
                </div>
                <p>{description}</p>
              </Service>
            ))}
          </div>
        </RightPanel>
      </Wrapper>
    </>
  );
};

export default Hero;
