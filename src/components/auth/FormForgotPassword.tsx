'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FormForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [newPassword, setNewPassword] = useState('');
  const handleSubmit = () => {};
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
            type="email"
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
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Nhập mật khẩu mới
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu mới"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sửa mật khẩu
        </button>
      </div>
      {/* BUTTON GROUP SOCIAL */}
      <div className="flex items-center justify-center gap-8">
        <button>
          <Image src="/google.png" alt="Google" width={30} height={30} />
        </button>
        <button>
          <Image src="/facebook.png" alt="Google" width={30} height={30} />
        </button>
        <button>
          <Image src="/github.png" alt="Google" width={30} height={30} />
        </button>
      </div>

      <p className="text-right">
        Quay lại
        <Link href="/auth/login" className="ml-2 hover:text-indigo-700">
          đăng nhập
        </Link>
      </p>
    </form>
  );
};

export default FormForgotPassword;
