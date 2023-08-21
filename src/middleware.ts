import { APP_ROUTES } from "@/utils";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let authCookie = request.cookies.get("auth");

  if (authCookie?.value === "true") {
    return;
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [APP_ROUTES.PROFILE],
};
