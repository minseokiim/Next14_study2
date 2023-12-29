import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

// 함수 추출 장점 : 유닛테스트 할 때도 편함
export async function getProducts(): Promise<Product[]> {
  //경로
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  //slug전달해주면 변환. 제품의 객체 리턴

  const products = await getProducts();
  return products.find((item) => item.id === id);
}
