import styles from "./layout.module.css";
import Header from "./_components/header/Header";
import Navigation from "./_components/navigation/Navigation";
import AppRail from "../(admin)/_components/appRail/AppRail";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <AppRail />
      {children}
    </div>
  );
}
