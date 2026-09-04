import ContainerHeader from "../../../_components/containerHeader/ContainerHeader";
import GuestbookTable from "./_components/GuestbookTable";
import { mockGuestbook } from "./_components/mockGuestbook";

export default function Guestbook() {
  return (
    <>
      <ContainerHeader title="방명록" content={`${mockGuestbook.length}개`} />
      <GuestbookTable messages={mockGuestbook} />
    </>
  );
}
