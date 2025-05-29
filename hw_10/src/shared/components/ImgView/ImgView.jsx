import styles from "./ImgView.module.css";

export default function ImgView({ src = "/" }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={src} alt="no image" />
    </div>
  );
}
