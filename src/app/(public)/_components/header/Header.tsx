import Image from "next/image";
import styles from "./Header.module.css";
import { Power } from "lucide-react";
import Link from "next/link";
import IconLink from "@/components/IconLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image width={44} height={28} src="/dog-sit-black.webp" alt="로고" />{" "}
        DoHyuk.dev
      </Link>
      <div className={styles.headerLeft}>
        <p>Today: 1200 Total: 10200</p>
        <IconLink href="/admin" icon={Power} alt="로그인" buttonSize={36} iconSize={18} />
      </div>
    </header>
  );
}
