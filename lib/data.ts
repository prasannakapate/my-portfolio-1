import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Amdocs",
    location: "Pune, India",
    description:
      "I started my career here a junior developer. I immediately started working a on a large scale application in a telecom domain as a junior front-end developer using Angularjs.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2015 - Jul 2016",
  },
  {
    title: "Synechron",
    location: "India, Pune",
    description:
      "I worked as a front-end developer for 3.8 years. I also upskilled to the full stack. Mainly I worked on React, Redux, Nodejs, Express, MongoDB and AWS.",
    icon: React.createElement(FaReact),
    date: "Jul 2016 - Feb 2020",
  },
  {
    title: "T-Systems",
    location: "Pune, India",
    description:
      "I'm now working as a senior full-stack developer. My stack includes React, Redux, TypeScript, Material UI, Django and PostgressDB. I'm learning Next.js and exploring AI technologies.",
    icon: React.createElement(FaReact),
    date: "Feb 2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
