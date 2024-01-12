import React from 'react'
import Image from 'next/image';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

type ImageObject = {
  url: string;
  alt: string;
}

type SliderProps = {
  category: ImageObject[];
  spaceBetween?: number;
  caption: string;
}

export default function Slider({ category, spaceBetween = 30, caption }: SliderProps) {
  return (
    <section className=' mb-24 last:mb-5'>
      <p className='font-medium text-center my-4'>{caption}</p>
      <SwiperComponent className='swiper-container'
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={spaceBetween}
        grabCursor={true}
        lazyPreloaderClass='true'
        lazyPreloadPrevNext={2}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}>
        {category.map((img: ImageObject, index: number) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <Image src={img.url} alt={img.alt} height={500} quality={100} className='mx-auto' onContextMenu={(e) => e.preventDefault()} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>


  )
}
