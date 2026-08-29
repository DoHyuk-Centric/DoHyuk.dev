import styles from "./ListPost.module.css";

export default function ListPostItem({
  createdAt,
  title,
  views,
}: {
  createdAt: string;
  title: string;
  views: number;
}) {
  return (
    <div className={styles.item}>
      <time className={styles.date} dateTime={createdAt}>
        {createdAt}
      </time>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.views}>
        {views}
        <span className={styles.unit}>회</span>
      </span>
    </div>
  );
}
