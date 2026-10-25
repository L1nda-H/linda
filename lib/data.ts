import React from "react";
import { FaGear, FaSchool, FaAmazon } from "react-icons/fa6";
import { SiDatabricks } from "react-icons/si";
import cosmicswing from "@/public/cosmicswing.png";
import secretclarkson from "@/public/secretclarkson.png";
import huggingface from "@/public/hf-logo.svg";
import showAttendAndTell from "@/public/show-attend-tell.png";
import perry from "@/public/perry.png";
import codeicon from "@/public/codeicon.svg";
import parallelMcts from "@/public/parallel-mcts.svg";
import shardedKv from "@/public/sharded-kv.svg";
import speechParsing from "@/public/speech-parsing.svg";

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
] as const;

export const experiencesData = [
  {
    title: "Databricks Software Engineering Intern",
    location: "Sunnyvale, CA",
    description:
      "I worked on improving the release pipeline configuration management experience at Databricks, reducing workflow friction for engineers managing 1500+ release services.",
    icon: React.createElement(SiDatabricks),
    date: "June 2026 - September 2026",
  },
  {
    title: "Amazon Software Development Engineer Intern",
    location: "Denver, CO",
    description:
      "I worked with the Basket Building team to create an MCP server that allows agents to access bundle product data in order to resolve seller tickets.",
    icon: React.createElement(FaAmazon),
    date: "June 2025 - August 2025",
  },
  {
    title: "Wells Fargo Sophomore Discovery Fellowship Program",
    location: "Charlotte, NC",
    description:
      "I worked on the Enterprise Risk Reporting team in the Enterprise Functions Technology Line of Business at Wells Fargo.",
    icon: React.createElement(FaGear),
    date: "June 2024 - August 2024",
  },
  {
    title: "Combat Robotics @ Cornell",
    location: "Ithaca, NY",
    description:
      "I became the Marketing Subteam lead of Combat Robotics @ Cornell and guided a team of 13 students through various projects. During that semester, our subteam raised over $9,000 during Cornell's month-long Crowdfunding event!",
    icon: React.createElement(FaGear),
    date: "August 2023 - May 2024",
  },
  {
    title: "Discrete Structures AEW Instructor",
    location: "Ithaca, NY",
    description:
      "During Fall 2023, I co-faciliated a workshop of 18 students for 2 hours a week to encourage collaboration on problems at and above the level of the Discrete Structures course instruction.",
    icon: React.createElement(FaSchool),
    date: "August 2023 - December 2023",
  },
  {
    title: "Combat Robotics @ Cornell",
    location: "Ithaca, NY",
    description:
      "I joined the Combat Robotics @ Cornell Project Team's Marketing Subteam and worked on projects ranging from video games to Giving Day planning to website maintenance.",
    icon: React.createElement(FaGear),
    date: "October 2022 - May 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Parallel Monte Carlo Tree Search",
    description:
      "A Monte Carlo Tree Search Go bot that scales to 370K games per second across 128 threads using distributed Zobrist hashing, transposition tables, and dedicated I/O threads.",
    tags: ["C++", "OpenMPI", "OpenMP"],
    imageUrl: parallelMcts,
    projectLink: "https://github.com/L1nda-H/parallel-mcts",
  },
  {
    title: "Sharded Key-Value Store",
    description:
      "A linearizable, sharded key-value store with atomic multi-key transactions and dynamic load balancing.",
    tags: ["Java", "Paxos", "2PC"],
    imageUrl: shardedKv,
    projectLink: "",
  },
  {
    title: "Grammar-Constrained Speech Parsing",
    description:
      "An end-to-end speech parser that reached 92% accuracy on context-free grammar validation using Wav2Vec2.",
    tags: ["Python", "Wav2Vec2", "NLTK"],
    imageUrl: speechParsing,
    projectLink: "",
  },
  {
    title: "Show, Attend and Tell Paper Reimplementation",
    description:
      "An image captioning model with soft attention that achieves 65% accuracy—within 2% of Xu et al. (2015). Evaluated using BLEU and METEOR metrics.",
    tags: ["Pytorch", "Python"],
    imageUrl: showAttendAndTell,
    projectLink: "https://github.com/sunny525s/Show_Attend_and_Tell",
  },
  {
    title: "Trigger Happy",
    description:
      "A multiplayer party game set in a 1920s speakeasy. I helped design the networking and the animation controller while leading the character design.",
    tags: ["C++", "CUGL"],
    imageUrl: perry,
    projectLink:
      "https://bowers.cornell.edu/news-stories/students-got-game-annual-video-game-showcase",
  },
  {
    title: "Text Emotion Classifier",
    description:
      "A language model that classifies text into 27 different emotions, achieving an accuracy of 76%.",
    tags: ["Python", "PyTorch", "HuggingFace"],
    imageUrl: huggingface,
    projectLink: "",
  },
  {
    title: "Secret Clarkson",
    description:
      "A mafia-like social deduction game recreated as a terminal-based game in OCaml... with a slight mammalian twist.",
    tags: ["OCaml", "Functional Programming"],
    imageUrl: secretclarkson,
    projectLink: "https://github.coecis.cornell.edu/cm823/cs3110-final",
  },
  {
    title: "Cosmic Swing",
    description:
      "A rotating physics platformer featured at the annual Game Development Initiative at Cornell Showcase.",
    tags: ["Java", "Box2D", "JSON"],
    imageUrl: cosmicswing,
    projectLink:
      "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/cosmicswing/",
  },
  {
    title: "LearnWell",
    description:
      "A tutee-tutor matching app for classes for the AppDev Hack-Challenge.",
    tags: ["Python", "SQLAlchemy", "Flask"],
    imageUrl: codeicon,
    projectLink: "https://github.com/L1nda-H/hack-challenge",
  },
  // {
  //   title: "Fury of the Lost Knight",
  //   description:
  //     "Over summer 2023, I had the chance to join 18 other game-making enthusiasts in the Game Development Association at Cornell to create a platformer game.",
  //   tags: ["C#", "Unity"],
  //   imageUrl: fotl,
  //   projectLink: "https://dgacornell.itch.io/fury-of-the-lost-knight",
  // },
] as const;
