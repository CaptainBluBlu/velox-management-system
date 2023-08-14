'use client';
import { SimpleForm } from '@/components/Form/SimpleForm';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.js';
import { useEffect, useState } from 'react';

export default function Form() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		const querySnapshot = await getDocs(collection(db, 'users'));
		querySnapshot.forEach(doc => {
			console.log(`${doc.id} => ${doc.data()}`);
		});
	};

	return (
		<PageContainer title="Users">
			<SimpleForm />
		</PageContainer>
	);
}
