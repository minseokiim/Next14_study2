import React from "react";
import Link from "next/link";
import os from "os"; //node api중 하나
import { getProducts } from "../../api/product";
import Meow from "../components/Meow";

//export const revalidate = 3; //이걸 주석하면 아무리 새로고침해도 안바뀜-> fetch에서 시간 설정 가능

const page = async () => {
  // throw new Error();  //에러 컴포넌트 테스트용

  const products = await getProducts();

  console.log("서버 컴포넌트 테스트");
  //웹 콘솔에는 안찍히고 vscode터미널에만 찍힘
  console.log(os.hostname());
  // 서버 컴포넌트에서는 서버상의 파일 접근 가능

  return (
    <>
      <h1>제품 페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Meow />
    </>
  );
};

export default page;
