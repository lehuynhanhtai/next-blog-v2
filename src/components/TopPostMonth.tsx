import Image from 'next/image';
import Link from 'next/link';

export default function TopPostMonth() {
  return (
    <div className="mx-auto w-full max-w-screen-xl py-6">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white uppercase">nổi bật trong tháng</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
          <div className="relative h-32 sm:h-56">
            <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
          </div>
          <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
            <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
            <div className="flex items-center gap-2">
              <Link href={'#'} className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                </div>
                <div className="text-sm dark:text-white">Lehuynhanhtai</div>
              </Link>
              <span className="text-[12px] dark:text-white">time</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
          <div className="relative h-32 sm:h-56">
            <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
          </div>
          <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
            <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
            <Link href="#" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
              </div>
              <div className="text-sm dark:text-white">Lehuynhanhtai</div>
              <span className="text-[12px] dark:text-white">time</span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
          <div className="relative h-32 sm:h-56">
            <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
          </div>
          <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
            <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
            <Link href="#" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
              </div>
              <div className="text-sm dark:text-white">Lehuynhanhtai</div>
              <span className="text-[12px] dark:text-white">time</span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-0">
          <div className="relative h-32 sm:h-56">
            <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
          </div>
          <div className="col-span-2 flex flex-col justify-between sm:pt-3 sm:gap-2">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm dark:text-white hover:font-bold">Quan điểm - Xã Hội</span>
              <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
            <div className="text-lg font-bold dark:text-white truncate ...">Sex quá đã ssssssssssssssssssssssssssssssssssssss</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
                </div>
                <div className="text-sm dark:text-white">Lehuynhanhtai</div>
              </div>
              <span className="text-[12px] dark:text-white">time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
