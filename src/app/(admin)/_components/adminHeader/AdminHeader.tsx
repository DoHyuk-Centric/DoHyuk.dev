import IconLink from "@/components/IconLink";
import { Home } from "lucide-react";
import style from "./AdminHeader.module.css";
import Image from "next/image";
import AppRail from "../appRail/AppRail";

export default function AdminHeader() {
  return (
    <header className={style.header}>
      <Image width={32} height={20} src="/dog-sit-black.webp" alt="로고" />
      <AppRail />
      <IconLink
        href="/"
        icon={Home}
        alt="블로그로 이동"
        radius={4}
        buttonSize={44}
        iconSize={20}
      />
    </header>
  );
}
