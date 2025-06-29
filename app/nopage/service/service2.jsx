// components/ServicesSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        // Commercial Services
        {
            id: 1,
            title: "Commercial Exterior Painting Services",
            description: "Enhance your commercial property’s curb appeal with expert exterior painting solutions tailored for businesses.",
            image: "/commercial-painting.webp",
            category: "Commercial"
        },
        {
            id: 2,
            title: "Commercial Landscaping and Hardscaping Solutions",
            description: "Professional landscaping and hardscaping services to elevate your business exterior and attract more customers.",
            image: "/commercial-landscaping.jpg",
            category: "Commercial"
        },
        {
            id: 3,
            title: "Walkway Installation for Commercial Properties",
            description: "Safe, durable, and attractive walkway solutions for business premises and commercial buildings.",
            image: "/walkway-installation.webp",
            category: "Commercial"
        },
        {
            id: 4,
            title: "Streetlight Installation & Maintenance",
            description: "Reliable streetlight services ensuring safety and visibility for your commercial spaces.",
            image: "/streetlight.webp",
            category: "Commercial"
        },
        {
            id: 5,
            title: "Asphalt Parking Lot Paving for Businesses",
            description: "Smooth, long-lasting parking lot paving services customized for commercial use.",
            image: "/parking-lot.webp",
            category: "Commercial"
        },
        {
            id: 6,
            title: "Commercial Store Renovation & Buildouts",
            description: "Complete renovation and buildout services to create functional, modern commercial spaces.",
            image: "/store-renovation.jpg",
            category: "Commercial"
        },
        {
            id: 7,
            title: "Hotel & Motel Renovation Services",
            description: "Expert renovation for hospitality properties focused on comfort, design, and durability.",
            image: "/hotel-renovation.jpg",
            category: "Commercial"
        },
        {
            id: 8,
            title: "Dental Clinic & Daycare Renovation",
            description: "Specialized renovations for clinics and daycare centers with safety and functionality in mind.",
            image: "/clinic-daycare.jpg",
            category: "Commercial"
        },
        {
            id: 9,
            title: "Multi-Family Property Renovation Services",
            description: "Upgrades and remodels for apartments and multi-unit residences to enhance tenant experience.",
            image: "/multi-family.webp",
            category: "Commercial"
        },
        {
            id: 10,
            title: "Commercial Roofing Contractors",
            description: "High-performance roofing solutions for all types of commercial buildings.",
            image: "/commercial-roofing.jpg",
            category: "Commercial"
        },
        {
            id: 11,
            title: "Commercial Waterproofing Services",
            description: "Protect your commercial investment with professional waterproofing and sealing.",
            image: "/commercial-waterproofing.webp",
            category: "Commercial"
        },

        // Residential Services
        {
            id: 12,
            title: "Residential Flooring Installation & Replacement",
            description: "Beautiful and durable flooring solutions tailored for your home’s style and comfort.",
            image: "/residential-flooring.jpg",
            category: "Residential"
        },
        {
            id: 13,
            title: "Interior & Exterior House Painting Services",
            description: "Expert painting services to revitalize your home’s appearance inside and out.",
            image: "/house-painting.jpg",
            category: "Residential"
        },
        {
            id: 14,
            title: "Bathroom Remodeling Contractors",
            description: "Transform your bathroom with modern design, quality fixtures, and expert craftsmanship.",
            image: "/bathroom-remodel.webp",
            category: "Residential"
        },
        {
            id: 15,
            title: "Home Layout Alteration & Open Floor Planning",
            description: "Redesign your home’s interior for better flow, light, and livability.",
            image: "/open-floor-plan.webp",
            category: "Residential"
        },
        {
            id: 16,
            title: "Electrical Upgrades & Panel Replacement",
            description: "Safe and efficient electrical services including upgrades, rewiring, and panel replacements.",
            image: "/electrical-upgrades.webp",
            category: "Residential"
        },
        {
            id: 17,
            title: "Kitchen Remodeling Services",
            description: "Modern kitchen remodels combining functionality with design that fits your lifestyle.",
            image: "/kitchen-remodel.webp",
            category: "Residential"
        },
        {
            id: 18,
            title: "Backyard & Patio Renovation Services",
            description: "Create a beautiful and usable outdoor space with our expert renovation services.",
            image: "/patio-renovation.jpg",
            category: "Residential"
        },
        {
            id: 19,
            title: "Basement Finishing & Remodeling",
            description: "Maximize your home’s usable space with expert basement finishing and renovation.",
            image: "/basement-remodel.jpg",
            category: "Residential"
        },
        {
            id: 20,
            title: "Residential Roofing Services",
            description: "Durable and efficient roofing systems tailored to your home’s needs.",
            image: "/commercial-roofing.jpg",
            category: "Residential"
        },
        {
            id: 21,
            title: "Waterproofing Solutions for Homes",
            description: "Protect your home from moisture damage with advanced waterproofing techniques.",
            image: "/commercial-waterproofing.webp",
            category: "Residential"
        },
        {
            id: 22,
            title: "HVAC Installation & Replacement",
            description: "Energy-efficient HVAC system installs and replacements for year-round comfort.",
            image: "/hvac.jpg",
            category: "Residential"
        },
        {
            id: 23,
            title: "Driveway Paving & Resurfacing",
            description: "Expert driveway solutions that add curb appeal and durability to your property.",
            image: "/driveway.jpg",
            category: "Residential"
        },

        // Consulting Services
        {
            id: 24,
            title: "Architectural and Interior Design Consulting",
            description: "Tailored design consultation services for residential and commercial projects.",
            image: "/design-consulting.jpg",
            category: "Consulting"
        },
        {
            id: 25,
            title: "Cost-Plus Construction Services for Investors",
            description: "Transparent construction model providing cost control and value for real estate investors.",
            image: "/cost-plus.jpg",
            category: "Consulting"
        },
        {
            id: 26,
            title: "Pre-Acquisition Property Estimates & Consulting",
            description: "Get accurate estimates before purchasing a property to avoid costly surprises.",
            image: "/property-consulting.jpg",
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

    // Group services by category
    const servicesByCategory = {
        Commercial: services.filter(service => service.category === "Commercial"),
        Residential: services.filter(service => service.category === "Residential"),
        Consulting: services.filter(service => service.category === "Consulting")
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
        <section className="w-full bg-blue-50 py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 lg:mb-20"
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
                        Our Construction Services
                    </motion.h1>
                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Comprehensive solutions for all your construction needs, delivered with precision and expertise.
                    </motion.p>
                </motion.div>

                {/* Services by Category */}
                {Object.entries(servicesByCategory).map(([category, services]) => (
                    <div key={category} className="mb-16">
                        {/* Category Header */}
                        <motion.div
                            className="flex items-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{category} Services</h2>
                            <div className="ml-4 flex-grow h-px bg-gray-300"></div>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {services.map((service) => (
                                <motion.div
                                    key={service.id}
                                    className="relative overflow-hidden shadow-lg h-[360px] cursor-pointer"
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6 text-white z-10">
                                        <motion.h3
                                            className="text-xl lg:text-xl font-bold mb-2"
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
                                                className="text-gray-200 text-sm lg:text-base mb-4"
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
                                                    View Details
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
                    </div>
                ))}

                {/* Contact CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Ready to start your project?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Contact us today for a free consultation and quote on your construction needs.
                    </p>
                    <Link href="/get-quote">
                    <motion.button
                        className="bg-b1 shine-button text-white font-medium px-8 py-3  flex items-center gap-2 mx-auto text-base lg:text-lg shadow-lg  transition-colors"
                        whileHover={{
                            scale: 1.03,

                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Request a Quote
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

export default ServicesSection;