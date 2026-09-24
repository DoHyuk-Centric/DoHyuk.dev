import BlogListSection from "../_components/blogList/BlogListSection";
import { getAllPosts } from "@/lib/queries/posts";

// 정적 export라 빌드 때 만든 연도 페이지만 존재한다. 그 밖의 연도는 404.
export const dynamicParams = false;

// 가장 오래된 글의 연도부터 올해(또는 가장 최근 글의 연도)까지, 글이 없는 연도도 포함해 생성한다.
export function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const postYears = getAllPosts().map((post) => new Date(post.createdAt).getFullYear());
  const firstYear = Math.min(currentYear, ...postYears);
  const lastYear = Math.max(currentYear, ...postYears);

  return Array.from({ length: lastYear - firstYear + 1 }, (_, i) => ({
    year: String(firstYear + i),
  }));
}

export default async function BlogYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  return <BlogListSection year={Number(year)} />;
}
