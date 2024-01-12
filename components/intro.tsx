"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa6';
import { FaPaperclip } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.8)
  return (
    <section id='home' className='scroll-mt-[100rem]' ref={ref}>
      <motion.div className="flex items-center justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <Image src={'/pfp.png'}
          width="192"
          height="192"
          quality="95"
          priority={true}
          alt="Linda profile picture"
          className='h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
      </motion.div>
      <motion.div className='flex justify-between py-5 text-4xl space-x-10 sm:space-x-5'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <a href="https://github.com/L1nda-H"
          target='blank'
          className="rounded-full border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow">
          <FaGithub className='fill-sky-950 hover:fill-sky-900 transition-color' />
        </a>
        <a href="https://www.linkedin.com/in/linda-ly-hu/"
          target='blank'
          className="rounded-md border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow">
          <FaLinkedin className='fill-sky-950 hover:fill-sky-900 transition-color' />
        </a>
        <a href=""
          className="rounded-full border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow">
          <FaPaperclip className='fill-sky-950 hover:fill-sky-900 transition-color' />
        </a>
      </motion.div>
    </section>

  )
}
