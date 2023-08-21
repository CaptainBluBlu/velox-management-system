import { navLinks } from '@/config';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavItem } from '@/types/nav-item';
import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
} from '@tabler/icons-react';

const meta: Meta<typeof Navbar> = {
	title: 'Components/Navbar',
	component: Navbar,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const navLink2: NavItem[] = [
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
];

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
	render: () => <Navbar data={navLink2} />,
};
