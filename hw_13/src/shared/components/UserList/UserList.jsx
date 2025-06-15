import { useSelector, useDispatch } from "react-redux";

import { setFilterCreator, setUserCreator } from "/src/redux/actionCreator.js";

import styles from "./UserList.module.css";

export default function UserList() {
  const users = useSelector((store) => store.users);
  const filter = useSelector((store) => store.usersFilter);
  const dispatch = useDispatch();

  const handleClick = (user) => {
    dispatch(setUserCreator(user));
    dispatch(setFilterCreator(""));
  };

  const elements = users
    .filter((item) => item.toUpperCase().includes(filter.trim().toUpperCase()))
    .slice(0, 10)
    .map((item, idx) => (
      <li key={idx} className={styles.user} onClick={() => handleClick(item)}>
        {item}
      </li>
    ));

  return (
    <>
      {filter.trim().length > 0 && elements.length > 0 && (
        <div className={styles.wrapper}>
          <ul className={styles.list}>{elements}</ul>
        </div>
      )}
    </>
  );
}
