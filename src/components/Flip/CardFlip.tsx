import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface CardFlipProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const CardFlip = () => {
    const [isFlipped , setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div className='flip-card w-[600px] h-[360px] rounded-md' onClick={handleFlip}>
        <motion.div
        className='flip-card-inner w-[80%] h-[100%]'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{duration: 0.2, animationDirection:"normal"}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div className='flip-card-front w-full h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{background: `#2c123d`}}>
                <p>front</p>
            </div>
            <div className='flip-card-back w-full h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{background: `#4B0082`}}>
                <p>back</p>
            </div>
        </motion.div>
    </div>
  )
}

export default CardFlip