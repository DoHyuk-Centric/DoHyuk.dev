import Image from "next/image";
import styles from "./Header.module.css";
import { Power } from "lucide-react";
import Link from "next/link";
import IconLink from "@/components/IconLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image width={44} height={28} src="/dog-sit-black.webp" alt="로고" />
        <span className={styles.logoText}>DoHyuk.dev</span>
      </Link>
      <div className={styles.headerLeft}>
        <div className={styles.stats}>
          <span>Today: 1200</span>
          <span>Total: 10200</span>
        </div>
        <IconLink href="/admin" icon={Power} alt="로그인" buttonSize={36} iconSize={18} />
      </div>
    </header>
  );
}
