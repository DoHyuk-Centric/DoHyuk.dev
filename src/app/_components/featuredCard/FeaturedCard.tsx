import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/queries/posts";
import styles from "./FeaturedCard.module.css";

export default function FeaturedCard({ post }: { post: Post }) {
  const year = new Date(post.createdAt).getFullYear();

  return (
    <Link href={`/${year}/${post.slug}`} className={styles.card}>
      {post.coverImage ? (
        <div className={styles.image}>
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            className={styles.coverImage}
            sizes="(max-width: 768px) 100vw, 1080px"
          />
        </div>
      ) : (
        <div className={styles.image}>
          <svg
            className={styles.imageIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <circle cx="9" cy="10" r="1.5"></circle>
            <path d="M21 16l-5.5-5.5a1 1 0 0 0-1.4 0L6 19"></path>
          </svg>
          <span>대표 이미지</span>
        </div>
      )}
      <div className={styles.panel}>
        <div className={styles.meta}>
          <span className={styles.eyebrow}>대표 글</span>
          <time className={styles.date} dateTime={post.createdAt}>
            {post.createdAt}
          </time>
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        {post.excerpt && (
          <div className={styles.excerptWrap}>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
