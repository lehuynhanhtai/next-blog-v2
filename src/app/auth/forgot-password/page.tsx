import FormForgotPassword from '@/components/auth/FormForgotPassword';
import { NextPage } from 'next';

const ForgotPassword: NextPage = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Đổi mật khẩu</h2>
          <FormForgotPassword />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
