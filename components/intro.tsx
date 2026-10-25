"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa6';
import { FaPaperclip } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

export default function Intro() {
  return (
    <section id='home'>
      <motion.div className="flex items-center justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <Image src={'/pfp.png'}
          width="192"
          height="192"
          quality="95"
          priority={true}
          alt="Linda profile picture"
          className='h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-[#12162A]' />
      </motion.div>
      <motion.div className='flex justify-between py-5 text-4xl space-x-10 sm:space-x-5'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <a href="https://github.com/L1nda-H"
          target='blank'
          className="rounded-full border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow dark:border-[#12162A]">
          <FaGithub className='fill-sky-950 hover:fill-sky-900 transition-color dark:fill-sky-100 dark:hover:fill-white' />
        </a>
        <a href="https://www.linkedin.com/in/linda-ly-hu/"
          target='blank'
          className="rounded-md border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow dark:border-[#12162A]">
          <FaLinkedin className='fill-sky-950 hover:fill-sky-900 transition-color dark:fill-sky-100 dark:hover:fill-white' />
        </a>
        <a href="Hu-Linda-CV.pdf"
          download="Hu-Linda-CV.pdf"
          target='blank'
          className="rounded-full border-[0.2rem] border-white shadow-md hover:shadow-none transition-shadow dark:border-[#12162A]">
          <FaPaperclip className='fill-sky-950 hover:fill-sky-900 transition-color dark:fill-sky-100 dark:hover:fill-white' />
        </a>
      </motion.div>
    </section>

  )
}
