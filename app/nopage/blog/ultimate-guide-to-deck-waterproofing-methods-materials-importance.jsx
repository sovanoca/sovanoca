"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogPost = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll to section function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    // Table of Contents Component
    const TableOfContents = ({ isMobile }) => (
        <div className={`bg-white shadow-lg p-6 border border-gray-200 ${isMobile ? 'mb-8' : 'sticky top-24'}`}>
            <h2 className="text-xl font-bold text-b1 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
                {[
                    { id: 'introduction', text: 'Introduction: Why Deck Waterproofing is Non-Negotiable' },
                    { id: 'methods', text: 'Deck Waterproofing Methods: Choosing the Right Approach' },
                    { id: 'membrane', text: '- Membrane Systems', indent: true },
                    { id: 'coating', text: '- Liquid Coatings', indent: true },
                    { id: 'tile', text: '- Tile Systems', indent: true },
                    { id: 'materials', text: 'Waterproofing Materials: Pros, Cons, and Costs' },
                    { id: 'lifespan', text: 'How Long Does Deck Waterproofing Last?' },
                    { id: 'benefits', text: 'The Benefits: More Than Just Leak Prevention' },
                    { id: 'costs', text: 'Cost Analysis: Investment vs. Expense' },
                    { id: 'conclusion', text: 'Conclusion: Protecting Your Investment' },
                ].map((item) => (
                    <motion.li
                        key={item.id}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left w-full px-3 py-2 transition-all duration-200 ${activeSection === item.id
                                ? 'bg-blue-100 text-b1 font-medium'
                                : 'hover:bg-gray-100'
                                } ${item.indent ? 'ml-4' : ''}`}
                        >
                            {item.text}
                        </button>
                    </motion.li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Desktop Table of Contents */}
                <div className="hidden lg:block lg:col-span-1">
                    <TableOfContents isMobile={false} />
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <article className="prose prose-lg max-w-none">
                        {/* Header */}
                        <motion.div
                            className="text-center mb-12"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                The Ultimate Guide to Deck Waterproofing: Methods, Materials, and Why It's Crucial
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-600">
                                <span>July 11, 2025</span>
                                <span>•</span>
                                <span>12 min read</span>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div
                            className="mb-12 overflow-hidden shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src="/ultimate-guide-to-deck-waterproofing.webp"
                                alt="Professional deck waterproofing installation showing membrane application"
                                className="w-full h-[40vh] lg:h-[70vh] object-cover"
                            />
                        </motion.div>

                        {/* Mobile Table of Contents */}
                        <div className="lg:hidden mb-12">
                            <TableOfContents isMobile={true} />
                        </div>

                        {/* Introduction */}
                        <motion.section
                            id="introduction"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: Why Deck Waterproofing is Non-Negotiable</h2>
                            <p className="mb-4">
                                For homeowners with outdoor living spaces, deck waterproofing represents one of the most critical investments you can make to protect your property. Whether you have a rooftop terrace, balcony, or ground-level deck, water intrusion can cause catastrophic damage that compromises structural integrity and leads to costly repairs.
                            </p>
                            <p className="mb-4">
                                The consequences of inadequate waterproofing extend far beyond simple leaks. Unchecked moisture can rot wood framing, corrode metal components, damage interior finishes, and create ideal conditions for mold and mildew growth. What begins as a small leak can quickly escalate into a major structural issue requiring extensive repairs.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>Industry Insight:</strong> According to the National Association of Home Builders, water intrusion is the leading cause of building envelope failures, accounting for over 70% of all construction litigation. Proper deck waterproofing can prevent these issues and extend the life of your outdoor living space by decades.
                                </p>
                            </div>
                            <p>
                                In this comprehensive guide, we'll explore all aspects of deck waterproofing—from the various methods and materials available to cost considerations and long-term benefits. Whether you're building a new deck or renovating an existing one, this information will help you make informed decisions to protect your investment.
                            </p>
                        </motion.section>

                        {/* Methods */}
                        <motion.section
                            id="methods"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deck Waterproofing Methods: Choosing the Right Approach</h2>
                            <p className="mb-4">
                                Selecting the appropriate waterproofing method depends on several factors, including your deck's location, intended use, substrate material, and budget. Each approach has distinct advantages and limitations that make it suitable for specific applications.
                            </p>

                            {/* Membrane Systems */}
                            <motion.section
                                id="membrane"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Method #1: Membrane Systems</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <p className="mb-4">
                                            Sheet membrane systems are among the most reliable and durable waterproofing solutions available. These systems consist of rolls of waterproof material that are applied to the deck surface, creating a continuous barrier against water intrusion.
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Rubberized Asphalt Membranes:</strong> Self-adhering sheets that create a seamless barrier. Excellent for complex shapes and details.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>PVC and TPO Membranes:</strong> Thermoplastic materials that are heat-welded at seams for complete water protection. Highly durable and root-resistant.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>EPDM (Rubber) Membranes:</strong> Synthetic rubber sheets known for exceptional elasticity and weather resistance. Ideal for areas with extreme temperature fluctuations.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/deck-membrane-waterproofing.webp"
                                            alt="Deck membrane waterproofing installation"
                                            className="w-full h-72 object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 mb-6">
                                    <h4 className="text-lg font-bold text-b1 mb-3">Best Applications for Membrane Systems</h4>
                                    <p className="mb-3">
                                        Membrane systems excel in these scenarios:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Rooftop Decks</p>
                                            <p className="text-sm">Where failure would cause interior damage</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">High-Traffic Areas</p>
                                            <p className="text-sm">Commercial properties and multi-family buildings</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Complex Layouts</p>
                                            <p className="text-sm">Decks with penetrations and irregular shapes</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Planters & Green Roofs</p>
                                            <p className="text-sm">Where root resistance is critical</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Liquid Coatings */}
                            <motion.section
                                id="coating"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Method #2: Liquid-Applied Coatings</h3>
                                <p className="mb-4">
                                    Liquid waterproofing systems are applied as a fluid that cures to form a seamless, monolithic membrane. These systems offer excellent versatility and can conform to complex shapes without seams or joints.
                                </p>

                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/commercial-waterproofing.webp"
                                            alt="Liquid deck coating application"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Polyurethane Coatings:</strong> Flexible, durable, and UV-resistant. Excellent for exposed decks that receive direct sunlight.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Acrylic Coatings:</strong> Water-based options that are easy to apply and maintain. Often used as a protective top coat over other membranes.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Rubberized Liquid Membranes:</strong> Often reinforced with fabric at seams and transitions. Provides excellent elongation and crack-bridging capabilities.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Tile Systems */}
                            <motion.section
                                id="tile"
                                className="mb-6 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Method #3: Protected Membrane/Tile Systems</h3>
                                <p className="mb-4">
                                    This approach combines waterproofing membranes with protective layers and finished surfaces. The waterproofing layer is installed beneath the walking surface, protecting it from UV damage and wear.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0H9m2 0H5m2 0H3m2 0v-5a1 1 0 011-1h8a1 1 0 011 1v5m-6 0h4"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Pedestal Tile Systems</h4>
                                        <p>Ideal for rooftop decks where drainage and accessibility are important. Tiles are elevated above the waterproofing membrane.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Mortar Bed Systems</h4>
                                        <p>A traditional approach where tiles are set in a mortar bed over the waterproofing membrane. Provides excellent durability.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100 4h16a2 2 0 100-4H4z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Drainage Mat Systems</h4>
                                        <p>Specialized mats provide drainage and protection for the waterproofing membrane before the finish surface is installed.</p>
                                    </motion.div>
                                </div>
                            </motion.section>
                        </motion.section>

                        {/* Materials */}
                        <motion.section
                            id="materials"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Waterproofing Materials: Pros, Cons, and Costs</h2>
                            <p className="mb-6">
                                Understanding the characteristics of different waterproofing materials will help you select the best option for your specific needs and budget.
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Material</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Pros</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cons</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cost/SF (Installed)</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rubberized Asphalt</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Self-adhesive, excellent adhesion, flexible</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Can be heavy, requires protection from UV</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$8 - $12</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Residential decks, balconies</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PVC Membrane</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Durable, root-resistant, heat-weldable seams</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Can be punctured, requires professional installation</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$10 - $16</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Rooftop decks, green roofs</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EPDM Rubber</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Highly elastic, weather-resistant, long-lasting</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Seams require adhesive, can be damaged by oils</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$9 - $14</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">All climates, extreme temperature areas</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Polyurethane Liquid</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Seamless, UV resistant, flexible</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Surface preparation critical, skilled application needed</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$7 - $11</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Complex shapes, exposed applications</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Acrylic Coatings</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Easy application, breathable, low VOC</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Less durable, may require more frequent recoating</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$4 - $8</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Low-traffic areas, budget projects</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <p className="text-yellow-800">
                                    <strong>Professional Tip:</strong> The cost of materials is only part of the equation.
                                    Proper installation is critical to performance. Always hire experienced 
                                    <Link
                                        href="https://www.sovanoca.com/services/waterproofing"
                                        className="text-blue-700 underline hover:text-blue-800 mx-1"
                                    >
                                        waterproofing contractors
                                    </Link>
                                    who specialize in deck applications and offer warranties on both materials and labor.
                                </p>
                            </div>

                        </motion.section>

                        {/* Lifespan */}
                        <motion.section
                            id="lifespan"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Long Does Deck Waterproofing Last?</h2>
                            <p className="mb-6">
                                The lifespan of your deck waterproofing system depends on multiple factors, including the materials used, quality of installation, environmental conditions, and maintenance practices.
                            </p>

                            <div className="bg-white shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Lifespan by Material Type</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-3 px-4 text-left">Material</th>
                                                <th className="py-3 px-4 text-left">Average Lifespan</th>
                                                <th className="py-3 px-4 text-left">With Proper Maintenance</th>
                                                <th className="py-3 px-4 text-left">Key Factors Affecting Longevity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Rubberized Asphalt</td>
                                                <td className="py-3 px-4 border-b">10-15 years</td>
                                                <td className="py-3 px-4 border-b">15-20 years</td>
                                                <td className="py-3 px-4 border-b">UV exposure, foot traffic</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">PVC Membrane</td>
                                                <td className="py-3 px-4 border-b">20-25 years</td>
                                                <td className="py-3 px-4 border-b">25-30+ years</td>
                                                <td className="py-3 px-4 border-b">Puncture protection, seam integrity</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">EPDM Rubber</td>
                                                <td className="py-3 px-4 border-b">20-30 years</td>
                                                <td className="py-3 px-4 border-b">30+ years</td>
                                                <td className="py-3 px-4 border-b">Seam maintenance, chemical exposure</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">Polyurethane Liquid</td>
                                                <td className="py-3 px-4 border-b">10-15 years</td>
                                                <td className="py-3 px-4 border-b">15-20 years</td>
                                                <td className="py-3 px-4 border-b">Coating thickness, UV protection</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Acrylic Coatings</td>
                                                <td className="py-3 px-4">5-10 years</td>
                                                <td className="py-3 px-4">10-12 years</td>
                                                <td className="py-3 px-4">Recoating frequency, traffic wear</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Extending Your Waterproofing Lifespan</h3>
                            <p className="mb-4">
                                Proper maintenance can significantly extend the life of your waterproofing system:
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Regular Inspections:</strong> Check for cracks, blisters, or damage at least twice yearly and after severe weather events.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Keep Drains Clear:</strong> Ensure drainage systems are free of debris to prevent water pooling.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Address Repairs Promptly:</strong> Small issues can quickly become major problems if left unattended.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Professional Maintenance:</strong> Schedule professional inspections every 2-3 years to identify potential issues early.</p>
                                </li>
                            </ul>
                        </motion.section>

                        {/* Benefits */}
                        <motion.section
                            id="benefits"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Benefits: More Than Just Leak Prevention</h2>
                            <p className="mb-6">
                                While preventing water intrusion is the primary purpose of deck waterproofing, the benefits extend far beyond simple leak protection. A properly waterproofed deck delivers multiple advantages that enhance your property's value, safety, and usability.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Structural Protection</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Prevents wood rot and structural deterioration</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Protects against metal corrosion and concrete spalling</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Eliminates freeze-thaw damage in colder climates</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Maintains structural integrity for decades</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Health & Safety Benefits</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Prevents mold and mildew growth</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Reduces slip hazards from water accumulation</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Creates a healthier indoor environment</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Prevents insect infestations attracted to moisture</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Advantages</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Protects interior finishes from water damage</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Extends the life of deck surfaces and structures</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Increases property value and marketability</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Reduces long-term maintenance and repair costs</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Usability</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Allows for more design options and finishes</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Creates dry, usable space below decks</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Enables rooftop gardens and green spaces</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Provides peace of mind during heavy rainfall</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 mb-6">
                                <h4 className="text-lg font-bold text-b1 mb-3">Case Study: Rooftop Deck Transformation</h4>
                                <p className="mb-3">
                                    A 15-year-old rooftop deck in a urban apartment building was experiencing chronic leaks that damaged multiple units below. The homeowners association invested $45,000 in a complete waterproofing overhaul with a PVC membrane system.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">$120K</p>
                                        <p className="text-sm">Previous Repair Costs</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">0</p>
                                        <p className="text-sm">Leaks Post-Installation</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">25+ years</p>
                                        <p className="text-sm">Expected Lifespan</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">15%</p>
                                        <p className="text-sm">Property Value Increase</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Costs */}
                        <motion.section
                            id="costs"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Analysis: Investment vs. Expense</h2>
                            <p className="mb-6">
                                Understanding the costs associated with deck waterproofing helps you budget appropriately and recognize the value of this important investment. Prices vary based on method, materials, deck size, complexity, and geographic location.
                            </p>

                            <div className="bg-gray-50 p-6 mb-6">
                                <h4 className="font-bold text-lg mb-2">Average Waterproofing Costs by Deck Type</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Deck Type</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Low End</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">High End</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Average Total Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Small Balcony (50-100 sq ft)</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$500 - $800</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$1,000 - $1,600</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$750 - $1,200</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Residential Deck (200-400 sq ft)</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$1,600 - $3,200</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$4,000 - $6,400</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$2,800 - $4,800</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Large Terrace (500-800 sq ft)</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$4,000 - $6,400</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$10,000 - $16,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$7,000 - $11,200</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Rooftop Deck (1000+ sq ft)</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$8,000 - $12,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$20,000 - $30,000+</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$14,000 - $21,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Factors Influencing Waterproofing Costs</h3>
                            <p className="mb-4">
                                Several variables can significantly impact the final cost of your waterproofing project:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project-Specific Factors</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Deck Condition:</strong> Repair needs can add 20-50% to project costs</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Complexity:</strong> Multiple penetrations, angles, and details increase labor</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Accessibility:</strong> Rooftop and high-level decks may require special equipment</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Finish Materials:</strong> Tile, pavers, or wood decking add to total cost</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Regional & Timing Factors</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Geographic Location:</strong> Labor and material costs vary by region</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Seasonality:</strong> Spring and summer may command premium pricing</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Permit Requirements:</strong> Local regulations may require permits and inspections</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Warranty Options:</strong> Extended warranties may increase initial cost but provide long-term value</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <motion.div
                                className="mt-8 bg-b1 p-8 text-white mb-8"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">ROI Calculation: Waterproofing vs. Repair Costs</h3>
                                <div className="bg-white/20 p-6 mb-4">
                                    <div className="text-center text-lg md:text-xl">
                                        While waterproofing represents a significant investment, it's minimal compared to the cost of repairing water damage. The average cost to repair structural damage from water intrusion is <span className="font-bold">3-5 times</span> the cost of proper waterproofing installation.
                                    </div>
                                </div>
                                <p className="text-blue-100 text-center">
                                    Investing in quality waterproofing upfront protects against exponentially higher repair costs down the road.
                                </p>
                            </motion.div>
                        </motion.section>

                        {/* Conclusion */}
                        <motion.section
                            id="conclusion"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Protecting Your Investment for Years to Come</h2>
                            <p className="mb-4">
                                Deck waterproofing is not merely an optional upgrade—it's an essential protection for your property investment. The relatively modest cost of proper waterproofing pales in comparison to the extensive damage that water intrusion can cause to structural elements, interior finishes, and even your health through mold growth.
                            </p>
                            <p className="mb-4">
                                By selecting the appropriate waterproofing method for your specific deck configuration, climate, and usage patterns, you can extend the life of your outdoor living space by decades. Whether you choose membrane systems, liquid-applied coatings, or protected membrane assemblies, the key to success lies in proper installation by experienced professionals.
                            </p>

                            <motion.div
                                className="mt-16 bg-b1 shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10" />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300 opacity-20" />

                                <div className="relative z-10 max-w-2xl mx-auto text-center">
                                    <motion.h3
                                        className="text-2xl md:text-3xl font-bold mb-6"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Ready to Protect Your Deck Investment?
                                    </motion.h3>

                                    <motion.p
                                        className="text-lg text-blue-100 mb-8"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Our waterproofing experts are ready to assess your deck and recommend the best solution for your needs and budget.
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
                                                className="border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3 hover:bg-white/10 transition flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Request a Quote →
                                            </motion.button>
                                        </Link>
                                        <Link href="tel:+13365003171" title="Construction company's Phone number" passHref>
                                            <motion.p
                                                className="bg-white text-b1 font-bold px-8 py-3 hover:bg-gray-100 transition flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                                Call Us: (336) 500-3171
                                            </motion.p>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <p className="mt-8">
                                Remember that deck waterproofing is a long-term investment in your property's value, safety, and usability. By addressing waterproofing proactively rather than reactively, you can avoid the stress, inconvenience, and expense of water damage repairs while enjoying your outdoor space with complete peace of mind for years to come.
                            </p>
                        </motion.section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;