"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience }) => {
  console.log("Experiences Data:", experiences);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "1px solid red",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-[16px] font-semibold">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map(
          (point, index) => (
            console.log("Experience Points:", point),
            (
              <li
                key={index}
                className="text-white text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            )
          )
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-gray-400 text-lg">
          What I have done so far
        </p>
        <h2 className="text-center text-white text-3xl font-bold">
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences?.length > 0 ? (
            experiences.map((experience, index) => {
              console.log("Rendering Experience:", experience);
              return <ExperienceCard key={index} experience={experience} />;
            })
          ) : (
            <p className="text-center text-gray-400">
              No experiences available.
            </p>
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
