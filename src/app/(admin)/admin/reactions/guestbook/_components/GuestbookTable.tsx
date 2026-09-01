import { Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import AdminTable from "../../../../_components/adminTable/AdminTable";
import StatusToggle from "../../_components/StatusToggle";
import { formatDate } from "../../_components/formatDate";
import type { GuestbookMessage } from "./mockGuestbook";
import styles from "./GuestbookTable.module.css";

export default function GuestbookTable({ messages }: { messages: GuestbookMessage[] }) {
  return (
    <AdminTable
      caption="방명록 목록"
      className={styles.table}
      head={
        <>
          <th scope="col" className={styles.statusCol}>상태</th>
          <th scope="col" className={styles.authorCol}>작성자</th>
          <th scope="col">내용</th>
          <th scope="col" className={styles.dateCol}>작성일</th>
          <th scope="col" className={styles.actionsCol}>관리</th>
        </>
      }
    >
      {messages.map((message) => (
        <tr key={message.id} className={styles.row}>
          <td className={styles.status}>
            <StatusToggle initialStatus={message.status} />
          </td>
          <th scope="row" className={styles.author}>
            {message.author}
          </th>
          <td className={styles.content}>{message.content}</td>
          <td className={styles.date}>
            <time dateTime={message.createdAt}>{formatDate(message.createdAt)}</time>
          </td>
          <td className={styles.actions}>
            <IconButton icon={Trash2} alt="삭제" tone="danger" />
          </td>
        </tr>
      ))}
    </AdminTable>
  );
}
