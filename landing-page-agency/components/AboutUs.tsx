import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 85%;
  height: 326px;
  border-radius: 35px;
  margin-top: -90px;
  background: ${({ theme }) =>
    `url(images/about-us-pattern.png), ${theme.colors.primary}`};
  background-size: cover;
  z-index: 10;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 40px;
  }

  div {
    margin: 45px;
  }

  img {
    margin-right: 60px;
    margin-bottom: 30px;
    color: red;
    align-self: flex-end;
    border-radius: 50%;
    padding: 15px;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const AboutUs: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <h2>We are experienced</h2>
        <p>
          We have been around for a long time since 2010, thousands of products
          have been created, we are always here to provide new innovations for
          you
        </p>
      </div>
      <Link href="#">
        <img src="icons/arrow-right.svg" />
      </Link>
    </Wrapper>
  );
};

export default AboutUs;
