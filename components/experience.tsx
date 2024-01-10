"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section id='experience' ref={ref} className='scroll-mt-12 mb-12 sm:mb-40'>
      <SectionHeading>Experience</SectionHeading>
      <p className='mb-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index} >
            <VerticalTimelineElement visible={true}
              icon={item.icon}
              iconStyle={{
                boxShadow: "none",
                color: "#0c4a6e",
                backgroundColor: "#f0f9ff",
                border: "0.25rem solid #0c4a6e",
                fontSize: "1.5rem"
              }}
              date={item.date}
              dateClassName='text-sky-900/90'
              contentArrowStyle={{
                borderRight: '0.75rem solid #0c4a6e',
              }}
              className='shadow-none'
              contentStyle={{
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                background: "white",
                borderRadius: "20px",
                padding: "1.25rem 1.75rem",
              }}>
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-0'>{item.location}</p>
              <p className='text-sky-900/70'>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>

  )
}
