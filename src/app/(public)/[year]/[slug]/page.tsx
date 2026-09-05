import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/queries/posts";
import styles from "./page.module.css";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ year: string; slug: string }>;
}) {
  const { year, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || new Date(post.createdAt).getFullYear() !== Number(year)) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <time className={styles.date} dateTime={post.createdAt}>
        {post.createdAt}
      </time>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.content}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
