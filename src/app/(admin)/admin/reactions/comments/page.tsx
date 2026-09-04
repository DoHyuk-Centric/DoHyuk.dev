import ContainerHeader from "../../../_components/containerHeader/ContainerHeader";
import CommentTable from "./_components/CommentTable";
import { mockComments } from "./_components/mockComments";

export default function Comments() {
  return (
    <>
      <ContainerHeader title="댓글" content={`${mockComments.length}개`} />
      <CommentTable comments={mockComments} />
    </>
  );
}
