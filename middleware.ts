import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import type { ClerkMiddlewareAuth } from "@clerk/nextjs/server";

// List of public routes that don't require authentication
const publicRoutes: string[] = [
  "/",
  "/sign-in*",
  "/sign-up*",
  "/api*"
];

function isPublic(path: string): boolean {
  return publicRoutes.some((route) => 
    path.match(new RegExp(`^${route.replace('*', '.*')}$`))
  );
}

export default clerkMiddleware(async (auth: ClerkMiddlewareAuth, req) => {
  // Check if the current path is public
  const path = req.nextUrl.pathname;
  
  if (isPublic(path)) {
    return NextResponse.next();
  }
  
  // Get the authentication status
  const isAuthenticated = (await auth()).userId;
  
  // If not authenticated and not a public route, redirect to sign-in
  if (!isAuthenticated) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: [
    "/((?!.*\\.).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};