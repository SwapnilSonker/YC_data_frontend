'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import FounderCard from './FounderCard';
import JobCard from './JobCard';
import { FounderCardProps } from '../types/founder';
import FounderCard from './AnimatedCard';

interface FounderJobGridProps {
  founders: FounderCardProps[];
}

const FounderJobGrid = ({ founders }: FounderJobGridProps) => {
  const [activeJobCard, setActiveJobCard] = useState<string | null>(null);

  const handleViewJobs = (id: string) => {
    setActiveJobCard(id);
  };

  const handleBackToFounder = () => {
    setActiveJobCard(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <AnimatePresence>
        {founders.map((founder) => (
          <motion.div
            key={founder.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: activeJobCard && activeJobCard !== founder.id ? 'none' : 'block' }}
          >
            {activeJobCard === founder.id ? (
              <JobCard
                companyName={founder.companyName}
                jobs={founder.jobs}
                onBack={handleBackToFounder}
              />
            ) : (
              <FounderCard
                {...founder}
                onViewJobs={handleViewJobs}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FounderJobGrid;

