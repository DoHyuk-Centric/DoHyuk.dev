import styles from "./layout.module.css";
import Header from "./_components/header/Header";
import Navigation from "./_components/navigation/Navigation";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
