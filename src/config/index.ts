import { NavItem } from '@/types/nav-item';
import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
	IconUser,
} from '@tabler/icons-react';

export const navLinks: NavItem[] = [
	{ label: 'Dashboard', icon: IconDashboard, link: '/dashboard' },

	{
		label: 'Components',
		icon: IconComponents,
		initiallyOpened: true,
		links: [
			{
				label: 'Table',
				link: '/dashboard/table',
			},
			{
				label: 'Form',
				link: '/dashboard/form',
			},
		],
	},
	{
		label: 'Users',
		// user icon
		icon: IconUser,
		initiallyOpened: true,
		links: [
			{
				label: 'View Users',
				link: '/dashboard/users',
			},
		],
	},
	{
		label: 'Auth',
		icon: IconLock,
		initiallyOpened: true,
		links: [
			{
				label: 'Login',
				link: '/login',
			},
			{
				label: 'Register',
				link: '/register',
			},
		],
	},
	{
		label: 'Sample',
		icon: IconMoodSmile,
		initiallyOpened: true,
		links: [
			{
				label: 'Landing',
				link: '/',
			},
		],
	},
];
