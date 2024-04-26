import FromLogin from '@/components/auth/FormLogin';
import { NextPage } from 'next';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Login: NextPage = ({ searchParams }: IProps) => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8 ">
      {searchParams?.message && (
        <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Đăng nhập</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FromLogin />
      </div>
    </div>
  );
};

export default Login;
