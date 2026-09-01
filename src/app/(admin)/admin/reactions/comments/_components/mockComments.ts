export type Comment = {
  id: number;
  status: "공개" | "비공개";
  author: string;
  content: string;
  postTitle: string;
  createdAt: string;
};

export const mockComments: Comment[] = [
  {
    id: 1,
    status: "공개",
    author: "이하은",
    content: "서촌 골목길 저 정말 좋아하는 데인데, 다음 주말엔 무조건 연인 데리고 드립 커피 마시러 가보려구요!",
    postTitle: "어떤 오해와 사소한 이해에 관하여",
    createdAt: "2026-08-30",
  },
  {
    id: 2,
    status: "공개",
    author: "박우진",
    content: "매번 새로운 영감 주는 공간을 소개해 주셔서 감사합니다.",
    postTitle: "가을의 중앙에서 읽었던 무용한 문장들",
    createdAt: "2026-08-29",
  },
  {
    id: 3,
    status: "비공개",
    author: "최수지",
    content: "성수동 거기 진짜 숨은 보석 같은 곳이죠!",
    postTitle: "기술의 시대에 종이책을 펼쳐 든다는 것",
    createdAt: "2026-08-21",
  },
  {
    id: 4,
    status: "비공개",
    author: "spam_bot",
    content: "광고 클릭하세요 돈버세요 바로가기",
    postTitle: "기술의 시대에 종이책을 펼쳐 든다는 것",
    createdAt: "2026-08-14",
  },
];
