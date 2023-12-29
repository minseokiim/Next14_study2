"use client"; //클라이언트 컴포넌트
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      컴포넌트당
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        숫자 증가 시키기 버튼
      </button>
    </div>
  );
};

export default Counter;
