'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { getAllUsers } from '@/services/user-services';
import { register } from '@/services/auth-services';

const FormRegister: React.FC = () => {
  const router = useRouter();
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (formData.email) {
      fetchData();
    }
  }, [formData.email]);

  const fetchData = async () => {
    const response = await getAllUsers();
    if (response && response.data) {
      setDataUser(response.data);
    }
  };

  const checkDuplicateEmail = (email: string) => {
    const found = dataUser.some((user: any) => user.email === email);
    setIsEmailDuplicate(found);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await register(formData);

    if (res.status === 200) {
      toast.success(res.data.message);
      router.push('/auth/login');
    }

    if (res.status !== 200) {
      toast.error(res.data.message);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tên hoặc Nick Name
        </label>
        <input
          required
          id="name"
          name="name"
          type="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="boy_vip"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tài khoản
        </label>
        <input
          required
          type="text"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="boyvip_535"
          onChange={e => {
            setFormData({ ...formData, email: e.target.value });
            setIsEmailDuplicate(false);
          }}
          onBlur={e => checkDuplicateEmail(e.target.value)}
        />
        {isEmailDuplicate && <p className=" text-red-500 text-sm mt-1">Tài khoản đã tồn tại trong hệ thống.</p>}
      </div>
      <div className="relative">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mật khẩu
        </label>
        <div className="flex items-center">
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute right-1 cursor-pointer" onClick={togglePasswordVisibility} />
        </div>
      </div>
      <div>
        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nhập lại mật khẩu
        </label>
        <input
          required
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={retypePassword}
          onChange={e => setRetypePassword(e.target.value)}
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            required
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300" aria-required>
            Tôi chấp nhận{' '}
            <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
              Các điều khoản và điều kiện
            </Link>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full dark:text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Tạo tài khoản
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Bạn đã sẵn sàng tạo tài khoản chưa?{' '}
        <Link href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Đăng nhập
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
