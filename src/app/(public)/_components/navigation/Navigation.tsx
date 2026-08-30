"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isGuestbook = pathname === "/guestbook";

  return (
    <nav className={styles.navigation}>
      <Link href="/" className={!isGuestbook ? styles.active : " "}>
        Blog
      </Link>
      <span className={styles.distinction}></span>
      <Link href="/guestbook" className={isGuestbook ? styles.active : " "}>
        Guestbook
      </Link>
    </nav>
  );
}
