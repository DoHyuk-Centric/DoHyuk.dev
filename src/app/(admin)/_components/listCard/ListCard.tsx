import styles from "./ListCard.module.css";

export default function ListCard({
  status,
  heading,
  body,
  meta,
  actions,
}: {
  status?: React.ReactNode;
  heading: React.ReactNode;
  body?: React.ReactNode;
  meta?: React.ReactNode;
  actions: React.ReactNode;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.headingGroup}>
          {status}
          <span className={styles.heading}>{heading}</span>
        </div>
        <div className={styles.metaGroup}>
          {meta}
          <div className={styles.actions}>{actions}</div>
        </div>
      </div>
      {body ? <p className={styles.body}>{body}</p> : null}
    </div>
  );
}
