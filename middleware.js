import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default clerkMiddleware((auth, req) => {
  // If user is NOT signed in and tries to access /dashboard, redirect them to /sign-in
  if (!auth.userId && req.nextUrl.pathname.startsWith('/dashboard')) {
    const signInUrl = new URL('/sign-in', req.nextUrl.origin)
    return NextResponse.redirect(signInUrl)
  }
})

// Apply middleware to dashboard and API routes
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*']
}
