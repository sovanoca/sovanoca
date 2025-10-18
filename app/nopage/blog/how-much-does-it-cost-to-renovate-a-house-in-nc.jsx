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
                    { id: 'introduction', text: 'Introduction: Planning Your NC Home Renovation' },
                    { id: 'cost-breakdown', text: 'Average Renovation Costs in North Carolina' },
                    { id: 'room-costs', text: 'Room-by-Room Renovation Costs' },
                    { id: 'regional-variations', text: 'Regional Variations Across NC' },
                    { id: 'hidden-costs', text: 'Hidden Costs and Budget Planning' },
                    { id: 'saving-tips', text: 'How to Save on Renovation Costs' },
                    { id: 'conclusion', text: 'Conclusion: Smart Renovation Planning' },
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
                                How Much Does It Cost to Renovate a House in North Carolina?
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-600">
                                <span>October 18, 2025</span>
                                <span>•</span>
                                <span>8 min read</span>
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
                                src="/how-much-does-it-cost-to-renovate-a-house-in-nc.webp"
                                alt="Home renovation in progress showing kitchen demolition in a North Carolina house"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: Planning Your NC Home Renovation</h2>
                            <p className="mb-4">
                                If you're considering a home renovation in North Carolina, you're probably wondering about the costs involved. The truth is, home renovation expenses can vary dramatically based on your home's size, location within the state, the scope of your project, and the materials you choose.
                            </p>
                            <p className="mb-4">
                                North Carolina's diverse geography—from the coastal plains to the Piedmont and mountain regions—brings unique considerations for homeowners. The state's humid subtropical climate can affect material choices, and regional labor costs can influence your overall budget:cite[6]:cite[8].
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>NC Insight:</strong> The average kitchen remodel in North Carolina costs $21,718, with most homeowners spending between $7,808 and $195,200 depending on the scope and materials chosen:cite[6].
                                </p>
                            </div>
                            <p>
                                This comprehensive guide will break down the costs you can expect for various types of renovations across North Carolina, helping you create a realistic budget and avoid financial surprises.
                            </p>
                        </motion.section>

                        {/* Cost Breakdown */}
                        <motion.section
                            id="cost-breakdown"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Average Renovation Costs in North Carolina</h2>
                            <p className="mb-4">
                                Home renovation costs in North Carolina typically fall within national averages but can be influenced by local factors. Let's examine the costs based on different project scopes and home sizes.
                            </p>

                            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                                <div className="bg-gray-50 px-6 py-4 border-b">
                                    <h3 className="text-xl font-semibold text-gray-900">Whole House Renovation Costs by Scope</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Low-End Remodel</span>
                                            <span className="text-b1 font-semibold">$15,000 - $40,000</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">Cosmetic updates, painting, basic flooring, stock cabinetry, and inexpensive appliances:cite[1]</p>
                                    </div>
                                    <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Mid-Range Remodel</span>
                                            <span className="text-b1 font-semibold">$40,000 - $75,000</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">Above-average materials, full kitchen and bathroom remodels, new light fixtures, and exterior updates:cite[1]</p>
                                    </div>
                                    <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">High-End Remodel</span>
                                            <span className="text-b1 font-semibold">$75,000 - $200,000</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">Custom cabinetry, structural changes, layout modifications, and premium finishes throughout:cite[1]</p>
                                    </div>
                                    <div className="px-6 py-4 hover:bg-gray-50 transition-colors bg-red-50">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">Full Gut Renovation</span>
                                            <span className="text-red-600 font-semibold">$100,000 - $200,000+</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">Complete demolition to studs and rebuild; necessary for severely outdated or damaged homes:cite[1]</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cost Per Square Foot</h3>
                            <p className="mb-4">
                                Calculating costs by square foot helps compare projects of different sizes. In North Carolina, renovation costs typically range from:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Standard Renovations</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Whole house remodel</span>
                                            <span className="font-semibold">$15 - $60/sq ft</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>Kitchen & bathroom focus</span>
                                            <span className="font-semibold">$100 - $250/sq ft</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Full gut renovation</span>
                                            <span className="font-semibold">$60 - $150/sq ft</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">By Home Size</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b pb-2">
                                            <span>1,200 sq ft home</span>
                                            <span className="font-semibold">$18,000 - $72,000</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span>2,000 sq ft home</span>
                                            <span className="font-semibold">$28,000 - $115,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>3,000 sq ft home</span>
                                            <span className="font-semibold">$40,000 - $160,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Room-by-Room Costs */}
                        <motion.section
                            id="room-costs"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Room-by-Room Renovation Costs</h2>
                            <p className="mb-6">
                                Different rooms come with different price tags. Kitchens and bathrooms typically cost the most due to plumbing, electrical, and finishing requirements.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 shadow-lg border border-gray-200 rounded-lg">
                                    <div className="text-blue-600 mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen Remodel</h3>
                                    <p className="text-2xl font-bold text-b1 mb-4">$10,000 - $50,000+</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">NC average: $21,718:cite[6]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Labor: 50-60% of total cost:cite[6]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Cabinets: ~$7,808 average:cite[6]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Countertops: $3,904 average:cite[6]</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-lg border border-gray-200 rounded-lg">
                                    <div className="text-blue-600 mb-4">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Bathroom Remodel</h3>
                                    <p className="text-2xl font-bold text-b1 mb-4">$5,000 - $25,000+</p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Wilmington area: $15,000 - $40,000:cite[8]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Powder room: $5,000 - $10,000:cite[3]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2">Master bath: Up to $30,000:cite[3]</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Living Room</h4>
                                    <p className="text-b1 font-bold">$2,500 - $10,000</p>
                                    <p className="text-sm text-gray-600 mt-1">Flooring, painting, lighting, fireplace:cite[1]</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Bedroom</h4>
                                    <p className="text-b1 font-bold">$1,500 - $10,000</p>
                                    <p className="text-sm text-gray-600 mt-1">Flooring, closet systems, painting:cite[1]</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">Basement/Attic</h4>
                                    <p className="text-b1 font-bold">$20,000 - $75,000</p>
                                    <p className="text-sm text-gray-600 mt-1">Conversion to living space:cite[1]</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Regional Variations */}
                        <motion.section
                            id="regional-variations"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Regional Variations Across North Carolina</h2>
                            <p className="mb-4">
                                Where you live in North Carolina significantly impacts your renovation costs. Labor rates, material availability, and local building codes can vary across the state.
                            </p>

                            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Metro Areas</h3>
                                        <div className="space-y-4">
                                            <div className="border-b pb-3">
                                                <h4 className="font-semibold text-gray-900">Charlotte Metro</h4>
                                                <p className="text-gray-600">Higher labor costs due to demand; kitchen remodels average $23,890:cite[6]</p>
                                            </div>
                                            <div className="border-b pb-3">
                                                <h4 className="font-semibold text-gray-900">Raleigh-Durham</h4>
                                                <p className="text-gray-600">Competitive contractor market; strong demand for quality renovations:cite[9]</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Wilmington & Coastal Areas</h4>
                                                <p className="text-gray-600">Higher material costs for humidity and hurricane resistance; whole house renos: $50,000 - $200,000+:cite[8]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Considerations for NC Climate</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Humidity resistance:</strong> Plywood cabinets preferred over MDF in coastal areas:cite[6]</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Flooring:</strong> Tile recommended for kitchens ($15-20/sq ft):cite[6]</p>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                                <p className="ml-2"><strong>Exterior materials:</strong> Higher-cost siding and roofing may be needed in coastal zones:cite[8]</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>Labor Cost Note:</strong> Plumbers in NC charge approximately $117/hour, while electricians average $73/hour. These rates are typically higher in metro areas like Charlotte and Raleigh:cite[6].
                                </p>
                            </div>
                        </motion.section>

                        {/* Hidden Costs */}
                        <motion.section
                            id="hidden-costs"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hidden Costs and Budget Planning</h2>
                            <p className="mb-6">
                                Even with careful planning, renovation projects often uncover unexpected issues. Budgeting for these potential hidden costs can prevent financial stress down the road.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Hidden Expenses</h3>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 shadow-sm border-l-4 border-red-500">
                                            <h4 className="font-semibold text-gray-900">Structural Issues</h4>
                                            <p className="text-gray-600 text-sm mt-1">Termite damage, water damage, or foundation problems: $1,000 - $25,000+:cite[10]</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm border-l-4 border-yellow-500">
                                            <h4 className="font-semibold text-gray-900">Outdated Systems</h4>
                                            <p className="text-gray-600 text-sm mt-1">Electrical, plumbing, or HVAC updates: $600 - $36,000:cite[10]</p>
                                        </div>
                                        <div className="bg-white p-4 shadow-sm border-l-4 border-blue-500">
                                            <h4 className="font-semibold text-gray-900">Permits & Code Compliance</h4>
                                            <p className="text-gray-600 text-sm mt-1">Building permits: $525 - $3,041; code updates additional:cite[10]</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Budget Planning Strategy</h3>
                                    <div className="bg-green-50 p-6 rounded-lg h-full">
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 font-semibold text-green-800">Set aside 10-20% of your total budget for contingencies:cite[2]</p>
                                        </div>
                                        <div className="flex items-start mb-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 font-semibold text-green-800">Get multiple quotes from licensed contractors:cite[8]</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 font-semibold text-green-800">Conduct a pre-renovation inspection ($300-500):cite[3]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Saving Tips */}
                        <motion.section
                            id="saving-tips"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Save on Renovation Costs</h2>
                            <p className="mb-6">
                                Smart planning and strategic choices can help you achieve your renovation goals while staying within budget. Here are proven strategies for North Carolina homeowners.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 shadow-lg rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Material & Design Savings</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                                    <span className="text-blue-600 text-sm font-bold">1</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Keep existing layouts:</strong> Moving plumbing and electrical adds $1,200+:cite[6]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                                    <span className="text-blue-600 text-sm font-bold">2</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Refinish rather than replace:</strong> Cabinet refacing saves thousands:cite[6]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-blue-100 flex items-center justify-center rounded-full">
                                                    <span className="text-blue-600 text-sm font-bold">3</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Choose mid-range materials:</strong> Balance quality and cost effectively:cite[6]</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-lg rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Approaches</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-green-100 flex items-center justify-center rounded-full">
                                                    <span className="text-green-600 text-sm font-bold">4</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Get multiple quotes:</strong> 3-5 detailed quotes from licensed contractors:cite[4]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-green-100 flex items-center justify-center rounded-full">
                                                    <span className="text-green-600 text-sm font-bold">5</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Time your project wisely:</strong> Off-season may bring better pricing:cite[5]</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-6 h-6 bg-green-100 flex items-center justify-center rounded-full">
                                                    <span className="text-green-600 text-sm font-bold">6</span>
                                                </div>
                                            </div>
                                            <p className="ml-3"><strong>Explore efficiency incentives:</strong> NC offers rebates for energy-efficient upgrades:cite[6]</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-yellow-800">
                                    <strong>Financing Options:</strong> North Carolina homeowners can explore home equity loans, HELOCs, and FHA 203k loans for renovation financing. Some local programs also offer incentives for energy-efficient upgrades:cite[6].
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
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Smart Renovation Planning for NC Homes</h2>
                            <p className="mb-4">
                                Renovating a home in North Carolina requires careful budgeting and planning, but with the right approach, it can be a worthwhile investment that enhances your living space and property value.
                            </p>
                            <p className="mb-4">
                                Remember that costs vary significantly based on your home's location within the state, the scope of your project, and the materials you choose. Kitchen and bathroom renovations typically offer the best return on investment, while whole-house gut renovations represent the most significant financial commitment.
                            </p>
                            <p className="mb-6">
                                By obtaining multiple quotes from licensed North Carolina contractors, setting aside a contingency fund for unexpected issues, and making strategic choices about materials and layouts, you can navigate your renovation project with confidence.
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
                                        Ready to Start Your North Carolina Home Renovation?
                                    </motion.h3>

                                    <motion.p
                                        className="text-lg text-blue-100 mb-8"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Get personalized advice and accurate quotes for your specific project from local renovation experts.
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
                        </motion.section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;