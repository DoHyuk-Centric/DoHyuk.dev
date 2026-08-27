import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

export default function IconButton({
  icon: Icon,
  alt,
  buttonSize = 32,
  iconSize = 16,
}: {
  icon: LucideIcon;
  alt: string;
  buttonSize?: number;
  iconSize? : number
}) {
  return (
    <button className={styles.iconButton} style={{ width: buttonSize, height: buttonSize }} aria-label={alt}>
      <Icon size={iconSize} />
    </button>
  );
}
