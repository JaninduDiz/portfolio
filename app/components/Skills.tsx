"use client";

import React from "react";
import { SKILLS } from "../lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen py-20 px-4 bg-[#121212]/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-center relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto whitespace-pre-line text-sm md:text-base px-4"
        >
          {SKILLS.intro}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.skills.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-white pb-4 border-b border-gray-700">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center gap-2 group"
                  >
                    <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                      <Image
                        src={`/${skill.icon}`}
                        alt={skill.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 text-center transition-colors">
                      {skill.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
