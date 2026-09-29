// 카테고리는 여기 등록된 것만 쓸 수 있다. 새 카테고리가 필요하면 한 줄 추가한다.
// key는 frontmatter의 `category` 값이자 URL 세그먼트(/category/<key>)라 영문 kebab-case로 둔다.
export const CATEGORIES = {
  troubleshooting: { label: "문제해결" },
  experience: { label: "경험" },
} as const;

export type Category = keyof typeof CATEGORIES;

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as Category[];

export function isCategory(value: string | undefined): value is Category {
  return value !== undefined && Object.hasOwn(CATEGORIES, value);
}
