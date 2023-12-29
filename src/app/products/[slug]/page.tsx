import { getProduct, getProducts } from "@/api/product";
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
  return {
    title: `이름 ${params.slug}`,
  };
}

const page = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  return (
    <div>
      slug를 적용했어용
      <br />
      경로는 {product?.name} 입니당
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  //특정 경로에 한해서 미리 페이지 만들어두려면 그 경로를 알려주면 됨

  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
