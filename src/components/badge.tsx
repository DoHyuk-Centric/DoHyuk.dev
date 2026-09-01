import styles from "./components.module.css";

export default function Badge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span className={`${styles.badge} ${tone === "accent" ? styles.badgeAccent : ""}`}>
      {label}
    </span>
  );
}
