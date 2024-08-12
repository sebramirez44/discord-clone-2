import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/uploadthing"],
};