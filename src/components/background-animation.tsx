"use client";

import React from "react";
import { motion } from "framer-motion";

interface BackgroundAnimationProps {
  variant?: 'dots' | 'grid' | 'bubbles';
  intensity?: 'subtle' | 'medium' | 'strong';
}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ 
  variant = 'dots', 
  intensity = 'subtle' 
}) => {
  const getIntensityValue = () => {
    switch (intensity) {
      case 'subtle': return 0.3;
      case 'medium': return 0.5;
      case 'strong': return 0.8;
      default: return 0.3;
    }
  };

  const intensityValue = getIntensityValue();

  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 grid-green opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0 grid-blue"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  if (variant === 'bubbles') {
    const bubbles = Array.from({ length: 15 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: bubble % 2 === 0 
                ? `radial-gradient(circle, rgba(100, 255, 200, ${intensityValue * 0.1}) 0%, transparent 70%)`
                : `radial-gradient(circle, rgba(100, 200, 255, ${intensityValue * 0.08}) 0%, transparent 70%)`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  // Default: dots variant
  const dots = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            backgroundColor: dot % 3 === 0 
              ? `rgba(100, 255, 200, ${intensityValue})` 
              : dot % 3 === 1 
              ? `rgba(100, 200, 255, ${intensityValue * 0.8})` 
              : `rgba(255, 255, 255, ${intensityValue * 0.6})`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
