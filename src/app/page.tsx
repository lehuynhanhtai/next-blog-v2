import Carousel from '@/components/Carousel';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function Home({ searchParams }: IProps) {
  return (
    <>
      <div>{searchParams?.message && <p className="text-center text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}</div>
      <div>
        <Carousel />
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          {/* Add your category content here */}
        </div>

        <div className="flex-grow mx-auto w-full max-w-screen-xl py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 border">
              <h2 className="text-2xl font-bold mb-4">Card</h2>
              {/* Add your card content here */}
            </div>
            <div className="hidden md:block md:w-1/3 border">
              <h2 className="text-2xl font-bold mb-4">Menu</h2>
              {/* Add your menu content here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
