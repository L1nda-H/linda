import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-24 px-10 text-center text-sky-950/90 dark:text-sky-100/90'>
      <small className='mb-2 block text-xs'>
        &copy; 2024 Linda. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React & Next.js, TypeScript, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  )
}
