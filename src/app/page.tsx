import Link from "next/link";
export default function Home() {
  return (
    <main>
      ./page 메인입니당
      <div>
        <Link href="/products">링크 테스트 클릭 고고 </Link>
      </div>
    </main>
  );
}
