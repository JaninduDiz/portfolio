"use client";

import React from "react";
import { EXPERIENCES, EDUCATION } from "../lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

function TimelineItem({ item, index, isLast }: { item: any; index: number; isLast: boolean }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Vertical Line */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-10 bottom-[-4rem] w-0.5 bg-gray-700 -translate-x-1/2 z-0"></div>
      )}
      {!isLast && (
        <div className="md:hidden absolute left-4 top-10 bottom-[-4rem] w-0.5 bg-gray-700 z-0"></div>
      )}

      <div className={`md:flex items-center justify-between w-full mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        {/* Date on opposite side (Desktop) */}
        <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
          <span className="text-gray-400 font-medium">{item.dateText}</span>
        </div>

        {/* Center Icon */}
        <div className="absolute left-0 md:static md:w-2/12 flex justify-center z-10 -ml-4 md:ml-0">
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-[#121212] shadow-lg relative overflow-hidden"
            style={{ backgroundColor: item.bgColor }}
          >
             {item.icon && (
               <Image
                 src={item.icon}
                 alt={item.title}
                 fill
                 className="object-cover"
                 unoptimized
               />
             )}
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full md:w-5/12 mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-gray-500 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <h4 className="text-blue-400 font-medium mb-3">{item.subtitle}</h4>
            <div className="md:hidden mb-4 text-sm text-gray-400">
               {item.dateText}
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              {item.workDescription.map((desc: string, i: number) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function MyJourney() {
  return (
    <div id="journey" className="min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4"
        >
          My Journey
        </motion.h2>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 text-center text-gray-300"
          >
            Experience
          </motion.h3>
          <div className="relative">
            {EXPERIENCES.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                index={index}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 text-center text-gray-300"
          >
            Education
          </motion.h3>
          <div className="relative">
            {EDUCATION.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={index}
                isLast={index === EDUCATION.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
