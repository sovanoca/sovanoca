// components/ServicesSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "Exterior Painting Services",
            description: "Professional-grade exterior painting for commercial buildings—boost curb appeal, protect surfaces, and maintain brand presence.",
            image: "/commercial-painting.webp",
            category: "Commercial"
        },
        {
            id: 2,
            title: "Bathroom Remodeling",
            description: "Upgrade your bathroom with custom layouts, modern finishes, water-efficient fixtures, and expert installation.",
            image: "/bathroom-remodel.webp",
            category: "Residential"
        },
        {
            id: 3,
            title: "Kitchen Remodeling",
            description: "High-end kitchen renovations designed for style, flow, and function—from cabinetry to countertops and lighting.",
            image: "/kitchen-remodel.webp",
            category: "Residential"
        },
        {
            id: 4,
            title: "Architectural and Interior Design Consulting",
            description: "Work with our design consultants to plan efficient, aesthetic spaces for residential or commercial construction projects.",
            image: "/design-consulting.webp",
            category: "Consulting"
        }
    ];


    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s]/g, '') // Remove special characters
            .replace(/\s+/g, '-')    // Replace spaces with hyphens
            .replace(/-+/g, '-')     // Replace multiple hyphens with single
            .substring(0, 60);       // Limit slug length for SEO
    };

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
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Top-Rated Residential, Commercial & Consulting Construction Services
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        We provide expert construction, remodeling, and design consulting services—crafted to meet your unique residential or commercial needs with precision and quality.

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
                            className="relative overflow-hidden  shadow-md h-[360px] cursor-pointer"
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
                                <span className="bg-b1 text-white text-xs md:text-sm font-medium px-3 py-1  shadow">
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
                                    <Link href={`/services/${createSlug(service.title)}`} passHref>
                                        <motion.p
                                            className="inline-flex items-center gap-1 bg-white text-gray-900 font-medium px-2 py-2  text-sm lg:text-base"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            Explore Service Details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </motion.p>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Hover overlay effect */}
                            {hoveredCard === service.id && (
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
                ;

                <motion.div
                    className="mt-12 md:mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.03,
                            
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href="/services"
                            className="bg-b1 text-white font-medium px-8 py-3 flex items-center gap-2 mx-auto text-base md:text-lg shadow-md hover:bg-b1 transition-colors w-fit"
                        >
                            Browse All Construction Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;