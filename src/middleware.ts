import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl;

    // Check if the user is trying to access the /dashboard path
    if (url.pathname.startsWith('/dashboard') && req.nextauth.token?.role === 'ADMIN') {
      return NextResponse.rewrite(new URL('/dashboard', req.url));
    }

    // Check if the user is trying to access the /write path
    if (url.pathname.startsWith('/write')) {
      // If the user is not logged in, redirect to /
      if (!req.nextauth.token) {
        return NextResponse.redirect(new URL('/', req.url));
      }
      // If logged in, allow access to /write
      return NextResponse.next();
    }

    // Default redirection to login for unauthorized access
    return NextResponse.rewrite(new URL('/auth/login', req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ['/dashboard/:path*', '/write'],
};
