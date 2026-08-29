import ControlBar from "./controlBar/ControlBar";
import styles from "./BlogListSection.module.css";
import ListView from "./list/ListView";
import { mockPosts } from "./mockPosts";

export default function BlogListSection({ year }: { year: number }) {
  const posts = mockPosts.filter(
    (post) => new Date(post.createdAt).getFullYear() === year,
  );
  
  return (
    <div className={styles.section}>
      <ControlBar year={year} />
      <ListView posts={posts} />
    </div>
  );
}
