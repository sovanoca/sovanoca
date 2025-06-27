'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Settings, Construction } from 'lucide-react';

const ServiceHero = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden ">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service-hero.jpg"
          alt="Construction site"
          fill
          className="object-fit"
          priority
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      {/* Centered content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="bg-b1 text-white px-4 py-1  text-sm font-medium">
              Building Excellence Since 2022
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl  lg:text-5xl font-bold p-2 bg-white text-b1 leading-tight "
          >
            Premium <span className="text-b1">Construction</span> Services
          </motion.h1>
        </div>
      </div>

      {/* Animated gear icon */}
      <motion.div 
        className="absolute top-16 right-10 md:right-20 w-24 h-24 z-10 opacity-20 text-b1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Settings size="100%" className="w-full h-full" />
      </motion.div>

      {/* Animated crane icon */}
      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16 z-10 opacity-30 text-b1"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Construction size="100%" className="w-full h-full" />
      </motion.div>
    </section>
  );
};

export default ServiceHero;
