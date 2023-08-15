'use client';
import { SimpleForm } from '@/components/Form/SimpleForm';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PaginationTable } from '@/components/Table/PaginationTable';

export default function Form() {

	return (
		<PageContainer title="Users">
			<PaginationTable/>
		</PageContainer>
	);
}
