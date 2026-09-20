"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-gray-800 shadow-xl flex-shrink-0"
          >
             <Image
                src="/about/profile.jpg"
                alt="Janindu Dissanayake"
                fill
                className="object-cover"
                unoptimized
              />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 text-gray-300 text-lg leading-relaxed space-y-6"
          >
            <p>
              Hi, I'm a passionate Software Engineer based in Sri Lanka. I enjoy building
              highly interactive and responsive web and mobile applications using modern
              technologies like React, React Native, and Next.js.
            </p>
            <p>
              I recently graduated with Honours from the Sri Lanka Institute of Information
              Technology (SLIIT) with a BSc in Information Technology, specializing in
              Software Engineering.
            </p>
            <p>
              I thrive in collaborative environments and am constantly eager to learn
              new tools, improve my coding practices, and contribute to impactful projects.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
