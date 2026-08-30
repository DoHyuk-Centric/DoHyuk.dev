import styles from "./components.module.css";

export default function Badge({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "muted";
}) {
  return (
    <span className={`${styles.badge} ${tone === "muted" ? styles.badgeMuted : ""}`}>
      {label}
    </span>
  );
}
