"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className='bg-sky-200 mt-24 mb-8 h-16 w-1 rounded-full hidden sm:block'
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}></motion.div>
  )
}
