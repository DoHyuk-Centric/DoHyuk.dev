import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";
import Link from "next/link";

export default function IconLink({
  href,
  icon: Icon,
  alt,
  active = false,
  buttonSize = 32,
  iconSize = 16,
  radius = "50%",
}: {
  href: string;
  icon: LucideIcon;
  alt: string;
  active?: boolean;
  buttonSize?: number;
  iconSize?: number;
  radius?: number | string;
}) {
  return (
    <Link
      href={href}
      className={`${styles.iconLink} ${active ? styles.active : ""}`}
      style={{ width: buttonSize, height: buttonSize, borderRadius: radius }}
      aria-label={alt}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={iconSize} />
    </Link>
  );
}
