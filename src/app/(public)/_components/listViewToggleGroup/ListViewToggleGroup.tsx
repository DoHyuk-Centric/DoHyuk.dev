"use client";

import { List, Flame } from "lucide-react";
import ListViewToggle from "@/components/listViewToggle";
import styles from "./ListViewToggleGroup.module.css";

export type ViewMode = "list" | "popular";

export default function ListViewToggleGroup({
  mode,
  onModeChange,
  buttonSize,
  iconSize,
}: {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  buttonSize?: number;
  iconSize?: number;
}) {
  return (
    <div className={styles.group}>
      <ListViewToggle
        icon={List}
        alt="목록순"
        active={mode === "list"}
        onClick={() => onModeChange("list")}
        buttonSize={buttonSize}
        iconSize={iconSize}
      />
      <ListViewToggle
        icon={Flame}
        alt="인기순"
        active={mode === "popular"}
        onClick={() => onModeChange("popular")}
        buttonSize={buttonSize}
        iconSize={iconSize}
      />
    </div>
  );
}
