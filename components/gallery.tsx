"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { characterdesign } from '@/lib/images';
import Image from 'next/image';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Gallery() {
  const { ref } = useSectionInView("Gallery", .5);

  return (
    <section id='gallery' ref={ref}>
      <SectionHeading>Gallery</SectionHeading>
      <p className=' font-medium pb-8'>Besides programming, I also enjoy creating and drawing! Here are some works I've made for classes, for others, and for fun.</p>
      <SwiperComponent className='swiper-container'
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}>
        {characterdesign.map((img, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <Image src={img.url} alt={img.alt} height={500} quality={100} className='mx-auto' onContextMenu={(e) => e.preventDefault()} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>
  )
}
