import styles from "./page.module.css";
import GeustbookSection from "./_components/GuestbookSection";

export default function Guestbook() {
  return (
    <div className={styles.guestbook}>
      <h1 className={styles.title}>방명록</h1>
      <GeustbookSection />
    </div>
  );
}
