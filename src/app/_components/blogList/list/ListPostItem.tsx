import Link from "next/link";
import styles from "./ListPost.module.css";

export default function ListPostItem({
  slug,
  createdAt,
  title,
}: {
  slug: string;
  createdAt: string;
  title: string;
}) {
  const year = new Date(createdAt).getFullYear();

  return (
    <Link href={`/${year}/${slug}`} className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <time className={styles.date} dateTime={createdAt}>
        {createdAt}
      </time>
    </Link>
  );
}
