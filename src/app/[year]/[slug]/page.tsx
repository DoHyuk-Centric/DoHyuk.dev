import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/queries/posts";
import { rehypePrettyCodeOptions } from "@/lib/mdx/highlighter";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    year: String(new Date(post.createdAt).getFullYear()),
    slug: post.slug,
  }));
}

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
      <header className={styles.header}>
        <time className={styles.date} dateTime={post.createdAt}>
          {post.createdAt}
        </time>
        <h1 className={styles.title}>{post.title}</h1>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
      </header>
      {post.coverImage && (
        <div className={styles.cover}>
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            className={styles.coverImage}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )}
      <div className={styles.content}>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
            },
          }}
        />
      </div>
    </article>
  );
}
