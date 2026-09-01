import ContainerHeader from "../../../_components/containerHeader/ContainerHeader";
import GuestbookTable from "./_components/GuestbookTable";
import { mockGuestbook } from "./_components/mockGuestbook";
import styles from "./page.module.css";

export default function Guestbook() {
  return (
    <div className={styles.page}>
      <ContainerHeader title="방명록" content={`${mockGuestbook.length}개`} />
      <GuestbookTable messages={mockGuestbook} />
    </div>
  );
}
