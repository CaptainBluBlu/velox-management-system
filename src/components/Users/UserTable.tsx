'use client';

import { Paper, Space, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import Demo from './UserModal';
import UserModal from './UserModal';

type User = {
	id: number;
	username: string;
	password: string;
};

const data: User[] = [
	{
		id: 1,
		username: 'admin',
		password: 'admin',
	},
	{
		id: 2,
		username: 'user',
		password: 'user',
	},
];

export const UserTable = () => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<User>[]>(
		() => [
			{
				accessorKey: 'id', //access nested data with dot notation
				header: 'ID',
			},
			{
				accessorKey: 'username',
				header: 'Username',
			},
			{
				accessorKey: 'password', //normal accessorKey
				header: 'Password',
			},
		],
		[]
	);

	return (
		<Paper withBorder radius="md" p="md">
			<Title order={5}>Simple</Title>
			<UserModal />
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={data}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
			/>
		</Paper>
	);
};
