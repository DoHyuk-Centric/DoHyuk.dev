import { Undo2, Trash2 } from "lucide-react";
import IconButton from "@/components/iconButton";
import AdminTable from "../../../_components/adminTable/AdminTable";
import { formatDate } from "../../reactions/_components/formatDate";
import type { TrashItem } from "./mockTrash";
import styles from "./TrashTable.module.css";

const CRITICAL_REMAINING_DAYS = 7;

export default function TrashTable({ items }: { items: TrashItem[] }) {
  return (
    <AdminTable
      caption="휴지통 목록"
      className={styles.table}
      head={
        <>
          <th scope="col" className={styles.typeCol}>유형</th>
          <th scope="col">내용</th>
          <th scope="col" className={styles.dateCol}>삭제일</th>
          <th scope="col" className={styles.remainingCol}>남은 기간</th>
          <th scope="col" className={styles.actionsCol}>관리</th>
        </>
      }
    >
      {items.map((item) => {
        const isCritical = item.remainingDays <= CRITICAL_REMAINING_DAYS;

        return (
          <tr key={item.id} className={styles.row}>
            <th scope="row" className={styles.type}>
              <span className={styles.badge}>{item.type}</span>
            </th>
            <td className={styles.content}>{item.content}</td>
            <td className={styles.date}>
              <time dateTime={item.deletedAt}>{formatDate(item.deletedAt)}</time>
            </td>
            <td className={`${styles.remaining} ${isCritical ? styles.remainingCritical : ""}`}>
              {item.remainingDays}일 남음
            </td>
            <td className={styles.actions}>
              <IconButton icon={Undo2} alt="복구" tone="outline" />
              <IconButton icon={Trash2} alt="영구 삭제" tone="danger" />
            </td>
          </tr>
        );
      })}
    </AdminTable>
  );
}
