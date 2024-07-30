import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname === '/write' && !req.nextauth.token) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token?.role === 'ADMIN') {
      return NextResponse.rewrite(new URL('/dashboard', req.url));
    } else {
      return NextResponse.rewrite(new URL('/auth/login', req.url));
    }
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
