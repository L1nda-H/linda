"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import Slider from './slider';

import { characterdesign } from '@/lib/galleryimgs';
import { graphictees } from '@/lib/galleryimgs';

export default function Gallery() {
  const { ref } = useSectionInView("Gallery", .5);

  return (
    <section id='gallery' ref={ref}>
      <SectionHeading>Gallery</SectionHeading>
      <p className=' font-normal pb-8 text-center'>Besides programming, I also enjoy creating and drawing! Here are some works I've made for classes, for others, and for fun throughout the past years.</p>

      <Slider category={characterdesign} caption='PMA 3614: Creative Character Design.' />
      <Slider category={graphictees} caption='TShirt Graphics Designed for Various Clubs.' />
    </section>
  )
}
