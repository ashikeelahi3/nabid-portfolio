"use client";

import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-[#080808] flex items-center transition-colors duration-500 pt-20 overflow-hidden">
      {/* Background Decorative Element (Dashed line from your image) */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[45vw] h-[80vh] border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-[4rem] pointer-events-none z-0" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(3rem,10vw,7rem)] font-[1000] leading-[0.85] tracking-tighter">
              <span className="text-zinc-300 dark:text-zinc-700">
                MD. RAIYAN
              </span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100">HASAN</span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100 inline-flex items-center">
                NABID<span className="text-primary">.</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed"
          >
            Undergraduate Researcher focused on{" "}
            <span className="text-zinc-900 dark:text-white font-bold">
              Scientific Computing
            </span>{" "}
            and technical innovation. Bridging the gap between academic theory
            and real-world engineering.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-2xl font-bold bg-zinc-900 text-white dark:bg-white dark:text-black hover:scale-105 transition-transform"
            >
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>

            <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              {[Mail, Linkedin, Github].map((Icon, i) => (
                <button
                  key={i}
                  className="p-3 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <Icon size={20} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image with sophisticated Masking */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="relative w-full aspect-[4/5] max-w-[550px] mx-auto overflow-hidden rounded-[3rem] lg:rounded-[5rem]">
            {/* Gradients that create the fade-to-background effect seen in your images */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#080808] opacity-100 transition-colors duration-500" />
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-white/10 via-transparent to-transparent dark:from-black/20" />

            <img
              src="/Nabid.jpg"
              alt="MD. RAIYAN HASAN NABID"
              className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (Vertical text from your image) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <ArrowDown
          className="text-zinc-300 dark:text-zinc-700 animate-bounce"
          size={20}
        />
      </div>
    </section>
  );
}
