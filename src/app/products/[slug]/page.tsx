import React from "react";

type Props = {
  params: {
    slug: string; //우리가 키워드를 slug로 했으니까!
    //만약 [item]이라 했으면 item: string;
  };
};

const page = ({ params }: Props) => {
  // 넥스트는 props에 params를 사용해서slug에 어떤 경로가 왔는지 알려줌
  return (
    <div>
      slug를 적용했어용
      <br />
      경로는 {params.slug} 입니당
    </div>
  );
};

export default page;

export function generateStaticParams() {
  //특정 경로에 한해서 미리 페이지 만들어두려면 그 경로를 알려주면 됨
  const products = ["pants", "cap"]; // 렌더링 하고 싶은 경로
  return products.map((product) => ({
    slug: product, //params에 들어가는 형태로 만들어주는 것, 빌드시 ssg로 생성된걸 확인 가능함
  }));
}

// 만약 generateStaticParams를 하지 않으면 사용자가 요청할때 생성해서 전달
// generateStaticParams를 했으면 명시한 것들은 빌드할때 "미리" 만들어두는 것
