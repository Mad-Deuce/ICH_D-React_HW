import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "/src/redux/users/users-selectors.js";

import Container from "/src/shared/components/Container/Container";
import Filter from "/src/shared/components/Filter/Filter";
import UserList from "/src/shared/components/UserList/UserList";

import "/src/shared/styles/styles.css";

export default function App() {
  const allUsers = useSelector(selectAllUsers);
  const [users, setUsers] = useState(allUsers);
  const [filterValue, setFilterValue] = useState("");

  const filterUsers = useCallback(() => {
    const filteredUsers = allUsers.filter(({ name }) =>
      name.toUpperCase().includes(filterValue.trim().toUpperCase())
    );
    setUsers(filteredUsers);
  }, [filterValue, allUsers]);

  useMemo(() => {
    filterUsers(filterValue);
  }, [filterValue, filterUsers]);

  useEffect(() => {
    filterUsers();
  }, [filterValue, filterUsers]);

  return (
    <Container>
      <Filter setFilter={setFilterValue} />
      <UserList users={users} />
    </Container>
  );
}
