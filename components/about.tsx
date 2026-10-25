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
          <b>{"My name is Linda!"}</b> I am an undergraduate{" "}
          <b>{"Computer Science"}</b> student at <b>{"Cornell University"}</b>{" "}
          in the College of Engineering, graduating in Spring 2026. I have
          experience in <u>{"applied AI/ML"}</u>, <u>{"game development"}</u>,
          and <u>{"fullstack development"}</u>. Besides programming, some of my
          hobbies include designing games and drawing.
        </p>
        <p className="flex text-lg/6 justify-center"></p>
      </div>
    </motion.section>
  );
}
