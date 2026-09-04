import AdminMain from "../../_components/adminMain/AdminMain";
import ContainerHeader from "../../_components/containerHeader/ContainerHeader";
import TrashTable from "./_components/TrashTable";
import { mockTrash } from "./_components/mockTrash";

export default function Trash() {
  return (
    <AdminMain>
      <ContainerHeader
        title="휴지통"
        content="삭제 후 30일이 지나면 영구 삭제됩니다."
      />
      <TrashTable items={mockTrash} />
    </AdminMain>
  );
}
