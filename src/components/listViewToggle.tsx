import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

export default function ListViewToggle({
  icon: Icon,
  alt,
  active = false,
  onClick,
  buttonSize,
  iconSize = 16,
}: {
  icon: LucideIcon;
  alt: string;
  active?: boolean;
  onClick?: () => void;
  buttonSize?: number;
  iconSize?: number;
}) {
  return (
    <button
      className={`${styles.listViewToggle} ${active ? styles.active : ""}`}
      style={buttonSize ? { width: buttonSize, height: buttonSize } : undefined}
      aria-label={alt}
      aria-pressed={active}
      onClick={onClick}
    >
      <Icon size={iconSize} />
    </button>
  );
}
