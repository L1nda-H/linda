"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.20,
  });

  const { setActiveSection } = useActiveSectionContext();

  // console.log(inView);

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection]
  )

  return (
    <section id='experience' ref={ref} className='scroll-mt-12'>
      <SectionHeading>Experience</SectionHeading>
      <p className='h-[100rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>

  )
}
