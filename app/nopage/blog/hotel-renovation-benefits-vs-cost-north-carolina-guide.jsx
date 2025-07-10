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
                    { id: 'introduction', text: 'Introduction: The Million-Dollar Question' },
                    { id: 'cost-side', text: "The 'Cost' Side: Acknowledging the Investment" },
                    { id: 'benefits', text: "The 'Benefits' Side: Financial & Experiential Payoff" },
                    { id: 'revenue-growth', text: '- Direct Revenue Growth', indent: true },
                    { id: 'guest-experience', text: '- Enhanced Guest Experience', indent: true },
                    { id: 'competitive-edge', text: '- Competitive Edge & Future-Proofing', indent: true },
                    { id: 'verdict', text: 'The Verdict: Calculating Your Renovation ROI' },
                    { id: 'conclusion', text: 'Conclusion: Investment vs Expense' },
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
                                Hotel Renovation Benefits vs. Cost: A North Carolina Owner's Strategic Guide
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-600">
                                <span>July 11, 2025</span>
                                <span>•</span>
                                <span>10 min read</span>
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
                                src="/hotel-renovation-benefits-vs-cost-north-carolina-guide.jpg"
                                alt="Modern hotel renovation in North Carolina showcasing contemporary design and functionality"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: The Million-Dollar Question</h2>
                            <p className="mb-4">
                                For any hotel owner in North Carolina, a major renovation represents one of the most significant capital investments you'll make. The price tag can be daunting, especially when considering the complexities of projects across our diverse state—from the luxury resorts of Asheville to the coastal properties of the Outer Banks. But what many owners fail to consider is that the cost of <strong>not</strong> renovating can be even higher in the long run.
                            </p>
                            <p className="mb-4">
                                The hospitality landscape in North Carolina has transformed dramatically in recent years. With record tourism numbers—reaching over 43 million visitors annually—and increasing competition from new boutique properties and established brands upgrading their offerings, standing still is not an option. The question isn't whether you should renovate, but rather how to strategically approach renovation to maximize your return on investment.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>North Carolina Insight:</strong> According to Visit North Carolina, tourism spending reached $33.3 billion in 2023, with hotel revenue growing at 8.2% annually. Properties that completed strategic renovations saw 22% higher RevPAR growth than non-renovated competitors.
                                </p>
                            </div>
                            <p>
                                In this comprehensive guide, we'll provide a clear framework for analyzing the real ROI of a hotel renovation specifically for North Carolina properties. We'll break down costs, explore tangible benefits, and provide actionable strategies to ensure your renovation delivers maximum financial returns while enhancing guest experience.
                            </p>
                        </motion.section>

                        {/* Cost Side */}
                        <motion.section
                            id="cost-side"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 'Cost' Side: Acknowledging the Investment</h2>
                            <p className="mb-4">
                                Understanding the full scope of renovation costs is crucial for North Carolina hotel owners. Costs can vary significantly depending on your property's location, size, age, and renovation scope. Let's break down the primary cost components:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Hard Costs</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Construction and labor expenses</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Building materials and finishes</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Furniture, fixtures, and equipment (FF&E)</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Plumbing, electrical, and HVAC systems</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Soft Costs</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Architectural and interior design fees</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Engineering and consulting services</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Permitting and inspection fees (NC-specific)</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Project management and contingency</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">North Carolina-Specific Cost Considerations</h3>
                            <p className="mb-4">
                                Renovating in North Carolina presents unique factors that impact your budget:
                            </p>

                            <div className="bg-gray-50 p-6 mb-6">
                                <h4 className="font-bold text-lg mb-2">Regional Cost Variations</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Region</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Avg. Cost per Room</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Key Factors</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Charlotte Metro</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$25,000 - $45,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">High demand, premium finishes</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Raleigh-Durham</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$22,000 - $40,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Tech sector growth, business travelers</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Asheville</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$30,000 - $55,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Tourist premium, unique design requirements</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Coastal Areas</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$35,000 - $60,000+</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">Hurricane codes, seasonal constraints</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="mb-4">
                                While these numbers may seem substantial, it's essential to view them through the lens of long-term investment rather than short-term expense. The true question isn't "How much will this cost?" but rather "What return will this investment generate?"
                            </p>
                        </motion.section>

                        {/* Benefits Section */}
                        <motion.section
                            id="benefits"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 'Benefits' Side: The Financial & Experiential Payoff</h2>
                            <p className="mb-4">
                                Strategic hotel renovations deliver returns across multiple dimensions—financial, experiential, and competitive. For North Carolina properties, these benefits translate directly to improved profitability and market positioning.
                            </p>

                            {/* Benefit 1 */}
                            <motion.section
                                id="revenue-growth"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefit #1: Direct Revenue Growth (The Tangible ROI)</h3>
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <p className="mb-4">
                                            The most immediate impact of a well-executed renovation is increased revenue. Modern, updated hotels command premium rates and achieve higher occupancy, directly boosting your bottom line.
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
                                                <p className="ml-3"><strong>Increased Average Daily Rate (ADR):</strong> Renovated hotels in North Carolina typically see ADR increases of 15-35%. For example, a property in Raleigh that renovated its guest rooms increased rates from $149/night to $219/night while maintaining occupancy.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Higher Occupancy Rates:</strong> Updated properties consistently outperform competitors. A Wilmington beachfront hotel saw occupancy increase from 68% to 85% post-renovation during shoulder seasons.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Boosted RevPAR (Revenue Per Available Room):</strong> This key profitability metric combines ADR and occupancy. Renovated North Carolina hotels average 28% higher RevPAR than non-renovated competitors.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/hotelrooms.jpg"
                                            alt="Hotel Romms"
                                            className="w-full h-72 object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 mb-6">
                                    <h4 className="text-lg font-bold text-b1 mb-3">Case Study: Charlotte Boutique Hotel</h4>
                                    <p className="mb-3">
                                        A 120-room independent hotel in Charlotte invested $3.2 million in a comprehensive renovation. Results within 18 months:
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="text-2xl font-bold text-b1">32%</p>
                                            <p className="text-sm">ADR Increase</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="text-2xl font-bold text-b1">18%</p>
                                            <p className="text-sm">Occupancy Increase</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm">
                                            <p className="text-2xl font-bold text-b1">$560K</p>
                                            <p className="text-sm">Annual Revenue Gain</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Benefit 2 */}
                            <motion.section
                                id="guest-experience"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefit #2: Enhanced Guest Experience & Brand Reputation</h3>
                                <p className="mb-4">
                                    In today's experience-driven economy, your property's physical condition directly impacts your reputation and ability to attract guests. Renovations transform guest perception and loyalty.
                                </p>

                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3 flex justify-center">
                                        <img
                                            src="/hoteldining.jpg"
                                            alt="Hotel dining area"
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
                                                <p className="ml-3"><strong>Soaring Online Reviews:</strong> Renovated properties see average review scores increase by 0.8-1.2 points. A Greensboro hotel moved from 3.7 to 4.6 stars on TripAdvisor after renovation, directly impacting booking conversions.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Attracting Premium Clientele:</strong> Modern amenities and design appeal to higher-spending business travelers and tourists. Upscale properties in Asheville now command $400+ nightly rates post-renovation.</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-6 h-6 bg-green-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3"><strong>Social Media Marketing:</strong> Creating "Instagrammable" spaces generates organic marketing. The lobby transformation at a Durham hotel generated over 5,000 social media mentions in its first three months.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Benefit 3 */}
                            <motion.section
                                id="competitive-edge"
                                className="mb-6 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefit #3: Competitive Edge & Future-Proofing</h3>
                                <p className="mb-4">
                                    In North Carolina's competitive hospitality market, renovation provides crucial advantages that extend beyond immediate financial returns.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Market Dominance</h4>
                                        <p>Outshine competitors with modern amenities. A Raleigh hotel captured 24% market share after renovating when a new competitor opened nearby.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Increased Asset Value</h4>
                                        <p>Renovations typically increase property value by 25-40% of the renovation cost. A Wilmington hotel sold for $4.2M more than pre-renovation appraisals.</p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-6 shadow-md"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <div className="text-blue-600 mb-3">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Operational Efficiency</h4>
                                        <p>Modern systems reduce costs. A Charlotte hotel reduced energy expenses by 28% after upgrading HVAC and implementing smart room controls.</p>
                                    </motion.div>
                                </div>
                            </motion.section>
                        </motion.section>

                        {/* Verdict */}
                        <motion.section
                            id="verdict"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Verdict: How to Calculate Your Renovation ROI</h2>
                            <p className="mb-6">
                                Determining your renovation's ROI requires analyzing both costs and projected benefits. Use this framework to evaluate your potential return:
                            </p>

                            <motion.div
                                className="bg-b1 p-8 text-white mb-8"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">ROI Calculation Formula</h3>
                                <div className="bg-white/20 p-6 mb-4">
                                    <div className="text-center text-2xl md:text-3xl font-bold font-mono">
                                        ROI % = [
                                        <span className="text-yellow-300">(Annual Revenue Gain + Annual Operational Savings)</span>
                                        -
                                        <span className="text-red-300"> Total Renovation Cost</span>
                                        ] ÷
                                        <span className="text-blue-300"> Total Renovation Cost</span>
                                        × 100
                                    </div>
                                </div>
                                <p className="text-blue-100 text-center">
                                    This formula helps quantify your renovation's financial impact. Most North Carolina hotel renovations achieve positive ROI within 2-4 years.
                                </p>
                            </motion.div>

                            <div className="bg-white shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Hypothetical Case Study: Outer Banks Hotel</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-3 px-4 text-left">Metric</th>
                                                <th className="py-3 px-4 text-left">Pre-Renovation</th>
                                                <th className="py-3 px-4 text-left">Post-Renovation</th>
                                                <th className="py-3 px-4 text-left">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Rooms</td>
                                                <td className="py-3 px-4 border-b">100</td>
                                                <td className="py-3 px-4 border-b">100</td>
                                                <td className="py-3 px-4 border-b">-</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">ADR</td>
                                                <td className="py-3 px-4 border-b">$189</td>
                                                <td className="py-3 px-4 border-b">$249</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$60 (+32%)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Occupancy</td>
                                                <td className="py-3 px-4 border-b">72%</td>
                                                <td className="py-3 px-4 border-b">82%</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+10%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">RevPAR</td>
                                                <td className="py-3 px-4 border-b">$136.08</td>
                                                <td className="py-3 px-4 border-b">$204.18</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$68.10 (+50%)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Annual Revenue</td>
                                                <td className="py-3 px-4 border-b">$4,966,920</td>
                                                <td className="py-3 px-4 border-b">$7,452,570</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$2,485,650</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4">Renovation Cost</td>
                                                <td className="py-3 px-4">$3,500,000</td>
                                                <td className="py-3 px-4">-</td>
                                                <td className="py-3 px-4">-</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="py-3 px-4 font-bold">Annual ROI</td>
                                                <td className="py-3 px-4" colSpan="3">
                                                    [($2,485,650 + $85,000 energy savings) - $3,500,000] ÷ $3,500,000 × 100 = <span className="font-bold">-26% (Year 1)</span>
                                                </td>
                                            </tr>
                                            <tr className="bg-green-100">
                                                <td className="py-3 px-4 font-bold">Cumulative ROI</td>
                                                <td className="py-3 px-4" colSpan="3">
                                                    Year 2: 42% ROI | Year 3: 110% ROI | Year 5: 246% ROI
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <p className="text-yellow-800">
                                    <strong>Pro Tip:</strong> Work with a{" "}
                                    <Link
                                        href="https://www.sovanoca.com/services/hotel-motel-renovation"
                                        className="text-blue-900 underline font-medium hover:text-yellow-700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        North Carolina-based hotel renovation specialist
                                    </Link>{" "}
                                    who understands local market dynamics. They can help prioritize renovations that deliver the highest returns for your specific location and property type.
                                </p>
                            </div>
                        </motion.section>

                        {/* Conclusion */}
                        <motion.section
                            id="conclusion"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Renovation is an Investment, Not an Expense</h2>
                            <p className="mb-4">
                                The evidence is clear: strategic hotel renovations in North Carolina consistently deliver substantial returns that far outweigh their costs. Rather than viewing renovation as an expense, successful hotel owners recognize it as a powerful investment in their property's future profitability and competitive positioning.
                            </p>
                            <p className="mb-4">
                                The North Carolina hospitality market continues to grow at an impressive pace, but this growth brings increased competition. Properties that fail to maintain modern standards risk losing market share to newly renovated competitors and emerging boutique properties. By investing strategically in renovation, you position your property to capture premium rates, achieve higher occupancy, and build lasting guest loyalty.
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
                                        Ready to Transform Your North Carolina Property?
                                    </motion.h3>

                                    <motion.p
                                        className="text-lg text-blue-100 mb-8"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Our construction experts are ready to answer all your questions and provide personalized advice for your renovation project.
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
                                    </motion.div>
                                </div>
                            </motion.div>

                            <p className="mt-8">
                                The decision to renovate is ultimately about future-proofing your investment. In North Carolina's dynamic hospitality landscape, strategic renovation isn't just an option—it's an essential component of long-term success. By approaching renovation as an investment rather than an expense, you position your property for sustained profitability and growth in one of America's most vibrant tourism markets.
                            </p>
                        </motion.section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;