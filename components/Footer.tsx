"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const footerLinks = {
  socials: [
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "Academic", href: "/academic" },
    { name: "Research", href: "/research" },
    { name: "Portfolio", href: "/portfolio" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-[#050505] border-t border-zinc-200 dark:border-zinc-900 py-16 px-6 transition-colors duration-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Branding & Intro */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-xl font-bold">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              MD. RAIYAN HASAN NABID
            </span>
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xs">
            A passionate researcher bridging the gap between scientific theory
            and real-world engineering.
          </p>
        </div>

        {/* Column 2: Navigation & Socials */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.socials.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Call to Action */}
        <div className="flex flex-col gap-4 items-start md:items-end">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 md:text-right max-w-xs">
            Have a question or a project in mind? I'd love to hear from you.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl px-6"
          >
            <Link href="mailto:your.email@example.com">Contact Me</Link>
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} MD. RAIYAN HASAN NABID. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}