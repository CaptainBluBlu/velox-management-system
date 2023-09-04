"use client";
import { SimpleForm } from "@/components/Form/SimpleForm";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { PaginationTable } from "@/components/Table/PaginationTable";
import { UserTable } from "@/components/Users/UserTable";

// fetch the user data from prisma

// const fetchUsers = async () => {
// 	try {
// 		const response = await fetch('/api/users');
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };


export default function Form() {
  return (
    <PageContainer title="Users">
      <UserTable />
    </PageContainer>
  );
}
