import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { mobile } from "../../responsive";

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Container key={question.id}>
      <Wrapper>
        <Ques>{question.ques}</Ques>
        <ButtonWrapper>
          <Button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </Button>
        </ButtonWrapper>
      </Wrapper>
      <Ans>{showInfo && question.ans}</Ans>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  ${mobile({
    width: "90%"
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;

  ${mobile({
    margin: "5px 15px 0 15px",
  })}
`;

const Ques = styled.h2`
  flex: 5;

  ${mobile({
    fontSize: "18px",
  })}
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  margin-left: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    width: "30px",
    height: "30px"
  })}
`;

const Ans = styled.p`
  margin: 0 30px 20px 30px;
  font-size: 20px;

  ${mobile({
    fontSize: "14px",
  margin: "0 15px 20px 15px",

  })}
`;
export default Question;
