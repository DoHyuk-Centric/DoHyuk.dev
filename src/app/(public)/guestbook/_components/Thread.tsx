import EmptyState from "@/components/emptyState";
import MessageBubble from "./MessageBubble";
import styles from "./Thread.module.css";
import type { Message } from "./mockMessages";

export default function Thread({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  return (
    <ul className={styles.thread}>
      {messages.length === 0 ? (
        <li className={styles.emptyItem}>
          <EmptyState message="아직 방명록이 없습니다." />
        </li>
      ) : (
        messages.map((message) => (
          <li key={message.id}>
            <MessageBubble
              author={message.author}
              createdAt={message.createdAt}
              content={message.content}
              isMine={message.authorId === currentUserId}
            />
          </li>
        ))
      )}
    </ul>
  );
}
