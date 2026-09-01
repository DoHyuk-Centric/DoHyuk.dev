"use client";

import { useState } from "react";
import styles from "@/components/components.module.css";

export default function StatusToggle({
  initialStatus,
}: {
  initialStatus: "공개" | "비공개";
}) {
  const [status, setStatus] = useState(initialStatus);
  const isPublic = status === "공개";

  return (
    <button
      type="button"
      className={`${styles.badge} ${isPublic ? styles.badgeAccent : ""}`}
      onClick={() => setStatus(isPublic ? "비공개" : "공개")}
    >
      {status}
    </button>
  );
}
