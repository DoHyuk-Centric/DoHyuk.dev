import Image from "next/image";
import styles from "./Header.module.css";
import { Power } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image width={44} height={28} src="/dog-sit-black.webp" alt="로고" />{" "}
        DoHyuk.dev
      </Link>
      <div className={styles.headerLeft}>
        <p>Today: 1200 Total: 10200</p>
        <Link href="/login" className={styles.loginButton}>
          <Power width="18px" height="18px" />
        </Link>
      </div>
    </header>
  );
}
