"use client";

import React from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>

  )
}
