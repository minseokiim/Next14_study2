import React from "react";
import Link from "next/link";
const page = () => {
  const products = ["shirt", "pants"];
  return (
    <>
      <h1>제품 페이지</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default page;
