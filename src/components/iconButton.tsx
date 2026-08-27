import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

export default function IconButton({
  icon: Icon,
  alt,
  size = 32,
}: {
  icon: LucideIcon;
  alt: string;
  size?: number;
}) {
  return (
    <button className={styles.iconButton} style={{ width: size, height: size }} aria-label={alt}>
      <Icon size={size} />
    </button>
  );
}
