"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ReactionsNav.module.css";

export default function ReactionsNav({
  commentCount,
  guestbookCount,
}: {
  commentCount: number;
  guestbookCount: number;
}) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="반응 메뉴">
      <p className={styles.label}>반응</p>
      <Link
        href="/admin/reactions/comments"
        className={pathname === "/admin/reactions/comments" ? styles.active : undefined}
      >
        <span className={styles.tab}>
          <span>댓글</span>
          <span className={styles.count}>{commentCount}</span>
        </span>
      </Link>
      <Link
        href="/admin/reactions/guestbook"
        className={pathname === "/admin/reactions/guestbook" ? styles.active : undefined}
      >
        <span className={styles.tab}>
          <span>방명록</span>
          <span className={styles.count}>{guestbookCount}</span>
        </span>
      </Link>
    </nav>
  );
}
