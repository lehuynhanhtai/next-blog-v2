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
      return NextResponse.json({ message: 'Người dùng đã tồn tại' }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await hash(body.password, 10),
      },
    });
    const { password, ...dataUser } = user;
    return NextResponse.json({ message: 'Đăng ký thành công', data: dataUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Lỗi server' }, { status: 500 });
  }
};
