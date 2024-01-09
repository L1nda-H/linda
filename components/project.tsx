"use client"

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps
) {
  return (
    <motion.section className=' bg-sky-100 border max-w-[42rem] rounded-2xl border-sky-950/5 overflow-hidden p-5 sm:pr-8 relative mb-8 sm:h-[22rem]'>
      <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-5 sm:max-w-[60%] flex flex-col h-full justify-center">
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-sky-800'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 '>
          {tags.map((tag, index) => (
            <li className='bg-sky-950/[0.7] px-3 py-1 text-white border rounded-full tracking-wider' key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt='Cosmic Swing Character'
        quality={95}
        className='absolute hidden sm:block w-[18rem] -right-4 top-1 -rotate-12'
      ></Image>
    </motion.section>
  )
}
