import Thread from "./Thread";
import MessageInput from "./MessageInput";
import { mockMessages, MOCK_CURRENT_USER_ID } from "./mockMessages";

export default function GeustbookSection() {
  return (
    <>
      <Thread messages={mockMessages} currentUserId={MOCK_CURRENT_USER_ID} />
      <MessageInput />
    </>
  );
}
