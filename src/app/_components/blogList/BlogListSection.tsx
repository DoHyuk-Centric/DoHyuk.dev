import Link from "next/link";
import ControlBar from "./controlBar/ControlBar";
import styles from "./BlogListSection.module.css";
import ListView from "./list/ListView";
import { getPostsByYear, getPostsSince } from "@/lib/queries/posts";

export default function BlogListSection({
  year,
  sinceYear,
  excludeSlug,
  limit,
}: {
  year: number;
  sinceYear?: number;
  excludeSlug?: string;
  limit?: number;
}) {
  const allPosts = sinceYear !== undefined ? getPostsSince(sinceYear) : getPostsByYear(year);
  const filteredPosts = allPosts.filter((post) => post.slug !== excludeSlug);
  const posts = limit ? filteredPosts.slice(0, limit) : filteredPosts;
  const hasMore = limit !== undefined && filteredPosts.length > limit;

  return (
    <div className={styles.section}>
      {limit !== undefined ? (
        <div className={styles.teaserHeader}>
          <span className={styles.yearLabel}>{year}</span>
          {hasMore && (
            <Link href={`/${year}`} className={styles.moreLink}>
              더보기
            </Link>
          )}
        </div>
      ) : (
        <ControlBar year={year} />
      )}
      <ListView posts={posts} />
    </div>
  );
}
