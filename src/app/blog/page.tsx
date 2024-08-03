import CardPost from '@/components/CardHorizontal';
import Panigation from '@/components/Panigation';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <div className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 sm:py-20 ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl uppercase">Quan Điểm - Tranh luận</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-screen-xl py-8 px-4">
        <div className="col-span-2 md:mr-7">
          <CardPost />
          <Panigation />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 shadow-lg px-4 pb-4">
              <span className="text-2xl font-bold capitalize dark:text-white">Quan điểm - tranh luận</span>
              <div className="text-justify">
                <p className="font-bold text-lg text-red-500">Nội dung cho phép</p>
                <span className="font-light dark:text-white">Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.</span>
              </div>
              <div>
                <p className="font-bold text-lg text-red-500 ">Quy định</p>
                <ul className="list-disc pl-5 space-y-2 text-justify dark:text-white">
                  <li>Những nội dung không thuộc phạm trù của danh mục sẽ bị nhắc nhở và xoá (nếu không thay đổi thích hợp)</li>
                  <li>Nghiêm cấm spam, quảng cáo</li>
                  <li>Nghiêm cấm post nội dung 18+ hay những quan điểm cực đoan liên quan tới chính trị - tôn giáo</li>
                  <li>Nghiêm cấm phát ngôn thiếu văn hoá và đả kích cá nhân.</li>
                  <li>Nghiêm cấm bài đăng không ghi rõ nguồn nếu đi cóp nhặt.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col shadow-lg bg-white dark:bg-gray-700 gap-4 p-4">
              <h2 className="text-lg font-bold mb-4 flex items-center dark:text-white">CÓ THỂ BẠN QUAN TÂM</h2>
              <div className="flex gap-4">
                <Link href="#" className="flex items-center gap-2">
                  <div className="relative w-14 h-14">
                    <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                  </div>
                </Link>
                <div className="flex flex-col dark:text-white">
                  <h3 className="text-lg font-medium line-clamp-1 ">Tại sao sách sad sad ád lại tốt asdas dasd asd asdas as asdasd asd asda sd</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-md font-medium text-red-500">LeHuynhAnhTai</span>
                    <span className="text-xs font-light">12/12/2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
