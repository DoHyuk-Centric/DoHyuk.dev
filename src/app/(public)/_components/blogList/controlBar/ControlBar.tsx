import YearNav from "./YearNav";
import ListViewToggleGroup from "../../listViewToggleGroup/ListViewToggleGroup";
import type { ViewMode } from "../../listViewToggleGroup/ListViewToggleGroup";
import style from "./ControlBar.module.css";

export default function ControlBar({
  mode,
  onModeChange,
  year,
}: {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  year: number;
}) {
  return (
    <nav className={style.controlBar}>
      <div className={style.yearNav}>
        <YearNav year={year} />
      </div>
      <div className={style.listToggle}>
        <ListViewToggleGroup
          mode={mode}
          onModeChange={onModeChange}
          buttonSize={32}
        />
      </div>
    </nav>
  );
}
