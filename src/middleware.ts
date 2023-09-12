import { authOptions } from 'lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export async function middleware(req) {
	// TODO: Fix the linking issues
	console.log('It ran');

	const session = await fetch('http://localhost:3000/api/test').then(res => res.json());

	console.log(session);

	if (!session && req.nextUrl.pathname !== '/') {
		return NextResponse.redirect(new URL('/', req.url));
	}

	// if user is signed in and the current path is / redirect the user to /components/dashboard
	if (session && req.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', req.url));
	}
}

export const config = {
	matcher: ['/', '/dashboard'],
};
