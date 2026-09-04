import AdminMain from "../../_components/adminMain/AdminMain";
import ContainerHeader from "../../_components/containerHeader/ContainerHeader";
import PostTable from "./_components/PostTable";
import { mockPosts } from "./_components/mockPosts";

export default function Posts() {
  return (
    <AdminMain>
      <ContainerHeader title="게시글" content={`${mockPosts.length}개`} />
      <PostTable posts={mockPosts} />
    </AdminMain>
  );
}
