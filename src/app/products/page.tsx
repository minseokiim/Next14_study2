import React from "react";
import Link from "next/link";
import os from "os"; //node api중 하나
import { getProducts } from "../../api/product";
import Meow from "../components/Meow";
import Image from "next/image"; //이미지 리소스 최적화
import coffeeImage from "../../../public/images/coffee.jpg"; //이미지 정적으로 가져오기

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
      <Image src={coffeeImage} alt="정적으로 가져온 이미지" priority />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="서버에서 가져온 이미지"
        width={400}
        height={400}
      />
      {/* 외부 경로에서 이미지 가져올때는 width/height 명시 필수 + nextconfig에 등록*/}
      {/* 넥스트는 이미지 최적화해줌, 이미지 사이즈 지정해줘서 이미지가 차지하는 공간 변화가 없음 -> 변화로 레이아웃 시프트 일어나지 않음 */}
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
