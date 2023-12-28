import React from "react";

type Props = {
  params: {
    slug: string; //우리가 키워드를 slug로 했으니까!
    //만약 [item]이라 했으면 item: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <div>
      slug를 적용했어용
      <br />
      경로는 {params.slug} 입니당
    </div>
  );
};

export default page;

// 넥스트는 props에 params를 사용해서slug에 어떤 경로가 왔는지 알려줌
