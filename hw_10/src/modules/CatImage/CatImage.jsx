import Button from "/src/shared/components/Button/Button";
import ImgView from "/src/shared/components/ImgView/ImgView";

import { useFetch } from "/src/shared/hooks/useFetch";

import styles from "./CatImage.module.css";

export default function CatImage() {
  const { state, loading, error, setUpdate } = useFetch(null);

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
          {error.message || error.response?.data?.message}
        </p>
      )}
    </div>
  );
}
