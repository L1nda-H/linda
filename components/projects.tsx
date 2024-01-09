"use client";

import React from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      id='projects'
      className='scroll-mt-12'>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>

  )
}
