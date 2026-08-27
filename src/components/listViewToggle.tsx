import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

export default function ListViewToggle({
  icon: Icon,
  alt,
  active = false,
  onClick,
}: {
  icon: LucideIcon;
  alt: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${styles.listViewToggle} ${active ? styles.active : ""}`}
      aria-label={alt}
      aria-pressed={active}
      onClick={onClick}
    >
      <Icon size={16} />
    </button>
  );
}
