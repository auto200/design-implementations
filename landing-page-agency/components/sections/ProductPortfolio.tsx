import styled from "styled-components";
import PillButton from "components/shared/PillButton";
import SliderControls from "components/shared/SliderControls";

const Wrapper = styled.div`
  margin-top: 180px;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const PortfolioSliderControls = styled(SliderControls)`
  margin-left: auto;
  margin-right: 100px;
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
        <PortfolioSliderControls />
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
