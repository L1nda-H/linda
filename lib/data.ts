import React from "react";
import { FaGear } from "react-icons/fa6";
import cosmicswing from "@/public/cosmicswing.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
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
    title: "Cosmic Swing",
    description:
      "I acted as a programmer and level designer in a team of 8 to develop Cosmic Swing, a rotating physics platformer featured at the annual Game Development Initiative at Cornell Showcase.",
    tags: ["Java"],
    imageUrl: cosmicswing,
  },
] as const;

export const skillsData = [
  "Java",
] as const;