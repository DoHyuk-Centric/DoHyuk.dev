"use client";

import { useState } from "react";
import { List, Flame } from "lucide-react";
import ListViewToggle from "@/components/listViewToggle";
import styles from "./ListViewToggleGroup.module.css";

type ViewMode = "list" | "popular";

export default function ListViewToggleGroup() {
  const [mode, setMode] = useState<ViewMode>("list");

  return (
    <div className={styles.group}>
      <ListViewToggle
        icon={List}
        alt="목록순"
        active={mode === "list"}
        onClick={() => setMode("list")}
      />
      <ListViewToggle
        icon={Flame}
        alt="인기순"
        active={mode === "popular"}
        onClick={() => setMode("popular")}
      />
    </div>
  );
}
