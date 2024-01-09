import React from "react";
import { FaGear } from "react-icons/fa6";
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
      "I joined the Combat Robotics @ Cornell Project Team's Marketing Subteam and became the Marketing Subteam Lead after a semester.",
    icon: React.createElement(FaGear),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Secret Clarkson",
    description:
      "My friends and I enjoy playing a mafia-like social deduction game, so we recreated it as a terminal-based game in OCaml... with a slight mammalian twist.",
    tags: ["OCaml", "Functional Programming"],
    imageUrl: secretclarkson,
  },
  {
    title: "Cosmic Swing",
    description:
      "As a programmer and level designer, I collaborated in a team of 8 to develop Cosmic Swing, a rotating physics platformer featured at the annual Game Development Initiative at Cornell Showcase.",
    tags: ["Java", "Box2D", "JSON"],
    imageUrl: cosmicswing,
  },
  {
    title: "LearnWell",
    description:
      "In a team of 2 Android developers and one other backend developer, we created a tutee-tutor matching app for classes for the AppDev Hack-Challenge.",
    tags: ["Python", "SQLAlchemy", "Flask"],
    imageUrl: codeicon,
  },
  {
    title: "Fury of the Lost Knight",
    description:
      "Over the summer, I joined the Game Development Association at Cornell to create a platformer game with 18 other game-making enthusiasts.",
    tags: ["C#", "Unity"],
    imageUrl: fotl,
  },
] as const;

export const skillsData = [
  "Java",
] as const;