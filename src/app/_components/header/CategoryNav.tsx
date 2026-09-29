"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { CATEGORIES, CATEGORY_KEYS } from "@/lib/categories";
import styles from "./CategoryNav.module.css";

// "전체"는 메인(/)과 연도별 목록(/2026)에서 활성화된다. 글 상세 페이지에서는 아무것도 체크하지 않는다.
const ALL_PATH = /^\/(\d{4}\/?)?$/;

export default function CategoryNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const items = [
    { href: "/", label: "전체", active: ALL_PATH.test(pathname) },
    ...CATEGORY_KEYS.map((key) => {
      const href = `/category/${key}`;
      return {
        href,
        label: CATEGORIES[key].label,
        active: pathname === href || pathname === `${href}/`,
      };
    }),
  ];
  const current = items.find((item) => item.active)?.label ?? "전체";

  // 페이지를 이동하면 메뉴를 닫는다.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 바깥 클릭이나 Esc로 닫는다.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      <span className={styles.separator} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="category-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {current}
        <ChevronDown size={16} className={styles.chevron} aria-hidden="true" />
      </button>
      {open && (
        <nav id="category-menu" className={styles.menu} aria-label="카테고리">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.active ? `${styles.item} ${styles.active}` : styles.item}
              aria-current={item.active ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
