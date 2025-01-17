'use client'

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { FounderCardProps } from '../types/founder';

interface FounderCardComponentProps extends FounderCardProps {
  onViewJobs: (id: string) => void;
}

const FounderCard = ({
  id,
  companyName,
  companyUrl,
  companyImageUrl,
  founderName,
  founderImageUrl,
  founderContacts,
  onViewJobs
}: FounderCardComponentProps) => {
  return (
    <motion.div
      className="relative w-full max-w-sm rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-950 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="relative h-40 w-full">
        <Image
          src={companyImageUrl || "/placeholder.svg"}
          alt={companyName}
          layout="fill"
          objectFit="cover"
        />
        <Link href={companyUrl} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">{companyName}</span>
        </Link>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Image
            src={founderImageUrl || "/placeholder.svg"}
            alt={founderName}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{founderName}</h2>
            <p className="text-gray-600">Founder of {companyName}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {founderContacts.map((contact, index) => (
            <Link key={index} href={contact.url} className="text-gray-600 hover:text-gray-900">
              {contact.type === 'twitter' && <Twitter size={20} />}
              {contact.type === 'linkedin' && <Linkedin size={20} />}
              {contact.type === 'email' && <Mail size={20} />}
            </Link>
          ))}
        </div>
        <button 
          onClick={() => onViewJobs(id)} 
          className="w-full text-center bg-black text-white py-2 rounded-md hover:bg-purple-500 transition-colors"
        >
          View Jobs
        </button>
      </div>
    </motion.div>
  );
};

export default FounderCard;

