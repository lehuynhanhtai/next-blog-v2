'use client';
import { changePassword } from '@/services/auth-services';
import { getAllUsers } from '@/services/user-services';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FormForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    newPassword: '',
  });
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (formData.email) {
      fetchData();
    }
  }, [formData.email]);
  const fetchData = async () => {
    const response = await getAllUsers();
    if (response && response.data) {
      setUsers(response.data);
    }
  };

  const checkDuplicateEmail = (email: string) => {
    const found = users.some((user: any) => user.email === email);
    setIsEmailDuplicate(found);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await changePassword(formData);
    if (res.status === 200) {
      toast.success(res.data.message);
      router.push('/auth/login');
    }
    if (res.status !== 200) {
      toast.error(res.data.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Tài khoản
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Nhập tài khoản"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setIsEmailDuplicate(false);
            }}
            onBlur={(e) => checkDuplicateEmail(e.target.value)}
          />
          {isEmailDuplicate && (
            <FontAwesomeIcon className="absolute right-1" icon={faCheckCircle} style={{ color: '#63E6BE' }} />
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Mật khẩu
          </label>
        </div>
        <div className="mt-2 relative flex items-center">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {/* thêm icon ở đây */}
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute right-1 cursor-pointer"
            onClick={togglePasswordVisibility}
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
            id="new-password"
            name="new-password"
            type="password"
            autoComplete="new-password"
            placeholder="Nhập mật khẩu mới"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={formData.newPassword}
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
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
