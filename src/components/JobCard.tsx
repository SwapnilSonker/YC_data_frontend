'use client'

import { motion } from "framer-motion";
import { Job } from '../types/founder';
import { ArrowLeft } from 'lucide-react';

interface JobCardProps {
  companyName: string;
  jobs: Job[];
  onBack: () => void;
}

const JobCard = ({ companyName, jobs, onBack }: JobCardProps) => {
  return (
    <motion.div
      className="relative w-full max-w-sm rounded-xl overflow-hidden bg-white shadow-lg"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="p-4">
        <button onClick={onBack} className="mb-4 flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft size={20} className="mr-2" />
          Back to Founder
        </button>
        <h2 className="text-2xl font-bold mb-4">{companyName} Jobs</h2>
        {jobs.map((job, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.location} | {job.salary}</p>
            <p className="mb-2">{job.description}</p>
            <a 
              href={job.applyLink} 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default JobCard;

