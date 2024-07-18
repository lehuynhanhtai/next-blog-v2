'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { changePassword } from '@/services/auth-services';
import { getAllUsers } from '@/services/user-services';

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
    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tài khoản
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nhập tài khoản"
          required
          value={formData.email}
          onChange={e => {
            setFormData({ ...formData, email: e.target.value });
            setIsEmailDuplicate(false);
          }}
          onBlur={e => checkDuplicateEmail(e.target.value)}
        />
        {isEmailDuplicate && <FontAwesomeIcon className="absolute right-1" icon={faCheckCircle} style={{ color: '#63E6BE' }} />}
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mật khẩu
        </label>
        <div className="relative flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Nhập mật khẩu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute right-1 cursor-pointer" onClick={togglePasswordVisibility} />
        </div>
      </div>
      <div>
        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Xác nhận lại mật khẩu
        </label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          placeholder="Nhập mật khẩu mới"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={formData.newPassword}
          onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="newsletter"
            aria-describedby="newsletter"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">
            Tôi chấp nhận{' '}
            <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
              Các điều khoản và điều kiện
            </Link>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full border dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Xác nhận
      </button>
    </form>
  );
};

export default FormForgotPassword;
