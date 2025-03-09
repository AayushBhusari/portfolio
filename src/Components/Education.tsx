"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface EducationItem {
  institute: string;
  time: string;
}

const education: EducationItem[] = [
  { institute: "School", time: "2020-2024" },
  { institute: "10:00 a.m. – 10:15 a.m", time: "Lamp Lighting & Welcome" },
  { institute: "10:15 a.m. – 11:00 a.m", time: "Keynote Session 1" },
  { institute: "11:00 a.m. – 11:45 a.m", time: "Keynote Session 2" },
  { institute: "11:45 a.m. – 12:30 p.m", time: "Panel Discussion 1" },
  { institute: "12:30 p.m. – 01:15 p.m", time: "Lunch & Networking Break" },
  { institute: "01:15 p.m. – 04:15 p.m", time: "Workshop 1 and Workshop 2" },
  { institute: "04:15 p.m. – 04:30 p.m", time: "High-Tea Break" },
  { institute: "04:30 p.m. – 05:15 p.m", time: "Panel Discussion 2" },
  { institute: "05:15 p.m. – 05:30 p.m", time: "Conclusion of Day 1" },
];

const colors: string[] = [
  "text-blue-500",
  "text-green-500",
  "text-purple-500",
  "text-red-500",
  "text-yellow-500",
  "text-pink-500",
];

const EducationItemComponent: React.FC<{
  edu: EducationItem;
  index: number;
}> = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Ensuring hooks are always called before returning JSX
  const animationProps = isInView
    ? { x: 0, opacity: 1, scale: 1 }
    : { x: -100, opacity: 0, scale: 0.75 };

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0, scale: 0.75 }}
      animate={animationProps}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id="schedule"
      className={`w-fit p-4  flex flex-col items-center border-b-2 ${
        colors[index % colors.length]
      }`}
    >
      <h2 className="text-3xl font-bold text-center">{edu.institute}</h2>
      <p className="text-xl text-center">{edu.time}</p>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl text-center text-white mb-6">
        Education Details
      </h1>
      <br />

      {/* Education Details */}
      <div className="space-y-6 flex flex-col items-center">
        {education.map((edu, index) => (
          <EducationItemComponent key={index} edu={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
