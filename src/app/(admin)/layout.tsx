import style from "./layout.module.css";
import AdminHeader from "./_components/adminHeader/AdminHeader";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={style.container}>
      <AdminHeader />
      <div className={style.content}>{children}</div>
    </div>
  );
}
