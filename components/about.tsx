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
      <div className="flex-col">
        <SectionHeading>Welcome!</SectionHeading>
        <p className="flex text-lg/6">
          My name is Linda. I am an undergraduate student at Cornell University's College of Engineering studying Computer Science and minoring in Game Design and Film.
        </p>
      </div>
    </motion.section>
  )
}
