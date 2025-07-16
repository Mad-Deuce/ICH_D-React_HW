import styles from "./Button.module.css";

export default function Button({ className, children, handleClick, ...props }) {
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
