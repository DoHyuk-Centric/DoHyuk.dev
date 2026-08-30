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
}: {
  icon: LucideIcon;
  alt: string;
  tone?: keyof typeof toneStyles;
  buttonSize?: number;
  iconSize? : number
}) {
  return (
    <button className={`${styles.iconButton} ${toneStyles[tone]}`} style={{ width: buttonSize, height: buttonSize }} aria-label={alt}>
      <Icon size={iconSize} />
    </button>
  );
}
