import styles from "./PopularView.module.css";
import type { Post } from "../mockPosts";
import PopularPostItem from "./PopularPostItem";

export default function PopularView({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.view}>
      <PopularPostItem />
    </div>
  );
}
