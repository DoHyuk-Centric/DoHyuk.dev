import styles from "./DashboardCard.module.css";

export default function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <span className={styles.value}>{value.toLocaleString()}</span>
    </div>
  );
}
