// app/projects/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Mendenhall Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of a historical apartment building in the heart of downtown Greensboro, NC.",
      image: "/Mendenhall-Apartments.jpeg",
      location: "Greensboro, NC",
      year: "2025",
      category: "Residential"
    },
    {
      id: 2,
      title: "W-market Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of an apartment building on West Market st Greensboro, NC.",
      image: "/W-market-Apartments.jpeg",
      location: "Greensboro, NC",
      year: "2024",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Duplex in Danville, NC",
      description: "Modern duplex construction with energy-efficient design and premium finishes.",
      image: "/duplex-danville.jpeg",
      location: "Danville, NC",
      year: "2023",
      category: "Residential"
    },
    {
      id: 4,
      title: "7 House Portfolio in Henderson, NC",
      description: "A portfolio of seven residential properties built with consistent quality and design.",
      image: "/henderson-portfolio.jpeg",
      location: "Henderson, NC",
      year: "2024",
      category: "Residential"
    },
    {
      id: 5,
      title: "Oak Market",
      description: "SOVANOCA recently delivered a complete inside renovation of a Convenience store in Danville, VA.",
      image: "/oak-market.jpeg",
      location: "Danville, VA",
      year: "2023",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Acai Express",
      description: "SOVANOCA recently delivered a complete inside design of a Sports Bar In Cary, NC.",
      image: "/acai-express.jpeg",
      location: "Cary, NC",
      year: "2023",
      category: "Commercial"
    },
    {
      id: 7,
      title: "The Yurt at Sanford",
      description: "SOVANOCA recently delivered a Unique pre-fab structure for an airbnb host in Sanford, NC.",
      image: "/The-Yurt-at-Sanford.jpeg",
      location: "Sanford, NC",
      year: "2023",
      category: "Specialty"
    },
    {
      id: 8,
      title: "UNCG Apartments",
      description: "SOVANOCA recently delivered a complete inside and outside renovation of an apartment building in Greensboro, NC.",
      image: "/UNCG-Apartments.jpeg",
      location: "Greensboro, NC",
      year: "2024",
      category: "Residential"
    }
  ];

  // Gallery images
  const galleryImages = [
    "/project-gallery-1.jpeg",
    "/project-gallery-2.jpeg",
    "/project-gallery-3.jpeg",
    "/project-gallery-4.jpeg",
    "/project-gallery-5.jpeg",
    "/project-gallery-6.jpeg",
    "/project-gallery-7.jpeg",
    "/project-gallery-8.jpeg",
    "/project-gallery-9.jpeg",
    "/project-gallery-10.jpeg",
    "/project-gallery-11.jpeg",
    "/project-gallery-12.jpeg",
    "/project-gallery-13.jpeg",
    "/project-gallery-14.jpeg",
    "/project-gallery-15.jpeg",
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-b1 text-white">
        
        
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block bg-white text-b1 px-4 py-2  mb-6"
              >
                <span className="font-medium">Our Portfolio</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              >
                Building <span className="text-blue-300">North Carolina's Future</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Explore our portfolio of construction projects showcasing our commitment to quality, innovation, and excellence across North Carolina.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link href="/get-quote" passHref>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white shine-button1 text-b1 font-bold px-8 py-3  shadow-lg"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                
                <Link href="/services" passHref>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 "
                  >
                    View Our Services
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-b1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Featured Projects
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our recent work across residential, commercial, and specialty construction
            </p>
            <div className="h-1 w-24 bg-b1 mx-auto  mt-4"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white  overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute top-4 right-4 bg-b1 text-white px-3 py-1  text-sm font-medium">
                    {project.category}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    <div className="text-gray-600 font-medium">{project.year}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-b1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Project Gallery
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A visual journey through our construction sites and completed projects
            </p>
            <div className="h-1 w-24 bg-b1 mx-auto  mt-4"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative h-64 overflow-hidden group"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={image}
                  alt={`Construction project ${index + 1}`}
                  title={`Construction project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
     
      <motion.div
                className="mt-16 bg-b1 mb-10 max-w-4xl mx-auto shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white  opacity-10" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300  opacity-20" />

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Ready to Start Your Construction Project?
                    </motion.h3>

                    <motion.p
                        className="text-lg text-orange-100 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Contact us today for a free consultation and quote on your construction needs.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                      <Link href="/get-quote">
                        <motion.button
                            className=" border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3  hover:bg-white/10 transition flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            Request a Quote →
                        </motion.button>
                          </Link>
                        {/* <Link href="tel:+15512001350" title="Construction company's Phone number" passHref>
                            <motion.p
                                className="bg-white text-b1 font-bold px-8 py-3 hover:bg-gray-100 transition flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Us: (551) 200-1350
                            </motion.p>
                        </Link> */}


                    </motion.div>
                </div>
            </motion.div>
    </div>
  );
}