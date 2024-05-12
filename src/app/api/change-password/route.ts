import prisma from '@/lib/db';
import { compare, hash } from 'bcrypt';
import { NextResponse } from 'next/server';

interface RequestBody {
  email: string;
  password: string;
  newPassword: string;
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
      return NextResponse.json({ message: 'Không tìm thấy người dùng' }, { status: 400 });
    }
    const passwordMatch = await compare(body.password, user.password!);
    if (!passwordMatch) {
      return NextResponse.json({ message: 'Mật khẩu của tài khoản không đúng' }, { status: 400 });
    }
    const hasedPassword = await hash(body.newPassword, 10);
    if (passwordMatch) {
      const updateUser = await prisma.user.update({
        where: {
          email: body.email,
        },
        data: {
          password: hasedPassword,
        },
      });
      return NextResponse.json({ message: 'Đổi mật khẩu thành công', data: updateUser }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Lỗi máy chủ' }, { status: 500 });
  }
};
