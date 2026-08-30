import styles from "./AdminTable.module.css";

export default function AdminTable({
  caption,
  head,
  children,
}: {
  caption: string;
  head: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>{caption}</caption>
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
