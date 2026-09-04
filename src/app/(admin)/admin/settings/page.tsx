import AdminMain from "../../_components/adminMain/AdminMain";
import ContainerHeader from "../../_components/containerHeader/ContainerHeader";
import KeywordFilter from "./_components/KeywordFilter";
import { mockKeywords } from "./_components/mockKeywords";

export default function Settings() {
  return (
    <AdminMain>
      <ContainerHeader title="필터 키워드" content={`${mockKeywords.length}개 등록됨`} />
      <KeywordFilter initialKeywords={mockKeywords} />
    </AdminMain>
  );
}
