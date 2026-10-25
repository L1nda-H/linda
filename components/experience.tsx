"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <section id='experience' className='sm:mb-20'>
      <SectionHeading>Experience</SectionHeading>
      <p className='mb-10 text-center'>Some of the organizations and activities I've had the opportunity to contribute to throughout college so far.</p>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index} >
            <VerticalTimelineElement visible={true}
              icon={item.icon}
              iconStyle={{
                boxShadow: "none",
                color: "var(--timeline-icon)",
                backgroundColor: "var(--timeline-icon-bg)",
                border: "0.25rem solid var(--timeline-icon)",
                fontSize: "1.5rem"
              }}
              date={item.date}
              dateClassName='text-sky-900/90 dark:text-sky-100'
              contentArrowStyle={{
                borderRight: '0.75rem solid var(--timeline-card)',
              }}
              className='shadow-none'
              contentStyle={{
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                background: "var(--timeline-card)",
                color: "var(--timeline-text)",
                borderRadius: "20px",
                padding: "1.25rem 1.75rem",
              }}>
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-0'>{item.location}</p>
              <p className='text-sky-900/70 dark:text-sky-100'>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>

  )
}
