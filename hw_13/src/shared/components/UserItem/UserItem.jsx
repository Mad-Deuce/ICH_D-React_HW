import { useSelector } from "react-redux";

import styles from "./UserItem.module.css";

export default function UserItem() {
  const user = useSelector((store) => store.user);

  return <div className={styles.wrapper}>{user}</div>;
}
