"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function Intro() {
  return (
    <motion.section className='text-center'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
      <div className="flex items-center justify-center">
        <div>
          <Image src={'/pfp.png'}
            width="192"
            height="192"
            quality="95"
            priority={true}
            alt="Linda profile picture"
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
        </div>
      </div>
      <div className="flex-col">
        <SectionHeading>About Me</SectionHeading>
        <p className="flex">
          Hi! My name is Linda. I am an undergraduate student at Cornell University's College of Engineering studying Computer Science and minoring in Game Design and Film.
        </p>
      </div>

    </motion.section>
  )
}
