"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number];

function ProjectBody({
  title,
  description,
  tags,
  imageUrl,
}: Omit<ProjectProps, "projectLink">) {
  return (
    <>
      <div className="pt-4 pb-7
        sm:pl-10 sm:pr-10 sm:pt-5 md:max-w-[60%]
        flex flex-col h-full justify-center
        md:group-even:ml-[16rem]">
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-sky-800 dark:text-sky-100'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 '>
          {tags.map((tag, index) => (
            <li className='bg-sky-950/[0.7] px-3 py-1 text-white border rounded-full tracking-wider dark:bg-sky-100 dark:text-sky-950 dark:border-sky-950/10' key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        priority={true}
        className='absolute hidden md:block md:w-[18rem] sm:w-[14rem] group-odd:-right-4 md:top-3 -rotate-12

            group-hover:-rotate-[20deg]
            transition-transform

            group-even:rotate-12
            group-even:group-hover:rotate-[20deg]
            group-even:right-[initial] group-even:-left-3'
      />
    </>
  );
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink
}: ProjectProps
) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.22 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group sm:mb-4 last:mb-0'>
      <motion.section className=' bg-sky-100 border max-w-[42rem] rounded-2xl border-sky-950/5 overflow-hidden p-5 sm:pr-8 relative group  shadow-lg hover:shadow-none transition hover:translate-y-1 dark:bg-[#323A5E] dark:border-white/15 dark:shadow-black/30'>
        {projectLink ? (
          <a href={projectLink} target='blank'>
            <ProjectBody title={title} description={description} tags={tags} imageUrl={imageUrl} />
          </a>
        ) : (
          <ProjectBody title={title} description={description} tags={tags} imageUrl={imageUrl} />
        )}
      </motion.section>
    </motion.div>
  )
}
