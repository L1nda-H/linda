"use client";

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
      className="w-full max-w-[76rem]"
      id='projects'>
      <SectionHeading>Projects</SectionHeading>
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-5 md:max-w-[50rem] md:grid-cols-2 md:gap-x-8 md:gap-y-6 md:[&>*:nth-child(even)]:mt-14 xl:max-w-none xl:grid-cols-3 xl:[&>*:nth-child(even)]:mt-0 xl:[&>*:nth-child(3n+2)]:!mt-8 xl:[&>*:nth-child(3n)]:!mt-16">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.section>

  )
}
