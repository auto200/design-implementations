import styled from "styled-components";
import Image from "next/image";
import Logo from "public/images/Logo.png";

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navigation = styled.nav`
  min-width: 370px;
  font-weight: bold;
  span {
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;

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
        <span>About</span>
        <span>Services</span>
        <span>Client</span>
        <span>Blog</span>
        <span>Contact</span>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
