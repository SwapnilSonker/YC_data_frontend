"use client";

import Card from "@/components/AnimatedCard";
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
      initial={{ 
        x: -100, 
        y: Math.random() * 500,
        opacity: 0,
        rotate: -45 
      }}
      animate={{
        x: ["0%", "200%"],
        y: ["0%", "200%"],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "linear",
        times: [0, 0.1, 0.9, 1]
      }}
    />
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#2c123d] to-[#08050d]">
      <div className="stars" />
      <Navbar/>
      <ShootingStar delay={0} />
      <ShootingStar delay={2} />
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          YC Stars Recruiters Information
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A Platform where you will find currently hiring YC Startups Information
        </motion.p>
        <motion.div
        className="relative pt-8"
        initial={{opacity: 0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{ duration: 1, delay: 0.4 }}
        >
        <Card>
          Here is the card component
        </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}