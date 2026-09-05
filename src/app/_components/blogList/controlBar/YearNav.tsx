import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./YearNav.module.css"
import Link from "next/link";

export default function YearNav({ year }: { year: number }) {
  return (
    <div className={styles.year}>
      <Link href={`/${year - 1}`}>
        <ChevronLeft size={20} />
      </Link>
      <span>{year ? year : "2026"}</span>
      <Link href={`/${year + 1}`}>
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
