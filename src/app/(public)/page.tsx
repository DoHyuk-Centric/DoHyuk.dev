import { redirect } from "next/navigation";

export default async function Blog() {
  const currentYear = new Date().getFullYear();
  redirect(`/${currentYear}`);
}
