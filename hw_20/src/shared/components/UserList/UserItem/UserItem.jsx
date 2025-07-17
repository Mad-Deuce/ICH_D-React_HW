import styles from "./UserItem.module.css";

export default function UserItem({ user }) {
  return (
    <li className={styles.card}>
      {user.username} ({user.email})
    </li>
  );
}
