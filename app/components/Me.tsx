"use client";

import React from "react";
import { BIO } from "../lib/constants";
import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Me() {
  return (
    <div id="me" className="min-h-screen flex flex-col justify-center items-center pt-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
      >
        {BIO.name}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex text-2xl md:text-3xl text-gray-400 mb-8 font-medium"
      >
        <span>I'm&nbsp;</span>
        <div className="text-white">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: BIO.roles,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4"
      >
        {BIO.social.map((social) => (
          <SocialIcon
            key={social.network}
            url={social.href}
            network={social.network}
            target="_blank"
            rel="noopener"
            bgColor="#333"
            fgColor="#fff"
            className="hover:scale-110 transition-transform duration-200"
            style={{ height: 45, width: 45 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
