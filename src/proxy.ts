import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'https://solidwork.systems',
  'https://www.solidwork.systems',
  process.env.NEXT_PUBLIC_SITE_URL,
].filter(Boolean);

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // CSRF: Check Origin on POST requests to API routes
  if (request.method === 'POST' && request.nextUrl.pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin');
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      // Allow localhost in development
      if (process.env.NODE_ENV !== 'development' || !origin.startsWith('http://localhost')) {
        return NextResponse.json(
          { success: false, error: 'Forbidden' },
          { status: 403 }
        );
      }
    }
  }

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://*.supabase.co",
      "frame-ancestors 'none'",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
