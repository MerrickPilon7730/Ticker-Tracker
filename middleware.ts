import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

console.log('Running in Edge?', typeof process.env.CLERK_SECRET_KEY === 'undefined');
console.log('CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};