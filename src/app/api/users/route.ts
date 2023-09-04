
import { NextRequest, NextResponse } from "next/server";
import { prisma } from 'db';
import { Prisma, User } from "@prisma/client";

export async function GET(request : Request) {

  const users: User[] = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}


export async function POST(request: NextRequest) {

  const body: Prisma.UserCreateInput = await request.json();

  const user = await prisma.user.create({
    data: body,
  });

  console.log(user)

  return NextResponse.json(user, { status: 200 });
}
