import styled from "styled-components"
import Question from "../Question"

const Questions = ({questions}) => {
  return (
    <Container>
      {
        questions.map((question) => {
          return <Question question={question} />;
        })
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`

export default Questions
