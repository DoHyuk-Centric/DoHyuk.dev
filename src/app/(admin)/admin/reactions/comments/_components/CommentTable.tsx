import { Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import AdminTable from "../../../../_components/adminTable/AdminTable";
import StatusToggle from "../../_components/StatusToggle";
import { formatDate } from "../../_components/formatDate";
import type { Comment } from "./mockComments";
import styles from "./CommentTable.module.css";

export default function CommentTable({ comments }: { comments: Comment[] }) {
  return (
    <AdminTable
      caption="댓글 목록"
      className={styles.table}
      head={
        <>
          <th scope="col" className={styles.statusCol}>상태</th>
          <th scope="col" className={styles.authorCol}>작성자</th>
          <th scope="col">내용</th>
          <th scope="col" className={styles.postCol}>게시글</th>
          <th scope="col" className={styles.dateCol}>작성일</th>
          <th scope="col" className={styles.actionsCol}>관리</th>
        </>
      }
    >
      {comments.map((comment) => (
        <tr key={comment.id} className={styles.row}>
          <td className={styles.status}>
            <StatusToggle initialStatus={comment.status} />
          </td>
          <th scope="row" className={styles.author}>
            {comment.author}
          </th>
          <td className={styles.content}>{comment.content}</td>
          <td className={styles.post}>{comment.postTitle}</td>
          <td className={styles.date}>
            <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
          </td>
          <td className={styles.actions}>
            <IconButton icon={Trash2} alt="삭제" tone="danger" />
          </td>
        </tr>
      ))}
    </AdminTable>
  );
}
