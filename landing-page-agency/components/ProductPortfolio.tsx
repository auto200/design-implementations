import styled from "styled-components";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import PillButton from "./shared/PillButton";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 180px;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const SliderControls = styled.div`
  margin-left: auto;
  display: flex;
  margin-right: 100px;
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

const Slider = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    margin-bottom: 25px;
  }
`;

const slidesData = [
  {
    imageSrc: "images/product-portfolio/pt_abcde.png",
    title: "PT.ABCDE",
    description: "Web Development",
  },
  {
    imageSrc: "images/product-portfolio/rose_wood.png",
    title: "Rose Wood",
    description: "SEO",
  },
  {
    imageSrc: "images/product-portfolio/cospace.png",
    title: "CoSpace",
    description: "Presentation Template",
  },
];

const ProductPortfolio: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <p>Our Product</p>
          <h2>We’ll let our work speak for itself</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
        <SliderControls>
          <SliderButton disabled={true}>
            <ImArrowLeft2 />
          </SliderButton>
          <SliderButton disabled={false}>
            <ImArrowRight2 />
          </SliderButton>
        </SliderControls>
      </div>
      <Slider>
        {slidesData.map(({ imageSrc, title, description }) => (
          <SliderItem key={imageSrc + title}>
            <img src={imageSrc} />
            <h2>{title}</h2>
            <p>{description}</p>
            <PillButton>See Details</PillButton>
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default ProductPortfolio;
