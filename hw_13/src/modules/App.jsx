import Container from "/src/shared/components/Container/Container";
import Filter from "/src/shared/components/Filter/Filter";
import UserList from "/src/shared/components/UserList/UserList";
import UserItem from "/src/shared/components/UserItem/UserItem";

import "/src/shared/styles/styles.css";

function App() {
  return (
    <Container>
      <UserItem />
      <Filter />
      <UserList />
    </Container>
  );
}

export default App;
