import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { quoteSelector } from "/src/redux/quoteSlice/quoteSelectors";
import { fetchQuoteThunk } from "/src/redux/quoteSlice/quoteThunks";

import styles from "./Quote.module.css";

export default function Quote() {
  const { quote, loading, error } = useSelector(quoteSelector);
  // console.log(error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuoteThunk());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {quote && <p>quote...</p>}
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
