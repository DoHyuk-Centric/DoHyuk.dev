import styles from "./layout.module.css";
import Header from "./_components/header/Header";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
