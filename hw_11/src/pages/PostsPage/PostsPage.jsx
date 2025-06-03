import { Link } from "react-router-dom";

import Title from "/src/shared/components/Title/Title";

import { postsApi } from "/src/shared/api/postsApi";
import useFetch from "/src/shared/hooks/useFetch";

import styles from "./PostsPage.module.css";

export default function PostsPage() {
  const { state: posts, loading, error } = useFetch(postsApi);

  const elements = posts?.map(({ id, title }) => (
    <li key={id} className={styles.listItem}>
      <Link to={id}>
        {id} -- {title}
      </Link>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <Title>PostsPage</Title>
      {loading && <p>loading...</p>}
      {error && <p>{error.message || error.response.data.message}</p>}
      {posts?.length && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
}
