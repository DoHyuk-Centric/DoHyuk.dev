import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./_components/header/Header";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoHyuk.dev",
  description: "도혁의 기술 블로그",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${geistMono.variable}`}>
      <body>
        <div className={styles.container}>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
