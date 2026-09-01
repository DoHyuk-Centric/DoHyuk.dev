export type GuestbookMessage = {
  id: number;
  status: "공개" | "비공개";
  author: string;
  content: string;
  createdAt: string;
};

export const mockGuestbook: GuestbookMessage[] = [
  {
    id: 1,
    status: "공개",
    author: "김도현",
    content: "블로그 잘 보고 있습니다. 항상 좋은 글 감사해요!",
    createdAt: "2026-08-28",
  },
  {
    id: 2,
    status: "공개",
    author: "이서연",
    content: "디자인이 깔끔해서 자주 들어오게 되네요.",
    createdAt: "2026-08-25",
  },
  {
    id: 3,
    status: "비공개",
    author: "익명",
    content: "테스트 메시지입니다.",
    createdAt: "2026-08-20",
  },
  {
    id: 4,
    status: "비공개",
    author: "guest_1234",
    content: "방문 기념 도장 쾅!",
    createdAt: "2026-08-15",
  },
];
