import Container from "/src/shared/components/Container/Container";
import Title from "/src/shared/components/Title/Title";
import Questions from "/src/shared/components/Questions/Questions";
import Result from "/src/shared/components/Result/Result";

import "/src/shared/styles/styles.css";

function App() {
  return (
    <Container>
      <Title>Questionnaire</Title>
      <Questions />
      <Result />
    </Container>
  );
}

export default App;
