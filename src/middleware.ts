import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // xử lý code ở đây
    if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token?.role === 'ADMIN') {
      return NextResponse.rewrite(new URL('/dashboard', req.url));
    } else {
      // return NextResponse.redirect(new URL('/', req.url));
      return NextResponse.rewrite(new URL('/auth/login?message=Bạn không phải là ADMIN!', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ['/dashboard/:path*'],
};
