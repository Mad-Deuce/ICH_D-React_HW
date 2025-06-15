import {useSelector, useDispatch } from "react-redux";

import { setFilterCreator } from "/src/redux/actionCreator.js";

import styles from "./Filter.module.css";

export default function Filter() {
  const filter = useSelector((store) => store.usersFilter);
  const dispatch = useDispatch();

  const setFilter = (payload) => {
    const action = setFilterCreator(payload);
    dispatch(action);
  };

  return (
      <input
        type="text"
        className={styles.input}
        value={filter}
        placeholder="Input username"
        onChange={() => setFilter(event.target.value)}
      />
  );
}
