import React from "react";
import { FaGear } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import cosmicswing from "@/public/cosmicswing.png";
import secretclarkson from "@/public/secretclarkson.png"
import fotl from "@/public/fotl.gif"
import codeicon from "@/public/codeicon.svg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Gallery",
    hash: "#gallery"
  }
] as const;

export const experiencesData = [
  {
    title: "Combat Robotics @ Cornell",
    location: "Ithaca, NY",
    description:
      "I joined the Combat Robotics @ Cornell Project Team's Marketing Subteam and worked on projects ranging from video games to Giving Day planning to website maintenance.",
    icon: React.createElement(FaGear),
    date: "October 2022 - Present",
  },
  {
    title: "Discrete Structures AEW Instructor",
    location: "Ithaca, NY",
    description:
      "During the Fall 2023 semester, I co-faciliated a workshop of 18 students for 2 hours a week to encourage collaboration on problems at and above the level of the Discrete Structures course instruction.",
    icon: React.createElement(FaSchool),
    date: "August 2023 - December 2023"
  },
  {
    title: "Combat Robotics @ Cornell",
    location: "Ithaca, NY",
    description:
      "I became the Marketing Subteam lead of Combat Robotics @ Cornell and now and guide a team of 13 students through various projects. Last semester, our team raised over $9,000 during Cornell's month-long Crowdfunding event!",
    icon: React.createElement(FaGear),
    date: "August 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Secret Clarkson",
    description:
      "My friends and I enjoy playing a mafia-like social deduction game, so we recreated it as a terminal-based game in OCaml... with a slight mammalian twist.",
    tags: ["OCaml", "Functional Programming"],
    imageUrl: secretclarkson,
    projectLink: "https://github.coecis.cornell.edu/cm823/cs3110-final"
  },
  {
    title: "Cosmic Swing",
    description:
      "As a programmer and level designer, I collaborated in a team of 8 to develop Cosmic Swing, a rotating physics platformer featured at the annual Game Development Initiative at Cornell Showcase.",
    tags: ["Java", "Box2D", "JSON"],
    imageUrl: cosmicswing,
    projectLink: "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/cosmicswing/"
  },
  {
    title: "LearnWell",
    description:
      "In a team of 2 Android developers and one other backend developer, we created a tutee-tutor matching app for classes for the AppDev Hack-Challenge.",
    tags: ["Python", "SQLAlchemy", "Flask"],
    imageUrl: codeicon,
    projectLink: "https://github.com/L1nda-H/hack-challenge"
  },
  {
    title: "Fury of the Lost Knight",
    description:
      "Over the summer, I joined the Game Development Association at Cornell to create a platformer game with 18 other game-making enthusiasts.",
    tags: ["C#", "Unity"],
    imageUrl: fotl,
    projectLink: "https://dgacornell.itch.io/fury-of-the-lost-knight"
  },
] as const;

// export const skillsData = [
//   "Java",
// ] as const;