import styles from "./ListPost.module.css";

export default function ListPostItem({
  createdAt,
  title,
}: {
  createdAt: string;
  title: string;
}) {
  return (
    <div className={styles.item}>
      <time className={styles.date} dateTime={createdAt}>
        {createdAt}
      </time>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
