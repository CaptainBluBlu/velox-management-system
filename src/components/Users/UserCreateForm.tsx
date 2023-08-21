import React, { useState } from 'react';
import { Group, Button, TextInput, Text } from '@mantine/core';

const addUser = async (username, password) => {
	try {
		const response = await fetch('/api/users/create-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

const UserCreateForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(true); // Add state for form validation

	const handleUsernameChange = event => {
		setUsername(event.target.value);
		validateForm(event.target.value, password);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
		validateForm(username, event.target.value);
	};

	const validateForm = (newUsername, newPassword) => {
		// Basic form validation
		const isValid = newUsername.trim() !== '' && newPassword.trim() !== '';
		setIsFormValid(isValid);
	};

	const handleSubmit = () => {
		// Implement your logic to add the new user here
		console.log('Username:', username);
		console.log('Password:', password);

		// Call the function with username and password
		addUser(username, password);

		// Close the modal after submission
		close();
	};
	return (
		<div>
			<TextInput
				label="Username"
				value={username}
				onChange={handleUsernameChange}
				error={!isFormValid} // Show error if form is not valid
				style={{ marginBottom: 16 }}
			/>
			<TextInput
				label="Password"
				type="password"
				value={password}
				onChange={handlePasswordChange}
				error={!isFormValid} // Show error if form is not valid
				style={{ marginBottom: 16 }}
			/>
			{!isFormValid && (
				<Text size="sm" color="red">
					Please fill in both fields.
				</Text>
			)}
			<Group position="right">
				<Button onClick={close} color="red">
					Cancel
				</Button>
				<Button
					disabled={!isFormValid} // Disable button if form is not valid
					onClick={handleSubmit}
					color="blue"
				>
					Add User
				</Button>
			</Group>
		</div>
	);
};

export default UserCreateForm;
