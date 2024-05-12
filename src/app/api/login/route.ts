import prisma from '@/lib/db';
import { signJwtAccessToken } from '@/lib/jwt';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';
interface RequestBody {
  email: string;
  password: string;
}

export const POST = async (request: Request) => {
  try {
    const body: RequestBody = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return new Response('User not found', { status: 400 });
    }

    const isMatch = await compare(body.password, user.password!);
    if (!isMatch) {
      return new Response('Password is not correct', { status: 400 });
    }

    const { password, ...data } = user;
    const extractedData = {
      id: data.id,
      role: data.role,
      email: data.email,
    };
    const accessToken = signJwtAccessToken(extractedData);
    const result = { ...extractedData, accessToken };
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
