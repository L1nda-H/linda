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
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sky-800 dark:text-sky-100 sm:text-base">{description}</p>
      <div className="pointer-events-none relative -mb-8 mt-6 h-40 w-40 origin-top self-end -rotate-12 transition-transform duration-300 group-hover:-rotate-[20deg] group-even:origin-top group-even:self-start group-even:rotate-12 group-even:group-hover:rotate-[20deg] sm:-mb-10 sm:mt-7 sm:h-44 sm:w-44">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="11rem"
          className="object-contain object-top"
        />
      </div>
      <ul className="absolute bottom-5 left-5 z-10 flex flex-col items-start gap-1.5 group-even:left-auto group-even:right-5 group-even:items-end">
        {tags.map((tag, index) => (
          <li className="whitespace-nowrap rounded-full border bg-sky-950/[0.7] px-3 py-1 text-sm tracking-wider text-white dark:border-sky-950/10 dark:bg-sky-100 dark:text-sky-950" key={index}>{tag}</li>
        ))}
      </ul>
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
      className="group min-w-0">
      <motion.section className="relative flex flex-col overflow-hidden rounded-2xl border border-sky-950/5 bg-sky-100 px-4 pt-4 pb-0 shadow-lg transition hover:translate-y-1 hover:shadow-none sm:px-5 sm:pt-5 dark:border-white/15 dark:bg-[#323A5E] dark:shadow-black/30">
        {projectLink ? (
          <a href={projectLink} target="_blank" rel="noreferrer" className="flex flex-col">
            <ProjectBody title={title} description={description} tags={tags} imageUrl={imageUrl} />
          </a>
        ) : (
          <ProjectBody title={title} description={description} tags={tags} imageUrl={imageUrl} />
        )}
      </motion.section>
    </motion.div>
  )
}
