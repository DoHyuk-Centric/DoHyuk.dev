import EmptyState from "@/components/emptyState";
import type { Post } from "@/lib/queries/posts";
import PostCard from "./PostCard";
import styles from "./PostMasonry.module.css";

// CSS multi-column으로 쌓는 벽돌 레이아웃. 카드 높이는 커버 이미지·요약 길이에 따라 달라진다.
// 배치 순서는 열 단위(위→아래, 그다음 오른쪽 열)다.
export default function PostMasonry({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <EmptyState message="아직 작성된 글이 없습니다." />;
  }
  return (
    <div className={styles.masonry}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
