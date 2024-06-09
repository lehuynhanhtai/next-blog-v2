import FormRegister from '@/components/auth/FormRegister';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Đăng ký tài khoản
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormRegister />
      </div>
    </div>
  );
};

export default RegisterPage;
