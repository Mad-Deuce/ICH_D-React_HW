import { useSelector } from "react-redux";
import { selectUsers } from "/src/redux/users/usersSelectors";

import UserItem from "./UserItem/UserItem";

import styles from "./UserList.module.css";

export default function UserList() {
  const users = useSelector(selectUsers);

  const elements = users.map((user) => (
    <UserItem key={user.id} user={user}></UserItem>
  ));

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.title}>User List</h1>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
}
