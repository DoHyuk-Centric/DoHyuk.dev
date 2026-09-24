import { getFeaturedPost } from "@/lib/queries/posts";
import FeaturedCard from "./_components/featuredCard/FeaturedCard";
import BlogListSection from "./_components/blogList/BlogListSection";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const featured = getFeaturedPost();

  return (
    <>
      {featured && <FeaturedCard post={featured} />}
      <BlogListSection
        year={currentYear}
        sinceYear={currentYear - 2}
        excludeSlug={featured?.slug}
        limit={5}
      />
    </>
  );
}
