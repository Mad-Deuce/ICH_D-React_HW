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
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(() => {
    const filteredUsers = allUsers.filter(({ name }) =>
      name.toUpperCase().includes(filter.trim().toUpperCase())
    );
    setUsers(filteredUsers);
  }, [filter, allUsers]);

  useMemo(() => {
    filterUsers(filter);
  }, [filter, filterUsers]);

  useEffect(() => {
    filterUsers();
  }, [filter, filterUsers]);

  return (
    <Container>
      <Filter setFilter={setFilter} />
      <UserList users={users} />
    </Container>
  );
}
