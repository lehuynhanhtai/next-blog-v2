import CardPost from '@/components/CardHorizontal';
import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
import CategoryPopular from '@/components/CategoryPopular';
import Panigation from '@/components/Panigation';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function Home({ searchParams }: IProps) {
  return (
    <>
      <div>{searchParams?.message && <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}</div>
      <div>
        <Carousel />
        <CategoryPopular />
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-screen-xl py-8">
          <div className="col-span-2 md:mr-7">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Bài viết phổ biến</h2>
            <CardPost />
            <Panigation />
          </div>
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Chủ đề</h2>
            <Category />
          </div>
        </div>
      </div>
    </>
  );
}
