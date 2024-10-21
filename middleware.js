


import { NextResponse } from "next/server";




export default async function middleware(request) {

    const url = request.nextUrl.pathname;
    if (url.split("")[1]) {
        return NextResponse.next();
    }
    else {
        return NextResponse.rewrite(new URL("/tehran", request.url))
    }
}



export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}