import prisma from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

interface RequestBody {
    email: string;
    password: string;
    name: string;
}
export const POST = async (request: Request, response: Response) => {
    try {
        const body: RequestBody = await request.json();
        const existUser = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        });

        if (existUser) {
            return NextResponse.json({ message: 'User already exist' }, { status: 400 });
        }
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: await hash(body.password, 10),
            },
        });
        const { password, ...dataUser } = user;
        return NextResponse.json({ message: 'Success', data: dataUser }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
};
