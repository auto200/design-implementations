import styled from "styled-components";

const Wrapper = styled.div`
  height: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;

  div {
    margin-top: 20px;
  }
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <h2>Client</h2>
      <p>Using Our Experience To Make Your Digital Experience Brighter</p>
      <div>
        <img src="images/client/client.png" />
      </div>
    </Wrapper>
  );
};

export default Hero;
