import { Pencil, Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import AdminTable from "../../../_components/adminTable/AdminTable";
import { formatDate } from "./formatDate";
import type { Post } from "./mockPosts";
import styles from "./PostTable.module.css";

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <AdminTable
      caption="게시글 목록"
      head={
        <>
          <th scope="col" className={styles.dateCol}>날짜</th>
          <th scope="col">제목</th>
          <th scope="col" className={styles.viewsCol}>조회수</th>
          <th scope="col" className={styles.actionsCol}>관리</th>
        </>
      }
    >
      {posts.map((post) => (
        <tr key={post.id} className={styles.row}>
          <td className={styles.date}>
            <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
          </td>
          <th scope="row" className={styles.title}>
            {post.title}
          </th>
          <td className={styles.views}>{post.viewCount.toLocaleString()}</td>
          <td className={styles.actions}>
            <IconButton icon={Pencil} alt="수정" tone="outline" />
            <IconButton icon={Trash2} alt="삭제" tone="danger" />
          </td>
        </tr>
      ))}
    </AdminTable>
  );
}
