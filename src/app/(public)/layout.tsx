import styles from "./layout.module.css";
import Header from "./_components/header/Header";
import Navigation from "./_components/navigation/Navigation";
import ListViewToggleGroup from "./_components/listViewToggleGroup/ListViewToggleGroup";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <ListViewToggleGroup />
      {children}
    </div>
  );
}
