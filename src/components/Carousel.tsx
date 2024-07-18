'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        watchSlidesProgress
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-64 sm:h-80 md:h-96 lg:h-[40rem] "
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

export default Carousel;
