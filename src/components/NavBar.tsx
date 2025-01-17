"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, Suspense } from "react";

const LazyIcon = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loader2 className="h-6 w-6 animate-spin" />}>
    {children}
  </Suspense>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative top-4 justify-center items-center flex -translate-x-1/2 z-50 w-auto"
    >
      <motion.div 
        className="relative flex items-center bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-lg shadow-purple-500/20"
        animate={{
          width: hoveredItem ? "auto" : "auto",
          height: "3rem",
          padding: hoveredItem ? "0.5rem 1.5rem" : "0.5rem 1rem"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Logo */}
        <motion.div className="flex items-center space-x-2">
          <LazyIcon>
            <Star className="h-6 w-6 text-purple-400" />
          </LazyIcon>
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-1 ml-4">
          <AnimatePresence mode="wait">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link href={item.href}>
                  <motion.div
                    className={`px-3 py-1 rounded-full relative z-10 ${
                      pathname === item.href ? "text-white" : "text-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="hoverBackground"
                        className="absolute inset-0 bg-purple-500/20 rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-current transition-transform origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-current transition-opacity"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-current transition-transform origin-center"
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full mt-2 w-48 right-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden md:hidden"
          >
            <div className="py-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}