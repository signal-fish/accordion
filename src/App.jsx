import styled from "styled-components"
import Questions from "./components/Questions"
import data from './data'
import {mobile, tablet} from './responsive'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Frequently Asked Questions</Title>
        <Questions questions={data}></Questions>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    height: "auto"
  })}
`

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  ${tablet({
    width: "90%",
  })}

  ${mobile({
    width: "100%",
  })}
`;

const Title = styled.h1`
  ${mobile({
    fontSize: "22px",
  })}
`;

export default App
