import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from 'db';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Sign in',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'Username',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials): Promise<any> {
				if (!credentials?.username || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { username: credentials.username },
				});

				if (!user) {
					return null;
				}

				if (user.password !== credentials.password) {
					return null;
				}

				console.log('user', user);

				return {
					id: user.id,
					name: user.name,
					username: user.username,
					randomKey: 'randomValue',
				};
				//const user = { id: "1", name: "Admin", email: "admin@admin.com" };
			},
		}),
	],
	callbacks: {
		// TODO : There is an issue of session loading wrong data
		session: ({ session, token }) => {
			console.log('Session Callback', { session, token });
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					randomKey: token.randomKey,
				},
			};
		},
		jwt: ({ token, user }) => {
			console.log('JWT Callback', { token, user });
			if (user) {
				const u = user as unknown as any;
				return {
					...token,
					id: u.id,
					randomKey: u.randomKey,
				};
			}
			return token;
		},
	},
};
