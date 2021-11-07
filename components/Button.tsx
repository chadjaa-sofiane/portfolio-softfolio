import styles from "@scss/index.module.scss";

const AVAILABLE_COLORS = [];

function Button({ children, color = "primary" }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
