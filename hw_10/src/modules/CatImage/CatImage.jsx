import { useEffect, useState } from "react";
import axios from "axios";

import Button from "/src/shared/components/Button/Button";
import ImgView from "/src/shared/components/ImgView/ImgView";

import styles from "./CatImage.module.css";

export default function CatImage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          console.log(response.data[0]);
          setState(response.data[0].url);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(setLoading(false));
    };
    fetchData();
  }, [update]);

  const handleClick = () => {
    setUpdate((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      {!loading && (
        <>
          <ImgView src={state} />
          <Button handleClick={handleClick}>Next image</Button>
        </>
      )}
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
