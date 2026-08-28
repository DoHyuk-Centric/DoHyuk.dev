import styles from "./components.module.css";

export default function EmptyState({ message }: { message: string }) {
  return <p className={styles.empty}>{message}</p>;
}
