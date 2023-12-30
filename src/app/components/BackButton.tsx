"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/products");
        }}
      >
        제품 페이지로 이동
      </button>
    </div>
  );
};

export default BackButton;
