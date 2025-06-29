// components/ProjectsSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mendenhall Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of a historical apartment building in the heart of downtown Greensboro, Nc.",
      image: "/Mendenhall-Apartments.jpeg",
      location: "Greensboro, Nc.",
      year: "2025",
      category: "Residential"
    },
    {
      id: 2,
      title: "W-market Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of an apartment building on West Market st Greensboro, Nc.",
      image: "/W-market-Apartments.jpeg",
      location: "Greensboro, Nc.",
      year: "2024",
      category: "Commercial"
    },
    {
      id: 3,
      title: "The Yurt at Sanford",
      description: "SOVANOCA recently delivered a Unique pre-fab structure for an airbnb host in Sanford, Nc.",
      image: "/The-Yurt-at-Sanford.jpeg",
      location: "Sanford, Nc.",
      year: "2023",
      category: "Renovation"
    },
    {
      id: 4,
      title: "UNCG Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of an apartment building in Greensboro, Nc.",
      image: "/UNCG-Apartments.jpeg",
      location: "Greensboro, Nc.",
      year: "2024",
      category: "Community"
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
    <section className="w-full bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-lg md:text-xl font-medium text-b1 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Construction Projects
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our portfolio of successfully completed construction projects showcasing our expertise and craftsmanship.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden  shadow-md h-[400px] cursor-pointer"
              variants={item}
              whileHover={cardHover}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={false}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{ transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)' }}
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
                {/* <span className={`${
                  project.category === "Residential" 
                    ? "bg-blue-500" 
                    : project.category === "Commercial" 
                      ? "bg-indigo-500" 
                      : project.category === "Renovation" 
                        ? "bg-amber-500" 
                        : "bg-emerald-500"
                } text-white text-xs md:text-sm font-medium px-3 py-1  shadow`}>
                  {project.category}
                </span> */}
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white z-10">
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-2"
                  initial={false}
                  animate={{
                    y: hoveredProject === project.id ? -10 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {project.title}
                </motion.h3>

                <motion.div
                  className="overflow-hidden p-2"
                  initial={false}
                  animate={{
                    height: hoveredProject === project.id ? "auto" : 0,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-gray-200 text-sm md:text-base mb-4"
                    initial={false}
                    animate={contentHover}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>

                  {/* <motion.button
                    className="bg-white text-gray-900 font-medium px-4 py-2  flex items-center gap-1 text-sm md:text-base w-full justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button> */}
                </motion.div>
              </div>

              {/* Hover overlay effect */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-b1/20 to-transparent"
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
          <Link href="/projects"  >
          <motion.button
            className="bg-b1 text-white font-medium px-8 py-3  flex items-center gap-2 mx-auto text-base md:text-lg shadow-md hover:bg-b1 transition-colors"
            whileHover={{
              scale: 1.03,
              
            }}
            whileTap={{ scale: 0.97 }}
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;