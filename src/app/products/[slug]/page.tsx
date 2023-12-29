import { getProduct, getProducts } from "@/api/products";
import React from "react";

export const revalidate = 3; //ISR, 3초마다

type Props = {
  params: {
    slug: string; //우리가 키워드를 slug로 했으니까!
    //만약 [item]이라 했으면 item: string;
  };
};

//제품별로 동적인 메타데이터 만들기
export function generateMetadata({ params }: Props) {
  //어떤 경로에 있는지 표시해줘야하니 params받기

  return {
    title: `이름 ${params.slug}`,
  };
}

const page = async ({ params: { slug } }: Props) => {
  // 넥스트는 props에 params를 사용해서slug에 어떤 경로가 왔는지 알려줌
  //구조분해 할당으로 바꿔줌

  const product = await getProduct(slug);

  return (
    <div>
      slug를 적용했어용
      <br />
      {/* 리팩토링 -> 서버 파일에 있는 데이터 중 해당정보 읽어오기 */}
      경로는 {product?.name} 입니당
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  //특정 경로에 한해서 미리 페이지 만들어두려면 그 경로를 알려주면 됨

  {
    /* 리팩토링 -> 모든 페이지 미리 만들기 */
  }

  const products = await getProducts();
  // const products = ["pants", "cap"]; // 렌더링 하고 싶은 경로
  return products.map((product) => ({
    slug: product.id, //params에 들어가는 형태로 만들어주는 것, 빌드시 ssg로 생성된걸 확인 가능함
  }));
}

// 만약 generateStaticParams를 하지 않으면 사용자가 요청할때 생성해서 전달
// generateStaticParams를 했으면 명시한 것들은 빌드할때 "미리" 만들어두는 것
