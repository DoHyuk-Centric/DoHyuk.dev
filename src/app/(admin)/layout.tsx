import style from "./layout.module.css";
import AppRail from "./_components/appRail/AppRail";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={style.container}>
      <AppRail />
      <div className={style.content}>{children}</div>
    </div>
  );
}
