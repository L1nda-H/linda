"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.40,
  });

  const { setActiveSection } = useActiveSectionContext();

  console.log(inView);

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]
  )

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      id='projects'
      ref={ref}
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
