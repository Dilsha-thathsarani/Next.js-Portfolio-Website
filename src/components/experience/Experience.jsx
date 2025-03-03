"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(42, 42, 42, 0.5)",
        color: "#e1e1e1",
        border: "1px solid rgba(254, 254, 91, 0.2)",
        borderTop: "2px solid #FEFE5B",
        borderRadius: "0.75rem",
        backdropFilter: "blur(8px)",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(42, 42, 42, 0.5)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#2a2a2a",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 0 4px rgba(254, 254, 91, 0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
          {experience.icon ? (
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={experience.icon}
                alt={`${experience.company_name} logo`}
                className="object-cover w-4/5 h-4/5"
                width={30}
                height={30}
              />
            </div>
          ) : (
            <svg
              className="w-6 h-6 text-[#FEFE5B]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.963v-3.963h-2v-6h6v2h-4v4.964l4 .036v2h-4z" />
            </svg>
          )}
        </div>
      }
      visible={true}
    >
      <div>
        <h3 className="text-[#e1e1e1] text-xl md:text-2xl font-semibold">
          {experience.title}
        </h3>
        <p className="text-[#737373] text-sm md:text-base font-medium mt-1">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-[#e1e1e1] text-sm md:text-base pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {experience.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs md:text-sm px-2 py-1 rounded-md bg-[#333333]/50 text-[#FEFE5B]"
          >
            {skill}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-center text-[#d0cdcd] text-base md:text-lg">
          What I have done so far
        </p>
        <h2 className="text-center text-[#e1e1e1] text-2xl md:text-3xl font-bold mt-2">
          Work Experience
        </h2>
        {/* Golden accent line */}
        <div className="w-24 h-[2px] bg-[#FEFE5B] mx-auto mt-4"></div>
      </motion.div>

      <div className="mt-10">
        <VerticalTimeline lineColor="rgba(254, 254, 91, 0.2)">
          {experiences?.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          ) : (
            <motion.div
              variants={item}
              className="relative flex flex-col items-center w-full rounded-xl overflow-hidden p-6 bg-transparent border border-[#FEFE5B]/20 backdrop-blur-sm shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FEFE5B]"></div>
              <p className="text-center text-[#737373] text-base md:text-lg">
                No experiences available.
              </p>
            </motion.div>
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
