import styled from "styled-components";

const Wrapper = styled.div`
  height: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <h2>Client</h2>
      <p>Using Our Experience To Make Your Digital Experience Brighter</p>
      <div>
        <img src="client/client.png" />
      </div>
    </Wrapper>
  );
};

export default Hero;
