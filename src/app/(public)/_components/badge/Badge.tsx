import styles from "./Badge.module.css";
import { Flame } from "lucide-react";

export default function Badge({
  popular,
  views,
}: {
  popular?: boolean;
  views: number;
}) {
  return (
    <span className={`${styles.icon} ${popular ? styles.popular : ""}`}>
      {popular ? <Flame size={14} /> : ""}
      {views}
    </span>
  );
}
