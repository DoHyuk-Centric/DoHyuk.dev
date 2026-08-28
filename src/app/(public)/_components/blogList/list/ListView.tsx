import ListPostItem from "./ListPostItem";
import styles from "./ListView.module.css";
import type { Post } from "../mockPosts";

export default function ListView({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <ListPostItem
          key={post.id}
          createdAt={post.createdAt}
          title={post.title}
          views={post.views}
        />
      ))}
    </div>
  );
}
