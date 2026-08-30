import Link from "next/link";
import styles from "./Title.module.css";

export default function Title({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className={styles.title}>
      <p className={styles.heading}>{title}</p>
      <Link href={link} className={styles.more}>
        더보기
      </Link>
    </div>
  );
}
