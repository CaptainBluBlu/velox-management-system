import {prisma} from 'db';
import { NextResponse } from 'next/server';

export async function GET(request) {

    try {
        await prisma.$connect();

        return new Response('Connected to database', { status: 200 });


    } catch (error) {
        return new Response('Error connecting to database', { status: 500 });
    }

}