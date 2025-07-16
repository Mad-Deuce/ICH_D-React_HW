import { useParams, useNavigate } from "react-router-dom";

import Title from "/src/shared/components/Title/Title";
import Button from "/src/shared/components/Button/Button";

import { singlePostApi } from "/src/shared/api/postsApi";
import useFetch from "/src/shared/hooks/useFetch";

import styles from "./SinglePostPage.module.css";

export default function SinglePostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: post, loading, error } = useFetch(() => singlePostApi(id));

  const handleClick = () => {
    navigate("/posts");
  };

  return (
    <div className={styles.wrapper}>
      {loading && <p>loading...</p>}
      {error && <p>{error.message || error.response.data.message}</p>}
      {post && (
        <>
          <Title>{post.title}</Title>
          <p className={styles.content}>{post.content}</p>
          <p className={styles.author}>{post.author}</p>
        </>
      )}
      <Button type="button" handleClick={handleClick}>
        Back
      </Button>
    </div>
  );
}
