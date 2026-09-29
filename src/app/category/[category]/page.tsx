import ListView from "@/app/_components/blogList/list/ListView";
import { CATEGORIES, CATEGORY_KEYS, type Category } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/queries/posts";
import styles from "./page.module.css";

// 정적 export라 등록된 카테고리 페이지만 빌드된다. 그 밖의 값은 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_KEYS.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = getPostsByCategory(category as Category);

  return (
    <div>
      <h2 className={styles.heading}>{CATEGORIES[category as Category].label}</h2>
      <ListView posts={posts} />
    </div>
  );
}
