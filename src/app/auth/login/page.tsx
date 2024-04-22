'use client';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

interface IProps {
    searchParams?: { [key: string]: string | string[] | undefined };
}

const Login: NextPage = ({ searchParams }: IProps) => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: true,
        });
    };

    return (
        <div className="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 ">
            {searchParams?.message && (
                <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>
            )}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Đăng nhập
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Tài khoản
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Nhập tài khoản"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Mật khẩu
                            </label>
                            <div className="text-sm">
                                <Link
                                    href="/forgotpassword"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Quên mật khẩu
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Nhập mật khẩu"
                                required
                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                        {/* <button onClick={() => signIn('google')}>
                            <Image src="/google.png" alt="Google" width={30} height={30} />
                        </button>
                        <button>
                            <Image src="/facebook.png" alt="Google" width={30} height={30} />
                        </button>
                        <button>
                            <Image src="/github.png" alt="Google" width={30} height={30} />
                        </button> */}
                    </div>
                    <p className="text-right">
                        Bạn chưa có tài khoản?
                        <Link href="/auth/register" className="ml-2 hover:text-indigo-700">
                            Đăng ký
                        </Link>
                    </p>
                </form>
                <button onClick={() => signOut()}>logout</button>
            </div>
        </div>
    );
};

export default Login;
