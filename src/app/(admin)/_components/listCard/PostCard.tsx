import { SquarePen, Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import ListCard from "./ListCard";
import styles from "./ListCard.module.css";

export default function PostCard({
  title,
  createdAt,
  viewCount,
}: {
  title: string;
  createdAt: string;
  viewCount: number;
}) {
  return (
    <ListCard
      heading={title}
      meta={
        <>
          <span className={styles.meta}>{viewCount.toLocaleString()}회</span>
          <time className={styles.meta} dateTime={createdAt}>
            {createdAt}
          </time>
        </>
      }
      actions={
        <>
          <IconButton icon={SquarePen} alt="수정" />
          <IconButton icon={Trash2} alt="삭제" />
        </>
      }
    />
  );
}
