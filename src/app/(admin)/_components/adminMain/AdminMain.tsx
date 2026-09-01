import styles from "./AdminMain.module.css";

export default function AdminMain({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
