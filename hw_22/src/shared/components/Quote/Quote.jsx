import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { quoteSelector } from "/src/redux/quoteSlice/quoteSelectors";
import { fetchQuoteThunk } from "/src/redux/quoteSlice/quoteThunks";

import styles from "./Quote.module.css";

export default function Quote() {
  const { quote, loading, error } = useSelector(quoteSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuoteThunk());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Random Quote Generator</h1>
      {quote && (
        <>
          <p className={styles.quote}>"{quote.q}"</p>
          <p className={styles.author}>- {quote.a}</p>
        </>
      )}
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
