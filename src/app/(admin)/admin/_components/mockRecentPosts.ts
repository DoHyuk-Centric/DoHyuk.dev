export type RecentPost = {
  slug: string;
  title: string;
  viewCount: number;
  createdAt: string;
};

export const mockRecentPosts: RecentPost[] = [
  { slug: "post-5", title: "어떤 오해와 사소한 이해에 관하여", viewCount: 1204, createdAt: "2026.11.14" },
  { slug: "post-7", title: "가을의 중앙에서 읽었던 무용한 문장들", viewCount: 982, createdAt: "2026.10.02" },
  { slug: "post-4", title: "기술의 시대에 종이책을 펼쳐 든다는 것", viewCount: 1450, createdAt: "2026.09.28" },
  { slug: "post-8", title: "침묵을 견디는 일에 서툰 사람들을 위한 에세이", viewCount: 830, createdAt: "2026.08.15" },
  { slug: "post-6", title: "여름밤의 미풍과 식어가는 커피 잔의 온도", viewCount: 1118, createdAt: "2026.07.04" },
];
