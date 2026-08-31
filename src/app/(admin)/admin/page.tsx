import AdminMain from "../_components/adminMain/AdminMain";
import ContainerHeader from "../_components/containerHeader/ContainerHeader";
import DashboardCard from "./_components/DashboardCard";
import { mockDashboardStats } from "./_components/mockDashboardStats";
import Section from "./_components/section/Section";
import { mockRecentPosts } from "./_components/mockRecentPosts";
import { mockRecentReactions } from "./_components/mockRecentReactions";
import styles from "./page.module.css";
import listStyles from "./_components/section/ContentLists.module.css";

export default function Admin() {
  return (
    <AdminMain>
      <div className={styles.page}>
        <ContainerHeader
          title="대시보드"
          content="2026년 8월 30일"
          dateTime="2026-08-30"
        />
        <section className={styles.statsGrid}>
          <DashboardCard
            title="전체 게시글"
            value={mockDashboardStats.postCount}
          />
          <DashboardCard
            title="누적 조회수"
            value={mockDashboardStats.totalViews}
          />
          <DashboardCard title="스팸 의심" value={mockDashboardStats.spamCount} />
          <DashboardCard
            title="방명록 메시지"
            value={mockDashboardStats.guestbookCount}
          />
        </section>
        <Section
          title="게시글"
          link="/admin/posts"
          items={mockRecentPosts}
          count={5}
          getHref={(post) => `/blog/${post.slug}`}
          renderItem={(post) => (
            <>
              <span className={listStyles.primary}>{post.title}</span>
              <span className={listStyles.meta}>
                {post.viewCount.toLocaleString()}
              </span>
              <time className={listStyles.date} dateTime={post.createdAt}>
                {post.createdAt}
              </time>
            </>
          )}
        />
        <Section
          title="반응"
          link="/admin/comments"
          items={mockRecentReactions}
          count={3}
          getHref={(reaction) => `/blog/${reaction.postSlug}`}
          renderItem={(reaction) => (
            <>
              <span className={listStyles.author}>{reaction.author}</span>
              <span className={listStyles.primary}>{reaction.content}</span>
              <time className={listStyles.date} dateTime={reaction.createdAt}>
                {reaction.createdAt}
              </time>
            </>
          )}
        />
      </div>
    </AdminMain>
  );
}
