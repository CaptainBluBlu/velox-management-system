import { NextRequest, NextResponse } from "next/server";
import { prisma } from "db";
import { Prisma, User } from "@prisma/client";

export async function GET(request: Request) {
  // Scheduled task to check daily for
  // 1. Upcoming renewals
  // 2. Outstanding invoices
  // 3. Outstanding filing
  // 4. Outstanding jobs

  return NextResponse.json({}, { status: 200 });
}
