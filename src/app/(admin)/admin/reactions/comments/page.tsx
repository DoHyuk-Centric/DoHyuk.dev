import ContainerHeader from "../../../_components/containerHeader/ContainerHeader";
import CommentTable from "./_components/CommentTable";
import { mockComments } from "./_components/mockComments";
import styles from "./page.module.css";

export default function Comments() {
  return (
    <div className={styles.page}>
      <ContainerHeader title="댓글" content={`${mockComments.length}개`} />
      <CommentTable comments={mockComments} />
    </div>
  );
}
