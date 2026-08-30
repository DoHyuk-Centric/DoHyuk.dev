import IconButton from "@/components/iconButton";
import { Send } from "lucide-react";
import styles from "./MessageInput.module.css";

export default function MessageInput() {
  return (
    <div className={styles.messageInput}>
      <input type="text" placeholder="방명록을 남겨보세요." />
      <IconButton icon={Send} alt="보내기 버튼" buttonSize={44} iconSize={20} />
    </div>
  );
}
