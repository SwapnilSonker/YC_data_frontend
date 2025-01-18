'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';
import { FounderCardProps } from '../types/founder';
import FounderCard from './AnimatedCard';

interface FounderJobGridProps {
  founders: FounderCardProps[];
}

const FounderJobGrid = ({ founders }: FounderJobGridProps) => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = (id: string) => {
    if (!isAnimating) {
      setFlippedCards(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
      setIsAnimating(true);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {founders.map((founder) => (
        <div 
          key={founder.id}
          className='flip-card w-full h-[360px] rounded-md cursor-pointer flex'
          onClick={() => handleFlip(founder.id)}
        >
          <motion.div
            className='flip-card-inner w-full h-full relative'
            initial={false}
            animate={{ rotateY: flippedCards[founder.id] ? 180 : 360 }}
            transition={{ duration: 0.2, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <motion.div 
             initial={{opacity:0 , y:0}}
             animate={{y:0}}
             whileInView={{opacity: 1, y:-20}}
             transition={{duration:0.4, ease:"easeInOut"}}
             className='flip-card-front absolute w-full h-full bg-cover border text-white rounded-lg overflow-hidden'
            >
              <FounderCard
                {...founder}
                onViewJobs={() => handleFlip(founder.id)}
              />
            </motion.div>
            <div 
              className='flip-card-back absolute w-full h-full bg-cover border text-white rounded-lg overflow-hidden'
            >
              <JobCard
                companyName={founder.companyName}
                jobs={founder.jobs}
                onBack={() => handleFlip(founder.id)}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FounderJobGrid;