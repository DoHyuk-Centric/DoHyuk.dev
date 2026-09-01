import styles from "./AdminTable.module.css";

export default function AdminTable({
  caption,
  head,
  children,
  className,
}: {
  caption: string;
  head: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.table} ${className ?? ""}`}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
