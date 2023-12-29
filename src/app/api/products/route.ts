import { getProducts } from "@/api/product";
import { NextResponse } from "next/server";

//라우트 핸들러
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
