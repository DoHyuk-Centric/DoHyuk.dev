"use client";

import { useState } from "react";
import type { ViewMode } from "../listViewToggleGroup/ListViewToggleGroup";
import ControlBar from "./controlBar/ControlBar";
import styles from "./BlogListSection.module.css";
import ListView from "./list/ListView";

export default function BlogListSection({ year }: { year: number }) {
  const [mode, setMode] = useState<ViewMode>("list");
  return (
    <div className={styles.section}>
      <ControlBar mode={mode} onModeChange={setMode} year={year} />
      { mode === "list" && <ListView />}
    </div>
  );
}
