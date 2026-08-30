export type DashboardStats = {
  postCount: number;
  totalViews: number;
  spamCount: number;
  guestbookCount: number;
  trashCount: number;
};

export const mockDashboardStats: DashboardStats = {
  postCount: 10,
  totalViews: 12674,
  spamCount: 2,
  guestbookCount: 4,
  trashCount: 3,
};
