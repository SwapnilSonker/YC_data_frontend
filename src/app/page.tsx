"use client";

import CardFlip from "@/components/Flip/CardFlip";
import FounderJobGrid from "@/components/FounderJobGrid";
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

const founders = [
  {
    id: '1',
    companyName: "TechInnovate",
    companyUrl: "https://techinnovate.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "Jane Doe",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/janedoe' },
      { type: 'linkedin', url: 'https://linkedin.com/in/janedoe' },
      { type: 'email', url: 'mailto:jane@techinnovate.com' },
    ],
    jobs: [
      {
        title: "Frontend Developer",
        description: "We're looking for a skilled frontend developer to join our team.",
        location: "Remote",
        salary: "$80,000 - $120,000",
        applyLink: "https://techinnovate.com/apply/frontend"
      },
      {
        title: "UX Designer",
        description: "Join our design team and help create amazing user experiences.",
        location: "New York, NY",
        salary: "$90,000 - $130,000",
        applyLink: "https://techinnovate.com/apply/uxdesigner"
      }
    ]
  },
  {
    id: '2',
    companyName: "GreenEnergy",
    companyUrl: "https://greenenergy.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "John Smith",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/johnsmith' },
      { type: 'linkedin', url: 'https://linkedin.com/in/johnsmith' },
      { type: 'email', url: 'mailto:john@greenenergy.com' },
    ],
    jobs: [
      {
        title: "Solar Panel Technician",
        description: "Help us install and maintain solar panels for residential and commercial properties.",
        location: "Los Angeles, CA",
        salary: "$60,000 - $80,000",
        applyLink: "https://greenenergy.com/apply/solartechnician"
      }
    ]
  },
  {
    id: '3',
    companyName: "HealthTech",
    companyUrl: "https://healthtech.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "Sarah Johnson",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/sarahjohnson' },
      { type: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { type: 'email', url: 'mailto:sarah@healthtech.com' },
    ],
    jobs: [
      {
        title: "Data Scientist",
        description: "Join our team to analyze health data and improve patient outcomes.",
        location: "Boston, MA",
        salary: "$100,000 - $150,000",
        applyLink: "https://healthtech.com/apply/datascientist"
      },
      {
        title: "Mobile App Developer",
        description: "Help us create innovative health tracking apps for iOS and Android.",
        location: "Remote",
        salary: "$90,000 - $130,000",
        applyLink: "https://healthtech.com/apply/mobiledev"
      }
    ]
  },
  {
    id: '4',
    companyName: "HealthTech",
    companyUrl: "https://healthtech.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "Sarah Johnson",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/sarahjohnson' },
      { type: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { type: 'email', url: 'mailto:sarah@healthtech.com' },
    ],
    jobs: [
      {
        title: "Data Scientist",
        description: "Join our team to analyze health data and improve patient outcomes.",
        location: "Boston, MA",
        salary: "$100,000 - $150,000",
        applyLink: "https://healthtech.com/apply/datascientist"
      },
      {
        title: "Mobile App Developer",
        description: "Help us create innovative health tracking apps for iOS and Android.",
        location: "Remote",
        salary: "$90,000 - $130,000",
        applyLink: "https://healthtech.com/apply/mobiledev"
      }
    ]
  },
  {
    id: '5',
    companyName: "HealthTech",
    companyUrl: "https://healthtech.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "Sarah Johnson",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/sarahjohnson' },
      { type: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { type: 'email', url: 'mailto:sarah@healthtech.com' },
    ],
    jobs: [
      {
        title: "Data Scientist",
        description: "Join our team to analyze health data and improve patient outcomes.",
        location: "Boston, MA",
        salary: "$100,000 - $150,000",
        applyLink: "https://healthtech.com/apply/datascientist"
      },
      {
        title: "Mobile App Developer",
        description: "Help us create innovative health tracking apps for iOS and Android.",
        location: "Remote",
        salary: "$90,000 - $130,000",
        applyLink: "https://healthtech.com/apply/mobiledev"
      }
    ]
  },
  {
    id: '6',
    companyName: "HealthTech",
    companyUrl: "https://healthtech.com",
    companyImageUrl: "/placeholder.svg?height=160&width=320",
    founderName: "Sarah Johnson",
    founderImageUrl: "/placeholder.svg?height=60&width=60",
    founderContacts: [
      { type: 'twitter', url: 'https://twitter.com/sarahjohnson' },
      { type: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { type: 'email', url: 'mailto:sarah@healthtech.com' },
    ],
    jobs: [
      {
        title: "Data Scientist",
        description: "Join our team to analyze health data and improve patient outcomes.",
        location: "Boston, MA",
        salary: "$100,000 - $150,000",
        applyLink: "https://healthtech.com/apply/datascientist"
      },
      {
        title: "Mobile App Developer",
        description: "Help us create innovative health tracking apps for iOS and Android.",
        location: "Remote",
        salary: "$90,000 - $130,000",
        applyLink: "https://healthtech.com/apply/mobiledev"
      }
    ]
  }
];

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
        className="relative pt-8 p-5"
        initial={{opacity: 0 , y:50}}
        animate={{opacity:1, y:0}}
        transition={{ duration: 1, delay: 0.2 }}
        >
      <FounderJobGrid founders={founders}  />
      {/* <CardFlip /> */}
        </motion.div>
      </motion.div>
    </main>
  );
}