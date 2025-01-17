'use-client'
import { motion, useMotionValue, useTransform } from 'framer-motion'


import { ReactNode } from 'react';

const AnimatedBackground = ({ children }: { children: ReactNode }) => {
    // const xMotion = useMotionValue(0);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 2 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: `linear-gradient(to bottom, #4B0082, #000000)`,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{ position: 'absolute', top: '-50%', left: '100%' }}>
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{
          type: 'tween',
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          position: 'relative',
          width: 20,
          height: 10,
          background: '#ff69b4', // Red color
          borderRadius: '50%',
          rotate: '45deg',
        }}
      >
        {children}
      </motion.div>
    </div>
  </motion.div>
  )
}

export default AnimatedBackground;