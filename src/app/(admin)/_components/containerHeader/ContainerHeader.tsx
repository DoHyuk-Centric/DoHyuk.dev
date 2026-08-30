import styles from "./ContainerHeader.module.css";

export default function ContainerHeader({
  title,
  content,
  dateTime,
}: {
  title: string;
  content: string;
  dateTime?: string;
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {dateTime ? (
        <time className={styles.info} dateTime={dateTime}>
          {content}
        </time>
      ) : (
        <span className={styles.info}>{content}</span>
      )}
    </div>
  );
}
