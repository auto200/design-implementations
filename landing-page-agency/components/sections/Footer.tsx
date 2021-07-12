import styled from "styled-components";
import DotGrid from "components/shared/decorations/DotGrid";

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 150px;
  background-image: url("images/footer/background.png");
  background-size: cover;
  border-radius: 35px;

  padding: 70px 25px 30px 25px;

  & > div {
    display: flex;
  }
`;

const Left = styled.div`
  flex: 2;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 150px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  padding-top: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    line-height: 40px;
    margin-right: 64px;

    p {
      font-weight: bold;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Bottom = styled.div`
  margin-top: auto;
`;

const DotsGrid = styled(DotGrid)`
  position: absolute;
  bottom: 70px;
  left: -40px;
`;

const Rectangles = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const RectAndDots = styled.img`
  position: absolute;
  top: 70px;
  right: 0;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <Left>
          <img src="images/footer/logo.png" alt="logo" />
          <div>
            <p>Go digital with us</p>
            <div>
              50 Raya Building
              <p>Call us: 123-456-678</p>
            </div>
          </div>
        </Left>
        <Right>
          <div>
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <p>Social Media</p>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </Right>
      </div>
      <Bottom>Copyright &copy; 2021 Steelthemes. All Rights Reserved.</Bottom>
      <DotsGrid boxSize={90} />
      <Rectangles src="images/footer/rectangles.png" />
      <RectAndDots src="images/footer/rect_and_dots.png" />
    </Wrapper>
  );
};

export default Footer;
