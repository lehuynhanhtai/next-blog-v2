import Image from 'next/image';
import Link from 'next/link';

export default function CardPopular() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="grid grid-cols-3 gap-2">
        <div className="relative h-28 md:h-32 lg:h-36">
          <Image src="/book2.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex justify-between dark:text-white">
            <Link href="#" className="uppercase text-sm hover:font-bold">
              Quan điểm - Xã Hội
            </Link>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
            </svg>
          </div>
          <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
          <div className="flex justify-between items-center ">
            <Link href="#" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
              </div>
              <div className="text-md dark:text-white">Lehuynhanhtai</div>
            </Link>
            <div className="flex gap-2">
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className="text-sm dark:text-white">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
