import YearNav from "./YearNav";
import style from "./ControlBar.module.css";

export default function ControlBar({ year }: { year: number }) {
  return (
    <nav className={style.controlBar}>
      <YearNav year={year} />
    </nav>
  );
}
