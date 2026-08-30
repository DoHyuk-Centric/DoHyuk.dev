import { Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import Badge from "@/components/badge";
import ListCard from "./ListCard";
import styles from "./ListCard.module.css";

export default function ReactionCard({
  status,
  author,
  content,
  postTitle,
  createdAt,
}: {
  status: "공개" | "비공개";
  author: string;
  content: string;
  postTitle?: string;
  createdAt: string;
}) {
  return (
    <ListCard
      status={<Badge label={status} tone={status === "비공개" ? "muted" : "default"} />}
      heading={author}
      body={content}
      meta={
        <>
          {postTitle ? <span className={styles.meta}>{postTitle}</span> : null}
          <time className={styles.meta} dateTime={createdAt}>
            {createdAt}
          </time>
        </>
      }
      actions={<IconButton icon={Trash2} alt="삭제" />}
    />
  );
}
