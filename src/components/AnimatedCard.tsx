// import { motion } from "framer-motion";

// import { ReactNode } from "react";

// interface CardProps {
//   children: ReactNode;
// }

// const Card = ({ children }: CardProps) => {
//   return (
//     <motion.div
//       className="relative w-full max-w-sm h-96 rounded-lg"
//       style={{
//         background: 'linear-gradient(to bottom, #4B0082, #000000)',
//         // boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.1)'
//       }}
//       initial={{ 
//         opacity: 0, 
//         rotateY: -15,
//         x: -50,
//         y: 0
//       }}
//       animate={{ 
//         opacity: 1,
//         rotateY: 0,
//         x: 0,
//         y: 0
//       }}
//       exit={{ 
//         opacity: 0,
//         rotateY: 15,
//         x: 50 
//       }}
//       whileHover={{ 
//         scale: 1.02,
//         y: -10,
//         boxShadow: `
//           inset 0 2px 10px rgba(255,255,255,0.1),
//           0 20px 40px rgba(75, 0, 130, 0.2),
//           0 0 20px rgba(75, 0, 130, 0.1)
//         `
//       }}
//       transition={{
//         duration: 0.6,
//         ease: [0.6, 0.01, -0.05, 0.95],
//         opacity: {
//           duration: 0.8,
//           ease: "easeInOut"
//         },
//         whileHover: {
//           duration: 0.8,
//           ease: "easeOut"
//         }
//       }}
//     >
//       <div className="p-6 h-full text-white">
//         {children}
//       </div>
//     </motion.div>
//   );
// };

// export default Card;

'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const AppealingCard = ({ children }: CardProps) => {
  return (
    <motion.div
      className="relative w-full max-w-sm h-96 rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative p-6 h-full text-white z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AppealingCard;

