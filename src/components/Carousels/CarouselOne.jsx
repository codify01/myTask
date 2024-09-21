import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';
import TaskCardOne from '../Cards/TaskCardOne';

const CarouselOne = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar, Autoplay]} 
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.7,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.5, 
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <SwiperSlide><TaskCardOne/></SwiperSlide>
      <div className='h-4'>

      </div>
    </Swiper>
  );
};

export default CarouselOne;
