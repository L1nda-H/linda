"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <motion.section className='text-center'
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}>
      <div className="flex-col max-w-[56rem] sm:mx-20">
        <SectionHeading>Welcome!</SectionHeading>
        <p className="text-lg/6 justify-center pb-5 leading-loose">
          My name is Linda! I am an undergraduate <b>{'Computer Science'}</b> student at <b>{'Cornell University'}</b> in the College of Engineering, graduating in Spring 2026. I have experience in <u>{'frontend development'}</u>, <u>{'backend development'}</u>, and <u>{'game architecture'}</u>. Besides programming, some of my hobbies include designing games and drawing.
        </p>
        <p className="flex text-lg/6 justify-center">
        </p>
      </div>
    </motion.section>
  )
}
