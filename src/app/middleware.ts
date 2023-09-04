import { authOptions } from "lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req) {
  // TODO: Fix the linking issues
  console.log("It ran");
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect(new URL("/components/dashboard", req.url));
  }
}

export const config = {
  // matcher: ["/profile"],
  matcher: ["/", "/dashboard"],
};
