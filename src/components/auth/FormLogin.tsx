'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import ButtonSocials from './ButtonSocials';

const FromLogin: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (res?.status === 401) {
      toast.error('Tài khoản hoặc mật khẩu không đúng');
    }
    if (res?.status === 200) {
      router.push('/');
    }
  };
  return (
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
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Mật khẩu
          </label>
          <div className="text-sm">
            <Link href="/auth/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
            onChange={e => setFormData({ ...formData, password: e.target.value })}
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
      <ButtonSocials />
      <p className="text-right">
        Bạn chưa có tài khoản?
        <Link href="/auth/register" className="ml-2 hover:text-indigo-700">
          Đăng ký
        </Link>
      </p>
    </form>
  );
};

export default FromLogin;
