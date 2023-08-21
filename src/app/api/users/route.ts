
import { NextResponse } from "next/server";

export async function GET(request : Request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World 2" }, { status: 200 });
}
