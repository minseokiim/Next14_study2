import Link from "next/link";
import Counter from "./components/Counter";
export default function Home() {
  return (
    <main>
      <h4>./page 메인입니당</h4>
      <div>
        <Link href="/products">링크 테스트 클릭 고고 </Link>
      </div>
      <Counter />
    </main>
  );
}
