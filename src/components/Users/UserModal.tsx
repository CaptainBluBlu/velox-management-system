import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput, Text } from '@mantine/core';
import UserCreateForm from './UserCreateForm';

const UserModal = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} title="Add a New User" size="sm">
				<UserCreateForm />
			</Modal>

			<Group position="right">
				<Button onClick={open}>Add User</Button>
			</Group>
		</>
	);
};

export default UserModal;
