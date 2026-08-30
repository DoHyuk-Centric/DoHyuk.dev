export type Message = {
  id: number;
  authorId: string;
  author: string;
  createdAt: string;
  content: string;
};

export const MOCK_CURRENT_USER_ID = "dohyuk";

export const mockMessages: Message[] = [
  { id: 1, authorId: "jieun", author: "지은", createdAt: "2026.11.18 09:30", content: "방명록 방명록" },
  { id: 2, authorId: "minjun", author: "민준", createdAt: "2026.11.17 22:14", content: "블로그 잘 보고 있어요, 항상 응원합니다" },
  { id: 3, authorId: "dohyuk", author: "DoHyuk", createdAt: "2026.11.12 22:12", content: "개인 블로그 방명록입니다." },
];
