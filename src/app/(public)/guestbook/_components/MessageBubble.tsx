import MockupAvarta from "../../_components/avarta/mockupAvarta";
import styles from "./MessageBubble.module.css";

export default function MessageBubble({
  author,
  createdAt,
  content,
  isMine,
}: {
  author: string;
  createdAt: string;
  content: string;
  isMine: boolean;
}) {
  const stateClass = isMine ? styles.mine : styles.other;

  return (
    <div className={`${styles.message} ${stateClass}`}>
      <MockupAvarta />
      <div className={`${styles.textSection} ${stateClass}`}>
        <div className={`${styles.header} ${stateClass}`}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>{createdAt}</span>
        </div>
        <p className={`${styles.messageSection} ${stateClass}`}>{content}</p>
      </div>
    </div>
  );
}
