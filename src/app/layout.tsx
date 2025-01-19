import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

const pretendard = localFont({
  src: "./styles/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "제목",
  description: "설명",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="bg-background font-pretendard">
        <main>{children}</main>
      </body>
    </html>
  );
}
