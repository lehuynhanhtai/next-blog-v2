'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Commercial = () => {
  return (
    <div className="w-full mt-10">
      <Swiper
        watchSlidesProgress
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="h-28 sm:h-36"
      >
        <SwiperSlide>
          <Image src="/book3.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/book4.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/book1.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Commercial;
