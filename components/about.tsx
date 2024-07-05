"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing masters in{" "}
        <span className="font-medium">computer applications</span>, I decided to
        pursue my passion for programming. I started my career with{" "}
        <span className="font-medium">JavaScript</span>. and fell in love with
        this language.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        with my kid, watching movies, and playing cricket. I also enjoy{" "}
        <span className="font-medium">reading new books</span>. I am currently
        reading about <span className="font-medium">philosophy</span>.
      </p>
    </motion.section>
  );
}
