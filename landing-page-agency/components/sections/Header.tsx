import styled from "styled-components";
import Image from "next/image";
import Logo from "public/images/Logo.png";

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Navigation = styled.nav`
  min-width: 370px;
  font-weight: bold;
  a {
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    transition: background-color 0.2s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Image src={Logo} />
      <Navigation>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Client</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
