import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import { CATEGORIES } from "@/lib/categories";
import type { Post } from "@/lib/queries/posts";
import styles from "./PostCard.module.css";

export default function PostCard({ post }: { post: Post }) {
  const year = new Date(post.createdAt).getFullYear();

  return (
    <Link href={`/${year}/${post.slug}`} className={styles.card}>
      {/* 원본 비율대로 보여 줘야 벽돌 레이아웃이 된다. width/height 0 + CSS height:auto로 비율을 유지한다. */}
      <Image
        src={withBasePath(post.coverImage)}
        alt=""
        width={0}
        height={0}
        priority={post.featured}
        className={styles.coverImage}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 360px"
      />
      <div className={styles.overlay}>
        <span className={styles.eyebrow}>
          {CATEGORIES[post.category].label}
          {post.featured && " · 대표 글"}
        </span>
        <h3 className={styles.title}>{post.title}</h3>
        <time className={styles.date} dateTime={post.createdAt}>
          {post.createdAt}
        </time>
      </div>
    </Link>
  );
}
