import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "제품 사이트 | 모든 제품 확인",
  description: "확인합니당",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
