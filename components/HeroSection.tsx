"use client";

import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ArrowDown,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500 pt-24 pb-10">
      {/* --- ADAPTIVE BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Dynamic Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] rounded-full bg-zinc-200 dark:bg-zinc-800/20 blur-[100px]" />
        {/* New Graphic Element: Animated Hexagon Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20 dark:opacity-10 mix-blend-overlay" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div variants={textVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                  Available for Research
                </span>
              </div>
            </motion.div>

            {/* Typography with Adaptive Colors */}
            <motion.div variants={textVariants} className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-[1000] tracking-tighter leading-[0.85]">
                <span className="text-zinc-400 dark:text-zinc-600">
                  MD. RAIYAN
                </span>
                <br />
                <span className="text-zinc-900 dark:text-zinc-100">HASAN</span>
                <br />
                <span className="text-primary">NABID.</span>
              </h1>
            </motion.div>

            {/* Short Bio */}
            <motion.div variants={textVariants} className="mt-8 mb-10 max-w-lg">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Undergraduate Researcher focused on{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                  Scientific Computing
                </span>{" "}
                and technical innovation. Bridging the gap between academic
                theory and real-world engineering.
              </p>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 rounded-2xl font-bold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 shadow-xl shadow-zinc-900/10 dark:shadow-none transition-all group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>

              <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-xl">
                {[
                  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0,0,0,0.05)",
                    }}
                    className="p-3 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
                    aria-label={label}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: IMAGE WITH GRADIENT FADE --- */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-[4/5] max-w-[400px] overflow-hidden rounded-[2rem] lg:rounded-[3rem] border border-zinc-200 dark:border-zinc-800 group">
              {/* Fade Overlays */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#050505] transition-colors duration-500" />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/20 via-transparent to-transparent dark:from-[#050505]/20" />

              <motion.img
                src="/Nabid.jpg"
                alt="MD. RAIYAN HASAN NABID"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
            </div>

            {/* Decorative Element behind image */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[3rem] scale-95 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-zinc-300 dark:text-zinc-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
