import styles from "./Button.module.css";

export default function Button({ children, handleClick, className, ...props }) {
  return (
    <button
      {...props}
      className={`${styles.button} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
