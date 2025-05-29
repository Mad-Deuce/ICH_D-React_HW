import { useEffect, useState } from "react";
import axios from "axios";

import Button from "/src/shared/components/Button/Button";
import ImgView from "/src/shared/components/ImgView/ImgView";

import { fetchCatApi } from "/src/shared/api/catApi";

import styles from "./CatImage.module.css";

export default function CatImage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await fetchCatApi();
      setLoading(false);
      if (data) return setState(data);
      setError(error);
    };
    fetchData();
  }, [update]);

  return (
    <div className={styles.wrapper}>
      {!loading && (
        <>
          <ImgView src={state?.url} />
          <Button handleClick={() => setUpdate((prev) => !prev)}>
            Next image
          </Button>
        </>
      )}
      {loading && <p className={styles.loading}>loading...</p>}
      {error && (
        <p className={styles.error}>
          {error.message || error.response.data.message}
        </p>
      )}
    </div>
  );
}
