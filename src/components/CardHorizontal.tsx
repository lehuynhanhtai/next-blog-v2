import { Bookmark, MessageSquareDashed, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CardHorizontal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 dark:text-white">
      <div className="relative h-72 sm:h-44 lg:h-52">
        <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover" />
      </div>
      <div className="col-span-2 flex flex-col pt-4 sm:pt-0">
        <div className="flex justify-between">
          <div className="uppercase text-sm hover:font-bold">Quan điểm và Xã hội</div>
          <Bookmark />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="py-4">
            <div className="pb-0 sm:pb-4 text-2xl font-bold">Tay guitar cừ khôi</div>
            <div>Nội dung</div>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-2">
              <div className="relative  w-16 h-16 sm:w-12 sm:h-12">
                <Image src="/book1.jpg" alt="" fill sizes="(max-width: 600px) 100vw, 33vw" priority className="object-cover rounded-full" />
              </div>
              <div>
                <div className="text-md">Lehuynhanhtai</div>
                <div className="text-sm">12/12/2024</div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-1">
                <ThumbsUp />
                <span>1</span>
              </div>
              <div className="flex gap-1">
                <MessageSquareDashed />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
