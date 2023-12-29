import React from "react";
import Link from "next/link";
import os from "os"; //node api중 하나
import { getProducts } from "./../../api/products";

export const revalidate = 3; //ISR, 3초마다

const page = async () => {
  //const products = ["shirt", "pants"]; //리팩토링 -> 서버 파일에 있는 리스트 읽어오기

  //promise를 할당해주니까 에러가 나는 것.await해주기
  const products = await getProducts();

  console.log("서버 컴포넌트 테스트");
  //웹 콘솔에는 안찍히고 vscode터미널에만 찍힘
  //서버컴포넌트는 서버에서 실행이 됨
  //이 코드는 서버에서 실행되어 pre-rendering된 html 페이지로 만들어서 html이므로 콘솔이 안찍히는 것
  //서버에서 동작하므로 브라우저에서 제공하는 api사용이 불가능하지만, node api는 사용가능
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
    </>
  );
};

export default page;
