"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function Intro() {
  return (
    <motion.section className='text-center'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}>
      <div className="flex-col max-w-[56rem] sm:mx-20">
        <SectionHeading>Welcome!</SectionHeading>
        <p className="flex text-lg/6 justify-center pb-5">
          My name is Linda. I am an undergraduate student at Cornell University's College of Engineering studying Computer Science and minoring in Game Design and Film.
        </p>
        <p className="flex text-lg/6 justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </motion.section>
  )
}
