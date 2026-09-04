import type { LucideIcon } from "lucide-react";
import styles from "./components.module.css";

const toneStyles = {
  solid: "",
  outline: styles.iconButtonOutline,
  danger: styles.iconButtonDanger,
};

export default function IconButton({
  icon: Icon,
  alt,
  tone = "solid",
  buttonSize = 32,
  iconSize = 16,
  onClick,
}: {
  icon: LucideIcon;
  alt: string;
  tone?: keyof typeof toneStyles;
  buttonSize?: number;
  iconSize? : number
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.iconButton} ${toneStyles[tone]}`}
      style={{ width: buttonSize, height: buttonSize }}
      aria-label={alt}
      onClick={onClick}
    >
      <Icon size={iconSize} />
    </button>
  );
}
