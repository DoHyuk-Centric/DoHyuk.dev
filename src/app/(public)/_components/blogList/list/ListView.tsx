import ListPostItem from "./ListPostItem";
import styles from "./ListView.module.css";
import type { Post } from "@/lib/queries/posts";
import EmptyState from "@/components/emptyState";

export default function ListView({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <EmptyState message="아직 작성된 글이 없습니다." />;
  }
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <ListPostItem key={post.slug} createdAt={post.createdAt} title={post.title} />
      ))}
    </div>
  );
}
