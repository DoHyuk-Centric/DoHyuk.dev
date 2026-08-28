import BlogListSection from "../_components/blogList/BlogListSection";

export default async function BlogYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  return <BlogListSection year={Number(year)} />;
}
