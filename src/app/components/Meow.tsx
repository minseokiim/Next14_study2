"use client"; //클라이언트 컴포넌트
import React from "react";
import { useState, useEffect } from "react";

const Meow = () => {
  // ssg로 하자니 똑같은 페이지라 재미 없음
  // 근데 사소한 재미용으로 ssr을 하자니 부하가 클거 같음
  // 동적이지만 나중에 렌더링 되어도 되는 중요하지 않은건 csr!

  //컴포넌트가 마운트 될 때 딱 한번만 실행하고 싶음. 어떻게 해?
  //-> ui컴포넌트는 상태에서 업데이트 되어야 함
  const [text, setText] = useState("데이터 준비중입니당..!");

  useEffect(() => {
    const res = fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article>{text}</article>;
};

export default Meow;
