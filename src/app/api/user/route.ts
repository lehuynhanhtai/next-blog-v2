import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        post: true,
        comment: true,
        chatRoom: true,
        message: true,
        members: true,
      },
    });
    // exclude password field
    const dataUsers = users.map(({ password, ...rest }) => rest);

    return NextResponse.json(dataUsers, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
