import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image width={44} height={28} src={withBasePath("/dog-sit-black.webp")} alt="로고" />
        <span className={styles.logoText}>DoHyuk.dev</span>
      </Link>
    </header>
  );
}
