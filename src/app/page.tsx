import CardPost from '@/components/CardHorizontal';
import CardPopular from '@/components/CardPopular';
import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
import CategoryPopular from '@/components/CategoryPopular';
import Commercial from '@/components/Commercial';
import Panigation from '@/components/Panigation';
import TopPostMonth from '@/components/TopPostMonth';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function Home({ searchParams }: IProps) {
  return (
    <>
      <div>{searchParams?.message && <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}</div>
      <Carousel />
      <CategoryPopular />
      <div className="mx-auto w-full max-w-screen-xl py-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Phổ biến trên S-BLOG</h2>
        <CardPopular />
        <Commercial />
      </div>
      <div className="w-full dark:bg-slate-600 bg-slate-100">
        <TopPostMonth />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-screen-xl py-8">
        <div className="col-span-2 md:mr-7">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Dành cho bạn</h2>
          <CardPost />
          <Panigation />
        </div>
        <div className="hidden md:block">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">Chủ đề</h2>
          <Category />
        </div>
      </div>
    </>
  );
}
