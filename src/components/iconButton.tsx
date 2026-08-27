import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

export default function IconButton({
  icon: Icon,
  alt,
  size = 32,
  padding = 8,
}: {
  icon: LucideIcon;
  alt: string;
  size?: number;
  padding?: number;
}) {
  return (
    <button className={styles.iconButton} style={{ width: size, height: size, padding }} aria-label={alt}>
      <Icon size={size - padding * 2} />
    </button>
  );
}
