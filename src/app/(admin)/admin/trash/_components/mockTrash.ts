export type TrashItemType = "게시글" | "댓글" | "방명록";

export type TrashItem = {
  id: number;
  type: TrashItemType;
  content: string;
  deletedAt: string;
  remainingDays: number;
};

export const mockTrash: TrashItem[] = [
  {
    id: 1,
    type: "게시글",
    content: "삭제된 초고 — 비 오는 날의 단상과 커피 한 잔",
    deletedAt: "2026-08-24",
    remainingDays: 28,
  },
  {
    id: 2,
    type: "댓글",
    content: "익명 — 이런 글 왜 씀? 시간낭비임",
    deletedAt: "2026-08-21",
    remainingDays: 25,
  },
  {
    id: 3,
    type: "방명록",
    content: "광고계정 — 돈버는 방법 클릭하세요",
    deletedAt: "2026-07-30",
    remainingDays: 3,
  },
];
