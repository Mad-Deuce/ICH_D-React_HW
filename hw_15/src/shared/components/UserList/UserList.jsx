import styles from "./UserList.module.css";

export default function UserList({ users = [] }) {
  const elements = users.map(({ name, id }) => (
    <li key={id} className={styles.user}>
      {name}
    </li>
  ));

  return (
    <>
      {elements.length > 0 && (
        <div className={styles.wrapper}>
          <ul className={styles.list}>{elements}</ul>
        </div>
      )}
    </>
  );
}
