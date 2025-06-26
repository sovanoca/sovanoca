// components/ServicesSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Building Construction",
      description: "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      image: "/service-img-1.jpg",
      category: "Construction"
    },
    {
      id: 2,
      title: "Architecture Design",
      description: "Innovative architectural solutions that blend aesthetics with functionality for modern spaces.",
      image: "/service-img-2.jpg",
      category: "Design"
    },
    {
      id: 3,
      title: "Building Renovation",
      description: "Transform your existing space with our expert renovation services that preserve character.",
      image: "/service-img-3.jpg",
      category: "Renovation"
    },
    {
      id: 4,
      title: "Building Maintenance",
      description: "Comprehensive maintenance plans to keep your property in perfect condition year-round.",
      image: "/service-img-4.jpg",
      category: "Maintenance"
    }
  ];

  // Animation variants - optimized for performance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    }
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 }
  };

  const contentHover = {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      delay: 0.05
    }
  };

  return (
    <section className="w-full bg-blue-50 py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our construction services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="relative overflow-hidden rounded-xl shadow-md h-[360px] cursor-pointer"
              variants={item}
              whileHover={cardHover}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={false}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{ transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
              </div>
              
              {/* Category badge */}
              <motion.div 
                className="absolute top-4 right-4 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="bg-orange-500 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full shadow">
                  {service.category}
                </span>
              </motion.div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white z-10">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-2"
                  initial={false}
                  animate={{
                    y: hoveredCard === service.id ? -10 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: hoveredCard === service.id ? "auto" : 0,
                    opacity: hoveredCard === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-gray-200 text-sm md:text-base mb-4"
                    initial={false}
                    animate={contentHover}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button
                    className="bg-white text-gray-900 font-medium px-4 py-2 rounded-full flex items-center gap-1 text-sm md:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Hover overlay effect */}
              {hoveredCard === service.id && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="bg-orange-500 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 mx-auto text-base md:text-lg shadow-md hover:bg-orange-600 transition-colors"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 20px -5px rgba(249, 115, 22, 0.4)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;