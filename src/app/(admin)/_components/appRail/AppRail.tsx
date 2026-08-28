"use client";

import { usePathname } from "next/navigation";
import IconLink from "@/components/IconLink";
import style from "./AppRail.module.css";
import {
  LayoutDashboard,
  FileText,
  MessageSquareText,
  Settings,
  Trash2,
} from "lucide-react";

export default function AppRail() {
  const pathname = usePathname();

  return (
    <nav className={style.rail} aria-label="관리자 메뉴">
      <IconLink
        href="/admin"
        icon={LayoutDashboard}
        alt="대시보드"
        active={pathname === "/admin"}
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
      <IconLink
        href="/admin/posts"
        icon={FileText}
        alt="게시글"
        active={pathname === "/admin/posts"}
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
      <IconLink
        href="/admin/comments"
        icon={MessageSquareText}
        alt="댓글"
        active={pathname === "/admin/comments"}
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
      <IconLink
        href="/admin/settings"
        icon={Settings}
        alt="설정"
        active={pathname === "/admin/settings"}
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
      <IconLink
        href="/admin/trash"
        icon={Trash2}
        alt="휴지통"
        active={pathname === "/admin/trash"}
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
    </nav>
  );
}
