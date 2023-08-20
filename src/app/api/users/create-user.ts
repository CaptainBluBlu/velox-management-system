// pages/api/add-user.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  console.log("Fired")

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  } finally {
    await prisma.$disconnect();
  }
}
