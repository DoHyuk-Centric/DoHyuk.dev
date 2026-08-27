import styles from "./layout.module.css";
import Header from "./_components/header/Header";
import Navigation from "./_components/navigation/Navigation";
import IconButton from "@/components/iconButton";
import { Send } from "lucide-react";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <IconButton icon={Send} alt="플러스 버튼" size={32} />
      {children}
    </div>
  );
}
