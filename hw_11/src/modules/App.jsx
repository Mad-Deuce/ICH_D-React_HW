import Navigation from "/src/modules/Navigation";
import Navbar from "/src/modules/Navbar/Navbar";
import Container from "/src/shared/components/Container/Container";
import Main from "/src/shared/components/Main/Main";

import "/src/shared/styles/styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Navigation />
        </Container>
      </Main>
    </>
  );
}
