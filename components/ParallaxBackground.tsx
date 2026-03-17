"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function MiddleParallax() {
  // Fix 1: Add HTMLDivElement type to useRef
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fix 2: Explicitly type the transform for TypeScript strings
  const y: MotionValue<string> = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["-15%", "15%"]
  );

  return (
    <div 
  ref={containerRef} 
  style={{ height: '500px' }} // Force a height here
  className="relative w-full overflow-hidden my-20"
>
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[130%] -top-[10%]"
      >
        <Image
          src="/Parallax-bgv2.webp" // Local path starting from the public folder
          alt="Scrolling background"
          fill
          className="object-cover"
           priority
        />
      </motion.div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20">
          <h2 className="text-5xl font-bold text-white text-center">
            Profile
          </h2>
        </div>
      </div>
    </div>
  );
}