import Link from "next/link";
import styles from "./ContentLists.module.css";

export default function ContentLists<T>({
  items,
  count,
  renderItem,
  getHref,
}: {
  items: T[];
  count: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  getHref: (item: T, index: number) => string;
}) {
  return (
    <ul className={styles.list}>
      {items.slice(0, count).map((item, index) => (
        <li key={index} className={styles.row}>
          <Link href={getHref(item, index)} className={styles.link}>
            {renderItem(item, index)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
