import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어 실행중");

  if (request.nextUrl.pathname.startsWith("/products/10125")) {
    console.log("미들웨어: 경로 리다이렉팅");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

//일부만 되게
export const config = {
  matcher: ["/products/:path+"],
};
