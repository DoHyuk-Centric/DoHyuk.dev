import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug } from "@/lib/queries/posts";
import { rehypePrettyCodeOptions } from "@/lib/mdx/highlighter";
import styles from "./page.module.css";

// 정적 export라 빌드 때 만든 글 페이지만 존재한다. 그 밖의 경로는 404.
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
      <time className={styles.date} dateTime={post.createdAt}>
        {post.createdAt}
      </time>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.content}>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
            },
          }}
        />
      </div>
    </article>
  );
}
