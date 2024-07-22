import Image from 'next/image';
import Link from 'next/link';

export default function CardHorizontal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 dark:text-white">
      <div className="relative min-h-72 md:min-h-52">
        <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
      </div>
      <div className="col-span-2 flex flex-col pt-4 sm:pt-0">
        <div className="flex justify-between">
          <div className="uppercase text-sm hover:font-bold">Quan điểm và Xã hội</div>
          <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
          </svg>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="py-4">
            <div className="pb-0 sm:pb-4 text-2xl font-bold">Tay guitar cừ khôi</div>
            <div>Nội dung</div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="relative  w-16 h-16">
                <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
              </div>
              <div>
                <div className="text-md">Lehuynhanhtai</div>
                <div className="text-sm">12/12/2024</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex">
                <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span>1</span>
              </div>
              <div className="flex">
                <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd" />
                </svg>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
