export type RecentReaction = {
  type: "comment" | "guestbook";
  author: string;
  content: string;
  createdAt: string;
  postSlug: string;
};

export const mockRecentReactions: RecentReaction[] = [
  {
    type: "comment",
    author: "이하은",
    content: "서촌 골목길 저 정말 좋아하는 데인데, 다음 주말엔 무조건 연인 데리고 드립 커피 마시러 가보려구요!",
    createdAt: "2026.11.14",
    postSlug: "post-5",
  },
  {
    type: "comment",
    author: "박우진",
    content: "매번 새로운 영감 주는 공간을 소개해 주셔서 감사합니다.",
    createdAt: "2026.11.14",
    postSlug: "post-7",
  },
  {
    type: "comment",
    author: "최수지",
    content: "성수동 거기 진짜 숨은 보석 같은 곳이죠!",
    createdAt: "2026.10.03",
    postSlug: "post-4",
  },
];
