import { useEffect, useState } from "react";

import { getUserApi } from "/src/shared/api/users-api";

import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(null);
        setLoading(true);
        const data = await getUserApi();
        setUser(data);
      } catch (error) {
        setError({
          status: error.status,
          message: error.response?.data.message || error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [update]);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.wrapper}>
          <p className={styles.loading}>Loading....</p>
        </div>
      )}
      {error && (
        <div className={styles.wrapper}>
          <p className={styles.error}>{error.message}</p>
        </div>
      )}
      {user && (
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={user.picture.large} alt="" />
          </div>
          <h1
            className={styles.fullName}
          >{`${user.name.first} ${user.name.last}`}</h1>
          <p className={styles.email}>{`Email: ${user.email}`}</p>
          <p className={styles.phone}>{`Phone: ${user.phone}`}</p>

          <button
            className={styles.btn}
            type="button"
            onClick={() => setUpdate((prev) => !prev)}
          >
            Load New User
          </button>
        </div>
      )}
    </div>
  );
}
