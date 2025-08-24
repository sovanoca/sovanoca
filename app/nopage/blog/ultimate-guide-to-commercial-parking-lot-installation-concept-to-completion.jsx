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
    <div
        className={`bg-white shadow-lg p-6 border h-[80vh] overflow-y-auto border-gray-200 ${
            isMobile ? 'mb-8' : 'sticky top-24'
        }`}
    >
        <h2 className="text-xl font-bold text-b1 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
            {[
                { id: 'introduction', text: 'Introduction: The Foundation of Commercial Success' },
                { id: 'planning', text: 'Phase 1: Planning and Design' },
                { id: 'site-assessment', text: '- Site Assessment', indent: true },
                { id: 'design-considerations', text: '- Design Considerations', indent: true },
                { id: 'permitting', text: '- Permitting and Regulations', indent: true },
                { id: 'materials', text: 'Materials: Choosing the Right Surface' },
                { id: 'installation', text: 'Phase 2: The Installation Process' },
                { id: 'excavation', text: '- Excavation and Grading', indent: true },
                { id: 'base-installation', text: '- Base Installation', indent: true },
                { id: 'paving', text: '- Paving and Compaction', indent: true },
                { id: 'finishing', text: '- Finishing and Striping', indent: true },
                { id: 'costs', text: 'Cost Analysis: Budgeting for Your Parking Lot' },
                { id: 'maintenance', text: 'Maintenance and Longevity' },
                { id: 'benefits', text: 'Benefits of Professional Installation' },
                { id: 'conclusion', text: 'Conclusion: Your Investment in Quality' },
            ].map((item) => (
                <motion.li
                    key={item.id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full px-3 py-2 transition-all duration-200 ${
                            activeSection === item.id
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
                            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                                The Ultimate Guide to Commercial Parking Lot Installation: From Concept to Completion
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-600">
                                <span>July 11, 2025</span>
                                <span>•</span>
                                <span>15 min read</span>
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
                                src="/ultimate-guide-to-commercial-parking-lot-installation.webp"
                                alt="Commercial parking lot installation showing paving equipment and fresh asphalt"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: The Foundation of Commercial Success</h2>
                            <p className="mb-4">
                                For business owners and property managers, a well-designed and properly constructed parking lot is far more than just a place for vehicles—it's the first impression customers have of your establishment and a critical component of your property's functionality and value. A commercial parking lot that is thoughtfully planned, correctly installed, and properly maintained can significantly enhance customer experience, improve safety, and increase property value.
                            </p>
                            <p className="mb-4">
                                The process of installing a commercial parking lot involves much more than simply laying asphalt or concrete. It requires careful planning, knowledge of local regulations, proper drainage design, selection of appropriate materials, and skilled execution. Cutting corners during installation can lead to premature deterioration, safety hazards, and costly repairs down the line.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>Industry Insight:</strong> According to the National Asphalt Pavement Association, properly installed and maintained asphalt parking lots can last 15-20 years or more, while poorly constructed lots may require major repairs in as little as 3-5 years. Investing in quality installation from the beginning can save businesses significant money over the life of the pavement.
                                </p>
                            </div>
                            <p>
                                In this comprehensive guide, we'll walk you through every aspect of commercial parking lot installation—from initial planning and design considerations to material selection, the installation process, cost analysis, and long-term maintenance. Whether you're building a new parking facility or renovating an existing one, this information will help you make informed decisions and ensure your investment provides maximum returns.
                            </p>
                        </motion.section>

                        {/* Planning */}
                        <motion.section
                            id="planning"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Planning and Design</h2>
                            <p className="mb-4">
                                The success of any commercial parking lot project begins long before the first shovel hits the ground. Proper planning and design are critical to creating a functional, durable, and cost-effective parking facility that meets your needs and complies with all regulations.
                            </p>

                            {/* Site Assessment */}
                            <motion.section
                                id="site-assessment"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Site Assessment: Understanding Your terrain</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <p className="mb-4">
                                            Before any design work can begin, a thorough site assessment must be conducted to understand the existing conditions that will impact your parking lot installation.
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
                                                <p className="ml-3"><strong>Soil Testing:</strong> Analysis of soil composition, stability, and load-bearing capacity to determine appropriate base requirements.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Topographic Survey:</strong> Mapping of existing elevations to inform drainage planning and grading requirements.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Utility Location:</strong> Identification of existing underground utilities to avoid conflicts during excavation.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Environmental Considerations:</strong> Assessment of any environmental constraints or regulations that may impact design.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/parking-lot-site-assessment.webp"
                                            alt="Engineer conducting site assessment for parking lot construction"
                                            className="w-full h-72 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>

                            {/* Design Considerations */}
                            <motion.section
                                id="design-considerations"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design Considerations: Creating a Functional Layout</h3>
                                <p className="mb-4">
                                    A well-designed parking lot balances multiple factors to create a safe, efficient, and user-friendly space.
                                </p>

                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/parking-lot-design.webp"
                                            alt="Parking lot design plans and layout"
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
                                                <p className="ml-3"><strong>Parking Space Dimensions:</strong> Standard spaces are typically 9' x 18', but larger spaces may be needed for certain businesses or to meet ADA requirements.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Traffic Flow Patterns:</strong> Efficient entry and exit points, one-way aisles, and clear circulation paths reduce congestion.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Drainage Design:</strong> Proper slope (typically 1-2%) and strategic placement of drains prevent water accumulation and extend pavement life.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Lighting Planning:</strong> Adequate illumination enhances safety and security during evening hours.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Landscaping Integration:</strong> Strategic placement of green spaces and islands improves aesthetics and helps with drainage.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 mb-6">
                                    <h4 className="text-lg font-bold text-b1 mb-3">ADA Compliance Requirements</h4>
                                    <p className="mb-3">
                                        The Americans with Disabilities Act sets specific requirements for commercial parking lots:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Accessible Spaces</p>
                                            <p className="text-sm">Minimum of 1 accessible space for every 25 spaces</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Van Accessible</p>
                                            <p className="text-sm">At least 1 van-accessible space for every 6 accessible spaces</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Size Requirements</p>
                                            <p className="text-sm">Standard accessible spaces: 8' wide with 5' access aisle</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Signage</p>
                                            <p className="text-sm">Proper signage at designated accessible parking spaces</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Permitting */}
                            <motion.section
                                id="permitting"
                                className="mb-6 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Permitting and Regulations: Navigating Legal Requirements</h3>
                                <p className="mb-4">
                                    Commercial parking lot projects typically require various permits and must comply with local, state, and federal regulations.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Zoning Approvals</h4>
                                        <p>Verification that parking lot design complies with local zoning ordinances regarding impervious surface limits, setbacks, and land use requirements.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0H9m2 0H5m2 0H3m2 0v-5a1 1 0 011-1h8a1 1 0 011 1v5m-6 0h4"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Building Permits</h4>
                                        <p>Official authorization to begin construction, typically requiring submission of detailed plans and engineering calculations.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Stormwater Management</h4>
                                        <p>Compliance with EPA regulations and local stormwater management requirements, often requiring retention basins or other runoff controls.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Environmental Permits</h4>
                                        <p>Additional approvals may be needed if the project impacts wetlands, requires tree removal, or affects other protected resources.</p>
                                    </motion.div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <p className="text-yellow-800">
                                        <strong>Professional Tip:</strong> The permitting process can take several weeks or even months, depending on your location and the complexity of your project. Factor this timeline into your overall project schedule to avoid delays. Experienced contractors often have established relationships with local officials and can help navigate the permitting process more efficiently.
                                    </p>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials: Choosing the Right Surface for Your Needs</h2>
                            <p className="mb-6">
                                Selecting the appropriate paving material is one of the most critical decisions in commercial parking lot installation. Each option has distinct advantages, limitations, and cost implications that must be considered in relation to your specific needs, budget, and climate.
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Material</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Pros</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cons</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cost/SF (Installed)</th>
                                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Expected Lifespan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Asphalt</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Cost-effective, quick installation, smooth surface, easy repairs</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Regular maintenance needed, can soften in extreme heat</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$3 - $5</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">15-20 years</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Concrete</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Durable, long-lasting, low maintenance, resistant to oil stains</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Higher initial cost, longer installation time, can crack in freeze-thaw cycles</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$6 - $10</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">20-30 years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pavers</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Aesthetic appeal, easy spot repairs, permeable options available</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Higher cost, can shift over time, weed growth between joints</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$10 - $20</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">20-25 years</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gravel</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Lowest cost, quick installation, good drainage</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">High maintenance, not ADA compliant, dust issues</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$1 - $3</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">5-10 years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Permeable Pavement</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Environmental benefits, stormwater management, may qualify for incentives</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Higher cost, specialized maintenance, limited load capacity</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">$8 - $15</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">15-20 years</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Asphalt vs. Concrete: A Detailed Comparison</h3>
                            <p className="mb-4">
                                The choice between asphalt and concrete is the most common dilemma for commercial property owners. Here's a more detailed comparison:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Asphalt Advantages</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Faster Installation:</strong> Can typically be used within 24-48 hours after installation</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Easier Repairs:</strong> Patches blend well and are less noticeable</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Winter Performance:</strong> Dark color helps melt snow and ice faster</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Cost-Effective:</strong> Generally 30-40% less expensive than concrete</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Concrete Advantages</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Longer Lifespan:</strong> Can last 10+ years longer than asphalt with proper care</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Lower Maintenance:</strong> Requires less frequent repairs and resealing</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Heat Resistance:</strong> Doesn't soften in high temperatures like asphalt</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Design Options:</strong> Can be colored, stamped, or textured for aesthetic appeal</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 mb-6">
                                <h4 className="text-lg font-bold text-b1 mb-3">Climate Considerations</h4>
                                <p className="mb-3">
                                    Your local climate should significantly influence your material choice:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Cold Climates</p>
                                        <p className="text-sm">Asphalt performs well but requires regular sealing to protect against freeze-thaw damage. Concrete may be prone to salt deterioration.</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Hot Climates</p>
                                        <p className="text-sm">Concrete outperforms asphalt, which can soften and rut in extreme heat. Light-colored concrete also reduces heat island effect.</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Wet Regions</p>
                                        <p className="text-sm">Proper drainage is critical regardless of material. Permeable options can help manage stormwater runoff.</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Coastal Areas</p>
                                        <p className="text-sm">Concrete may be preferable due to its resistance to salt corrosion, though specialized asphalt mixes are also available.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Installation Process */}
                        <motion.section
                            id="installation"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: The Installation Process</h2>
                            <p className="mb-6">
                                A properly executed installation process is critical to the longevity and performance of your commercial parking lot. While specific steps vary based on the chosen material, the following overview covers the typical process for an asphalt parking lot installation.
                            </p>

                            {/* Excavation */}
                            <motion.section
                                id="excavation"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 1: Excavation and Grading</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <p className="mb-4">
                                            The first physical step in parking lot construction involves preparing the site for the new pavement. This process sets the foundation for everything that follows.
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
                                                <p className="ml-3"><strong>Clearing and Grubbing:</strong> Removal of vegetation, debris, and existing pavement (if applicable).</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Excavation:</strong> Removal of soil to achieve proper depth for base materials. Depth varies based on expected traffic load.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Grading:</strong> Precise shaping of the subgrade to establish proper drainage patterns and contours.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Compaction:</strong> The subgrade is thoroughly compacted to achieve the required density and prevent future settling.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/parking-lot-excavation.webp"
                                            alt="Excavation equipment preparing site for parking lot construction"
                                            className="w-full h-72 object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 mb-6">
                                    <h4 className="text-lg font-bold text-b1 mb-3">Grading Standards</h4>
                                    <p className="mb-3">
                                        Proper grading is essential for effective drainage:
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Minimum Slope</p>
                                            <p className="text-sm">1% (1/8" per foot)</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Maximum Slope</p>
                                            <p className="text-sm">5% (5/8" per foot)</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Ideal Slope</p>
                                            <p className="text-sm">2% (1/4" per foot)</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="font-bold text-b1">Crown Height</p>
                                            <p className="text-sm">1/4" per foot from center</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Base Installation */}
                            <motion.section
                                id="base-installation"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 2: Base Installation</h3>
                                <p className="mb-4">
                                    The base layer provides the structural foundation for your parking lot, distributing vehicle loads and preventing settlement. A properly installed base is critical to pavement longevity.
                                </p>

                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/parking-lot-base-installation.webp"
                                            alt="Gravel base installation for parking lot"
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
                                                <p className="ml-3"><strong>Material Selection:</strong> Typically crushed stone or recycled concrete aggregate, sized according to engineering specifications.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Layer Placement:</strong> Base material is spread in lifts (layers) of appropriate thickness, typically 4-6 inches per lift.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Moisture Control:</strong> Optimal moisture content is maintained to achieve proper compaction density.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Compaction:</strong> Each lift is thoroughly compacted with heavy rollers to achieve the required density (typically 95% of maximum density).</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Quality Control:</strong> Density tests are performed to ensure the base meets engineering specifications before proceeding.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 mb-6">
                                    <h4 className="font-bold text-lg mb-2">Base Thickness Recommendations</h4>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Expected Traffic</th>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Base Thickness</th>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Total Thickness (Base + Surface)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Passenger Vehicles Only</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">4-6 inches</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">6-8 inches</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Light Trucks/Vans</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">6-8 inches</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">8-10 inches</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Mixed Use (Cars + Occasional Trucks)</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">8-10 inches</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">10-12 inches</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Heavy Trucks/Constant Traffic</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">10-12+ inches</td>
                                                    <td className="px-4 py-3 text-sm text-gray-700">12-14+ inches</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Paving */}
                            <motion.section
                                id="paving"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 3: Paving and Compaction</h3>
                                <p className="mb-4">
                                    The paving phase involves placing the surface material and achieving proper compaction. For asphalt parking lots, this process requires precise temperature control and timing.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Material Delivery</h4>
                                        <p>Hot mix asphalt is delivered at temperatures between 275-325°F. Timing is critical to ensure proper workability and compaction.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Paving Operation</h4>
                                        <p>An asphalt paver spreads the material evenly at the predetermined depth, typically 2-3 inches for commercial parking lots.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Initial Compaction</h4>
                                        <p>A steel-wheel roller follows immediately behind the paver to achieve initial compaction before the asphalt cools too much.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Final Compaction</h4>
                                        <p>A pneumatic roller completes the compaction process, achieving the target density (typically 92-95% of theoretical maximum density).</p>
                                    </motion.div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <p className="text-yellow-800">
                                        <strong>Quality Check:</strong> Proper compaction is critical to pavement performance. Inadequate compaction can lead to premature raveling, cracking, and reduced lifespan. Core samples may be taken to verify density meets specifications.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Finishing */}
                            <motion.section
                                id="finishing"
                                className="mb-6 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 4: Finishing and Striping</h3>
                                <p className="mb-4">
                                    The final steps involve applying surface treatments, installing necessary features, and marking the parking spaces and traffic patterns.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-white p-6 shadow-md border border-gray-100">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Curing Time</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Asphalt:</strong> Typically requires 24-48 hours before light traffic can be allowed, 3-7 days for full curing</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Concrete:</strong> Requires 7 days before light traffic, 28 days for full strength development</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Temperature Sensitivity:</strong> Curing times vary significantly with temperature and humidity</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 shadow-md border border-gray-100">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Striping and Signage</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Layout Marking:</strong> Precise measurement and marking of parking spaces, aisles, and traffic flow patterns</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Striping Application:</strong> High-quality traffic paint or thermoplastic applied according to ADA and local regulations</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Signage Installation:</strong> Placement of regulatory signs, directional signs, and accessible parking designations</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 shadow-md border border-gray-100">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Features</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong> Wheel Stops:</strong> Installation where needed to prevent vehicles from overhanging sidewalks or landscaping</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Lighting:</strong> Installation of pole lights and electrical connections for parking lot illumination</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Landscaping:</strong> Placement of islands, planting areas, and protective bollards as designed</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 shadow-md border border-gray-100">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Final Inspection</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Quality Assessment:</strong> Thorough inspection of the completed work for compliance with specifications</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Documentation:</strong> Provision of warranty information, maintenance guidelines, and as-built drawings</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Client Walkthrough:</strong> Review of the completed project with the property owner or manager</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>
                        </motion.section>

                        {/* Costs */}
                        <motion.section
                            id="costs"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Analysis: Budgeting for Your Parking Lot</h2>
                            <p className="mb-6">
                                Understanding the costs associated with commercial parking lot installation helps you budget appropriately and make informed decisions about materials and features. Prices vary based on location, materials, size, site conditions, and current market factors.
                            </p>

                            <div className="bg-gray-50 p-6 mb-6">
                                <h4 className="font-bold text-lg mb-2">Average Installation Costs by Material</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Material</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Cost per SF</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">10,000 SF Lot</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">50,000 SF Lot</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Asphalt</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$3 - $5</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$30,000 - $50,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$150,000 - $250,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Most common choice for commercial lots</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Concrete</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$6 - $10</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$60,000 - $100,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$300,000 - $500,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Higher initial cost but longer lifespan</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Pavers</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$10 - $20</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$100,000 - $200,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$500,000 - $1,000,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Premium option for high-end properties</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Gravel</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$1 - $3</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$10,000 - $30,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$50,000 - $150,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Temporary or low-budget solution only</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Additional Cost Factors</h3>
                            <p className="mb-4">
                                Several variables can significantly impact the final cost of your parking lot project:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Site Preparation Costs</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Clearing and Grubbing:</strong> $1,000 - $5,000+ depending on vegetation</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Demolition:</strong> $2 - $7 per SF for removing existing pavement</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Grading:</strong> $1,000 - $10,000+ depending on site complexity</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Soil Stabilization:</strong> Additional $1 - $3 per SF for problematic soils</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Features</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Drainage Systems:</strong> $5,000 - $50,000+ depending on complexity</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Lighting:</strong> $2,000 - $10,000 per pole installed</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Landscaping:</strong> $1 - $5 per SF for islands and plantings</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Striping and Signage:</strong> $1,000 - $5,000 for typical commercial lot</p>
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
                                <h3 className="text-2xl font-bold mb-4">Long-Term Cost Considerations</h3>
                                <div className="bg-white/20 p-6 mb-4">
                                    <div className="text-center text-lg md:text-xl">
                                        While initial installation costs are important, considering long-term expenses provides a more complete financial picture:
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div className="bg-white/30 p-4">
                                        <p className="font-bold">Asphalt Maintenance</p>
                                        <p className="text-sm">$0.10 - $0.30 per SF annually for sealing and repairs</p>
                                    </div>
                                    <div className="bg-white/30 p-4">
                                        <p className="font-bold">Concrete Maintenance</p>
                                        <p className="text-sm">$0.05 - $0.15 per SF annually for cleaning and joint sealing</p>
                                    </div>
                                    <div className="bg-white/30 p-4">
                                        <p className="font-bold">Resurfacing Costs</p>
                                        <p className="text-sm">$1.50 - $3.00 per SF every 10-15 years for asphalt overlay</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <p className="text-yellow-800">
                                    <strong>Budgeting Tip:</strong> Always include a contingency of 10-15% in your budget for unexpected site conditions or changes during construction.
                                    Obtain multiple bids from reputable contractors and ensure they include all aspects of the project in their quotes for accurate comparison.
                                    For businesses considering <Link href="https://www.sovanoca.com/services/asphalt-parking-lot-for-businesses" className="text-blue-700 underline hover:text-blue-800">asphalt parking lot installation</Link>, make sure the proposal clearly covers materials, drainage, and long-term maintenance.
                                </p>
                            </div>

                        </motion.section>

                        {/* Maintenance */}
                        <motion.section
                            id="maintenance"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance and Longevity</h2>
                            <p className="mb-6">
                                Proper maintenance is essential to maximize the lifespan of your commercial parking lot and protect your investment. A well-maintained parking lot not only lasts longer but also creates a better impression for customers and reduces liability risks.
                            </p>

                            <div className="bg-white shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Maintenance Schedule</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-3 px-4 text-left">Timeframe</th>
                                                <th className="py-3 px-4 text-left">Asphalt Tasks</th>
                                                <th className="py-3 px-4 text-left">Concrete Tasks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Monthly</td>
                                                <td className="py-3 px-4 border-b">Inspect for cracks, drainage issues, and surface damage</td>
                                                <td className="py-3 px-4 border-b">Inspect for cracks, spalling, and joint conditions</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">Annually</td>
                                                <td className="py-3 px-4 border-b">Clean surface, repair cracks, inspect markings</td>
                                                <td className="py-3 px-4 border-b">Clean surface, inspect and clean drainage systems</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">2-3 Years</td>
                                                <td className="py-3 px-4 border-b">Seal coating (after first year, then every 2-3 years)</td>
                                                <td className="py-3 px-4 border-b">Deep cleaning, joint sealing if needed</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">5-7 Years</td>
                                                <td className="py-3 px-4 border-b">Evaluate for overlay needs, restriping</td>
                                                <td className="py-3 px-4 border-b">Evaluate for surface treatments, restriping</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">10-15 Years</td>
                                                <td className="py-3 px-4">Consider overlay or partial reconstruction</td>
                                                <td className="py-3 px-4">Evaluate for major repairs or replacement</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Maintenance Tasks</h3>
                            <p className="mb-4">
                                Regular maintenance addresses minor issues before they become major problems:
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
                                    <p className="ml-3"><strong>Crack Sealing:</strong> Filling cracks to prevent water infiltration, which can undermine the base course. Should be done when cracks reach 1/4" width.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Seal Coating (Asphalt):</strong> Protective coating that extends asphalt life by preventing oxidation, resisting oil and chemical spills, and restoring appearance. Typically applied every 2-3 years.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Patching:</strong> Repairing isolated areas of deterioration before they expand. Methods include throw-and-roll, semi-permanent, and full-depth patches.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Restriping:</strong> Maintaining clear, visible markings for parking spaces, traffic flow, and safety zones. Typically needed every 1-2 years depending on traffic volume.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-3"><strong>Drainage Maintenance:</strong> Keeping drains, catch basins, and drainage channels clear of debris to prevent water accumulation that can damage pavement.</p>
                                </li>
                            </ul>

                            <div className="bg-blue-50 p-6 mb-6">
                                <h4 className="text-lg font-bold text-b1 mb-3">Extending Pavement Life</h4>
                                <p className="mb-3">
                                    Proactive maintenance can significantly extend the life of your parking lot:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Asphalt Lifespan</p>
                                        <p className="text-sm">With proper maintenance: 15-20 years<br />Without maintenance: 8-12 years</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Concrete Lifespan</p>
                                        <p className="text-sm">With proper maintenance: 20-30 years<br />Without maintenance: 15-20 years</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Cost Savings</p>
                                        <p className="text-sm">$1 in regular maintenance can prevent $3-$5 in future repairs</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="font-bold text-b1">Resurfacing vs Replacement</p>
                                        <p className="text-sm">Resurfacing costs 30-50% of full replacement when done at the right time</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Benefits */}
                        <motion.section
                            id="benefits"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Installation</h2>
                            <p className="mb-6">
                                Investing in professional commercial parking lot installation delivers significant benefits that extend far beyond simply providing a place to park vehicles. A well-designed and properly constructed parking lot contributes to your business success in multiple ways.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Customer Experience</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Creates positive first impression of your business</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Provides safe, convenient parking for customers</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Reduces congestion and frustration during peak hours</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Accessible design accommodates all customers</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Property Value</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Well-maintained parking lots significantly enhance property appeal</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Professional installation adds to overall property valuation</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Attracts higher-quality tenants for commercial properties</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Reduces liability risks through proper safety features</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Optimized traffic flow reduces congestion and delays</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Adequate parking space reduces customer turnover</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Proper loading zones facilitate efficient deliveries</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Clear signage improves wayfinding and reduces confusion</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Benefits</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Proper drainage reduces stormwater runoff and pollution</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Permeable options recharge groundwater supplies</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Light-colored surfaces reduce heat island effect</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Landscaped islands provide green space and habitat</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 mb-6">
                                <h4 className="text-lg font-bold text-b1 mb-3">Case Study: Retail Center Transformation</h4>
                                <p className="mb-3">
                                    A struggling shopping center with a deteriorating parking lot invested $350,000 in a complete parking lot redesign and reconstruction. Results within 12 months:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">22%</p>
                                        <p className="text-sm">Increase in Customer Traffic</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">15%</p>
                                        <p className="text-sm">Increase in Tenant Retention</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">$1.2M</p>
                                        <p className="text-sm">Property Value Increase</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-b1">0</p>
                                        <p className="text-sm">Slip/Fall Incidents</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 shadow-md border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Return on Investment Analysis</h3>
                                <p className="mb-4">
                                    While the initial investment in a quality parking lot can be substantial, the returns justify the expense:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                        <p className="ml-2"><strong>Increased Business:</strong> Studies show better parking can increase retail sales by 5-10%</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                        <p className="ml-2"><strong>Reduced Maintenance:</strong> Proper installation reduces long-term repair costs by 30-50%</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                        <p className="ml-2"><strong>Liability Reduction:</strong> Well-maintained lots reduce slip/fall claims and associated costs</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                        <p className="ml-2"><strong>Property Value:</strong> Quality parking facilities can increase commercial property values by 10-20%</p>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Conclusion */}
                        <motion.section
                            id="conclusion"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Your Investment in Quality</h2>
                            <p className="mb-4">
                                A commercial parking lot is far more than just paved space for vehicles—it's a critical business asset that influences customer perceptions, operational efficiency, safety, and property value. The decision to invest in professional parking lot installation is one that pays dividends for years to come.
                            </p>
                            <p className="mb-4">
                                From careful planning and design through proper construction and ongoing maintenance, each phase of the parking lot lifecycle contributes to its overall performance and longevity. While cost is always a consideration, the focus should be on value rather than just initial price. A well-executed project using quality materials and following best practices will deliver superior returns compared to cut-rate alternatives that may require frequent repairs and premature replacement.
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
                                        Ready to Transform Your Property?
                                    </motion.h3>

                                    <motion.p
                                        className="text-lg text-blue-100 mb-8"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Our parking lot construction experts are ready to guide you through every step of your project, from initial concept to final completion.
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
                                Remember that your parking lot is often the first physical interaction customers have with your business. Making that experience positive through a well-designed, properly constructed, and well-maintained parking facility sends a powerful message about your attention to quality and customer care. By partnering with experienced professionals and following the guidelines outlined in this guide, you can ensure your parking lot investment delivers maximum returns for years to come.
                            </p>
                        </motion.section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;