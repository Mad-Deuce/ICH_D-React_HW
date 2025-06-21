import User from "/src/shared/components/User/User";
import UserForm from "/src/shared/components/UserForm/UserForm";
import Title from "/src/shared/components/Title/Title";
import Container from "/src/shared/components/Container/Container";

import "/src/shared/styles/styles.css";

export default function App() {
  return (
    <Container>
      <Title >User Profile</Title>
      <User />
      <UserForm />
    </Container>
  );
}
