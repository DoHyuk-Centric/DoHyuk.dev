import { getAllPosts } from "@/lib/queries/posts";
import PostMasonry from "./_components/masonry/PostMasonry";

export default function Home() {
  // 대표 글을 맨 앞(첫 카드)으로 올리고, 나머지는 최신순을 유지한다.
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured);
  const ordered = featured ? [featured, ...posts.filter((post) => post !== featured)] : posts;

  return <PostMasonry posts={ordered} />;
}
