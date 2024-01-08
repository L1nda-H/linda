"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function Intro() {
  return (
    <motion.section className='text-center'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
      <div className="flex-col">
        <SectionHeading>Welcome!</SectionHeading>
        <p className="flex">
          My name is Linda. I am an undergraduate student at Cornell University's College of Engineering studying Computer Science and minoring in Game Design and Film.
        </p>
      </div>
    </motion.section>
  )
}
