import ReactionsNav from "./_components/ReactionsNav";
import AdminMain from "../../_components/adminMain/AdminMain";
import { mockComments } from "./comments/_components/mockComments";
import { mockGuestbook } from "./guestbook/_components/mockGuestbook";
import styles from "./layout.module.css";

export default function ReactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <ReactionsNav
        commentCount={mockComments.length}
        guestbookCount={mockGuestbook.length}
      />
      <AdminMain>{children}</AdminMain>
    </div>
  );
}
