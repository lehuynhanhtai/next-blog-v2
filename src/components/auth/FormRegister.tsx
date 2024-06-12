'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { getAllUsers } from '@/services/user-services';
import { register } from '@/services/auth-services';
import ButtonSocials from './ButtonSocials';
const FormRegister: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Tên
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            placeholder="Tên hoặc Nick Name"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Tài khoản
        </label>
        <div className=" mt-2">
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="Nhập tài khoản"
            required
            className={`block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value });
              setIsEmailDuplicate(false);
            }}
            onBlur={e => checkDuplicateEmail(e.target.value)}
          />
          {/* kiem tra email co ton tai trong database */}
          {isEmailDuplicate && <p className=" text-red-500 text-sm mt-1">Tài khoản đã tồn tại trong hệ thống.</p>}
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
            className=" block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          {/* thêm icon ở đây */}
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute right-1 cursor-pointer" onClick={togglePasswordVisibility} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Nhập lại mật khẩu
          </label>
        </div>
        <div className="relative mt-2 flex items-center">
          <input
            id="retype-password"
            name="retype-password"
            type="password"
            autoComplete="retype-password"
            placeholder="Nhập lại mật khẩu"
            required
            value={retypePassword}
            onChange={e => setRetypePassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {retypePassword && retypePassword == formData.password ? <FontAwesomeIcon className="absolute right-1" icon={faCheckCircle} style={{ color: '#63E6BE' }} /> : <></>}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Đăng ký
        </button>
      </div>
      {/* GROUP BUTTON SOCIAL */}
      <ButtonSocials />
      <p className="text-right">
        Quay lại
        <Link href="/auth/login" className="ml-2 hover:text-indigo-700">
          đăng nhập
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
