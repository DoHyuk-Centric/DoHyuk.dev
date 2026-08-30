export type Post = {
  id: number;
  slug: string;
  title: string;
  createdAt: string;
  viewCount: number;
};

export const mockPosts: Post[] = [
  { id: 1, slug: "post-1", title: "단순함이라는 지독한 훈련과 시각적 침묵", createdAt: "2026-08-28", viewCount: 2310 },
  { id: 2, slug: "post-2", title: "우리가 잃어버린 사소한 일상의 질서들에 대하여", createdAt: "2026-08-21", viewCount: 1894 },
  { id: 3, slug: "post-3", title: "새해의 첫날, 무계획의 즐거움과 작은 결심", createdAt: "2026-08-14", viewCount: 1520 },
  { id: 4, slug: "post-4", title: "기술의 시대에 종이책을 펼쳐 든다는 것", createdAt: "2026-08-07", viewCount: 1450 },
  { id: 5, slug: "post-5", title: "어떤 오해와 사소한 이해에 관하여", createdAt: "2026-07-31", viewCount: 1204 },
  { id: 6, slug: "post-6", title: "여름밤의 미풍과 식어가는 커피 잔의 온도", createdAt: "2026-07-24", viewCount: 1118 },
  { id: 7, slug: "post-7", title: "가을의 중앙에서 읽었던 무용한 문장들", createdAt: "2026-07-17", viewCount: 982 },
  { id: 8, slug: "post-8", title: "침묵을 견디는 일에 서툰 사람들을 위한 에세이", createdAt: "2026-07-10", viewCount: 830 },
  { id: 9, slug: "post-9", title: "어둠 속에서 반짝이는 어떤 집의 창문 하나", createdAt: "2026-07-03", viewCount: 712 },
  { id: 10, slug: "post-10", title: "아침 산책길에서 만난 겨울새와 메마른 나뭇가지", createdAt: "2026-06-26", viewCount: 654 },
];
