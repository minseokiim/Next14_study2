import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// SEO
// layout.js에 metadata를 정의하면 해당 경로의 페이지 뿐만 아니라 자식라우트에서도 재사용됨
// page.js에 넣으면 페이지에 해당하는 곳에만 적용. 다른 페이지에 영향 x
// 웹페이지 전체적으로 해줄거면 제일 상위의 layout.js에!

export const metadata: Metadata = {
  title: "제품 사이트",
  description: "제품을 판매합니당",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>./layout 에서 지정한 헤더입니당</header>
        <nav>
          ./layout 에서 지정한 냅바입니당
          <Link href="/products">Products </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
