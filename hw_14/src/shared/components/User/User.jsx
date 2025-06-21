import { useSelector } from "react-redux";
import { selectUser } from "/src/redux/user/user-selectors.js";

import Title from "/src/shared/components/Title/Title";

import styles from "./User.module.css";

export default function User() {
  const { username, status } = useSelector(selectUser);

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title}>User Information</Title>
      <p className={styles.text}>Name: {username}</p>
      <p className={styles.text}>Status: {status}</p>
    </div>
  );
}
