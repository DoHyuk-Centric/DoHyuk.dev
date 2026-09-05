import ControlBar from "./controlBar/ControlBar";
import styles from "./BlogListSection.module.css";
import ListView from "./list/ListView";
import { getPostsByYear } from "@/lib/queries/posts";

export default function BlogListSection({ year }: { year: number }) {
  const posts = getPostsByYear(year);


  return (
    <div className={styles.section}>
      <ControlBar year={year} />
      <ListView posts={posts} />
    </div>
  );
}
