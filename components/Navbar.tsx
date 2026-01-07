"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  GraduationCap,
  Search,
  FileText,
  Video,
  BookOpen,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/academic", label: "Academic", icon: GraduationCap },
  { href: "/research", label: "Research", icon: Search },
  // { href: "/portfolio", label: "Portfolio", icon: FileText },
  { href: "/videos", label: "Videos", icon: Video },
  { href: "/literature", label: "Literature", icon: BookOpen },
];
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "pt-3" : "pt-6"
      )}
    >
      <nav
        className={cn(
          "relative flex items-center justify-between transition-all duration-500 px-6 py-2.5 rounded-2xl border",
          // Light Mode Glass
          "bg-white/40 backdrop-blur-md border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
          // Dark Mode Glass
          "dark:bg-zinc-950/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
          isScrolled ? "w-[95%] max-w-5xl" : "w-[98%] max-w-7xl"
        )}
      >
        {/* --- BRANDING --- */}
        <Link href="/" className="flex items-center gap-3 z-[100] group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/90 backdrop-blur-sm shadow-lg text-primary-foreground"
          >
            <span className="text-xl font-bold">N</span>
          </motion.div>
          <span className="text-lg font-bold tracking-tight hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
            Nabid
          </span>
        </Link>
        {/* --- DESKTOP NAVIGATION --- */}
        <div
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setHoveredPath(href)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl",
                  isActive
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                {/* Glass Active Pill */}
                {isActive && (
                  <motion.div
                    layoutId="glass-pill"
                    className="absolute inset-0 bg-white/60 dark:bg-white/10 border border-white/20 dark:border-white/10 shadow-sm rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Glass Hover Pill */}
                {hoveredPath === href && !isActive && (
                  <motion.div
                    layoutId="hover-glass"
                    className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <Icon
                  className={cn(
                    "h-4 w-4 relative z-10",
                    isActive && "text-primary"
                  )}
                />
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </div>
        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer w-10 h-10 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 border border-zinc-300 dark:border-zinc-600 shadow-md transition-all"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground" />
            ) : (
              <Menu className="text-foreground" />
            )}
          </Button>
        </div>
      </nav>
      {/* --- MOBILE GLASS OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-white/20 dark:bg-black/40 z-[40] flex items-center justify-center p-6 md:hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-white/40 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex flex-col items-center gap-3 p-6 rounded-3xl transition-all active:scale-95 border",
                      pathname === href
                        ? "bg-white/80 dark:bg-white/10 border-white/40 dark:border-white/20 shadow-lg text-primary"
                        : "bg-transparent border-transparent text-muted-foreground"
                    )}
                  >
                    <Icon size={24} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
