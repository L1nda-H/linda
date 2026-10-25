"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Intro() {
  return (
    <motion.section
      className="text-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex-col max-w-[56rem] sm:mx-20">
        <SectionHeading>Welcome!</SectionHeading>
        <p className="text-lg/6 justify-center pb-5 leading-loose">
          <b>Hi, my name is Linda.</b> I am a master&apos;s student studying{" "}
          <b>computer science</b> at <b>Cornell University</b>, graduating in
          December 2026. I enjoy thinking about <u>distributed systems</u>,{" "}
          <u>high-performance computing</u>, <u>AI/ML</u>, and{" "}
          <u>backend development</u>. Besides programming, some of my hobbies
          include game design, drawing, film, and photography.
        </p>
        <p className="flex text-lg/6 justify-center"></p>
      </div>
    </motion.section>
  );
}
