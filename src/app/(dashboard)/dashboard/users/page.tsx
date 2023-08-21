"use client";
import { SimpleForm } from "@/components/Form/SimpleForm";
import { PageContainer } from "@/components/PageContainer/PageContainer";
import { PaginationTable } from "@/components/Table/PaginationTable";
import { UserTable } from "@/components/Users/UserTable";

export default function Form() {
  return (
    <PageContainer title="Users">
      <UserTable />
    </PageContainer>
  );
}
