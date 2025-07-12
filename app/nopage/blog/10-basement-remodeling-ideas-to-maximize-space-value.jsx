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
    const TableOfContents = ({ isMobile, activeSection, scrollToSection }) => (
        <div
            className={`bg-white shadow-lg p-6 border border-gray-200 ${isMobile ? 'mb-8' : 'sticky top-24'
                }`}
        >
            <h2 className="text-xl font-bold text-b1 mb-4">Table of Contents</h2>

            <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-2">
                    {[
                        { id: 'introduction', text: 'Introduction: Unlock Your Basement\'s Potential' },
                        { id: 'value-benefits', text: 'The Value & Benefits of Basement Remodeling' },
                        { id: 'ideas', text: '10 Basement Remodeling Ideas' },
                        { id: 'theater', text: '- Home Theater', indent: true },
                        { id: 'guest-suite', text: '- Guest Suite', indent: true },
                        { id: 'home-office', text: '- Home Office', indent: true },
                        { id: 'playroom', text: '- Kids Playroom', indent: true },
                        { id: 'gym', text: '- Home Gym', indent: true },
                        { id: 'bar', text: '- Entertainment Bar', indent: true },
                        { id: 'living-space', text: '- Extended Living Space', indent: true },
                        { id: 'rental', text: '- Rental Unit', indent: true },
                        { id: 'hobby-room', text: '- Hobby Room', indent: true },
                        { id: 'multi-functional', text: '- Multi-Functional Space', indent: true },
                        { id: 'roi', text: 'ROI of Basement Remodeling' },
                        { id: 'conclusion', text: 'Conclusion: Transform Your Space' },
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
                                10 Basement Remodeling Ideas to Maximize Space & Value
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-600">
                                <span>July 11, 2025</span>
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
                                src="/10-basement-remodeling-ideas-to-maximize-space-value.webp"
                                alt="Modern basement renovation showcasing multi-functional space"
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: Unlock Your Basement's Potential</h2>
                            <p className="mb-4">
                                Is your basement currently a dark, underutilized storage area? You're not alone. Millions of homeowners have untapped square footage just waiting to be transformed. A well-executed basement remodel can add significant living space to your home while increasing its market value by up to 70% of the project cost.
                            </p>
                            <p className="mb-4">
                                According to the National Association of Realtors, basement remodeling projects have a return on investment (ROI) of approximately 70-75%, making them one of the most valuable home improvements you can undertake. Beyond financial returns, a remodeled basement adds functional living space that can adapt to your family's changing needs over time.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                <p className="text-blue-800">
                                    <strong>Did You Know?</strong> Homes with finished basements sell 30% faster than those without, and homeowners report a 90% satisfaction rate with their basement renovation projects according to Remodeling Magazine's Cost vs. Value Report.
                                </p>
                            </div>
                            <p>
                                In this comprehensive guide, we'll explore 10 transformative basement remodeling ideas that maximize both space and value. Whether you're looking to create additional living space, generate rental income, or simply enhance your home's functionality, these ideas will inspire your next renovation project.
                            </p>
                        </motion.section>

                        {/* Value & Benefits */}
                        <motion.section
                            id="value-benefits"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Value & Benefits of Basement Remodeling</h2>
                            <p className="mb-4">
                                Before we dive into specific ideas, let's examine why basement remodeling is such a valuable investment:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Benefits</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>70-75% ROI:</strong> Higher than most home renovations</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Rental Income:</strong> Potential for $800-$2,000/month</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Tax Benefits:</strong> Deductions for home office spaces</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Increased Appraisal Value:</strong> Add square footage at lower cost</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 shadow-md border border-gray-100">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Benefits</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Expanded Living Space:</strong> 30-50% more usable area</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Multi-Generational Living:</strong> Accommodate family needs</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Specialized Areas:</strong> Create spaces for hobbies, fitness, etc.</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
                                            <p className="ml-2"><strong>Enhanced Privacy:</strong> Separate spaces for different activities</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 mb-6">
                                <h4 className="font-bold text-lg mb-2">Average Cost vs. Value by Basement Type</h4>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Remodel Type</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Average Cost</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Resale Value</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ROI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Midrange Family Room</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$45,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$31,500</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">70%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Apartment Conversion</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$75,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$56,250</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">75%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Home Theater</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$35,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$24,500</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">70%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Home Office</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$25,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">$18,750</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">75%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.section>

                        {/* Ideas Section */}
                        <motion.section
                            id="ideas"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">10 Basement Remodeling Ideas to Maximize Space & Value</h2>
                            <p className="mb-8">
                                Transform your basement from a storage dungeon into a functional, valuable living space with these innovative ideas:
                            </p>

                            {/* Idea 1 */}
                            <motion.section
                                id="theater"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-home-theater.webp"
                                            alt="Home theater basement with tiered seating"
                                            title="Home theater basement with tiered seating"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Home Theater Experience</h3>
                                        <p className="mb-4">
                                            Transform your basement into the ultimate entertainment hub. With controlled lighting and natural soundproofing, basements make perfect home theaters.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Professional soundproofing for optimal audio</li>
                                                <li>Tiered seating with reclining theater chairs</li>
                                                <li>4K projector and 120" screen</li>
                                                <li>Smart lighting controls with dimming options</li>
                                                <li>Mini fridge and snack bar area</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> 70% ROI while creating a family entertainment hub</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 2 */}
                            <motion.section
                                id="guest-suite"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Guest Suite with Private Bath</h3>
                                        <p className="mb-4">
                                            Create a comfortable private retreat for visitors or potential rental income. A well-designed guest suite adds significant value to your home.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Private entrance (where possible)</li>
                                                <li>En-suite bathroom with shower</li>
                                                <li>Kitchenette with mini-fridge and microwave</li>
                                                <li>Separate heating/cooling controls</li>
                                                <li>Walk-in closet storage</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> 75% ROI, potential rental income of $800-$1,500/month</p>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-guest-suite.webp"
                                            alt="Basement guest suite with private bathroom"
                                            title="Basement guest suite with private bathroom"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 3 */}
                            <motion.section
                                id="home-office"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-home-office.jpg"
                                            alt="Professional home office in basement"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Professional Home Office</h3>
                                        <p className="mb-4">
                                            With remote work becoming permanent for many, a dedicated home office adds both functionality and value to your property.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Soundproof walls for privacy</li>
                                                <li>Built-in desks and shelving</li>
                                                <li>Proper lighting with natural light alternatives</li>
                                                <li>Separate entrance for clients</li>
                                                <li>High-speed internet connectivity</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> 75% ROI plus potential tax deductions</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 4 */}
                            <motion.section
                                id="playroom"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Kids Playroom & Learning Center</h3>
                                        <p className="mb-4">
                                            Create a safe, contained space where children can play, learn, and create without cluttering your main living areas.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Durable, easy-to-clean flooring</li>
                                                <li>Built-in storage for toys and crafts</li>
                                                <li>Reading nook with comfortable seating</li>
                                                <li>Creative wall surfaces (chalkboard, whiteboard)</li>
                                                <li>Soft play areas with safety padding</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> Creates dedicated space that keeps main areas tidy</p>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-playroom.webp"
                                            alt="Basement playroom for children"
                                            title="Basement playroom for children"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 5 */}
                            <motion.section
                                id="gym"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-gym.jpg"
                                            alt="Home gym in basement with equipment"
                                            title="Home gym in basement with equipment"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Home Gym & Wellness Studio</h3>
                                        <p className="mb-4">
                                            Save money on gym memberships and create your perfect workout space tailored to your fitness routine.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Rubber flooring for shock absorption</li>
                                                <li>Mirrored walls for form checking</li>
                                                <li>Proper ventilation and air purification</li>
                                                <li>TV/audio system for workout classes</li>
                                                <li>Storage for equipment and towels</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> Saves $800-$1,500/year in gym fees while adding home value</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 6 */}
                            <motion.section
                                id="bar"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Entertainment Bar & Lounge</h3>
                                        <p className="mb-4">
                                            Create the ultimate spot for entertaining friends and family without disrupting the main living areas.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Professional wet bar with sink and fridge</li>
                                                <li>Wine cellar or beverage cooler</li>
                                                <li>Seating area with comfortable stools</li>
                                                <li>Dartboard or other entertainment options</li>
                                                <li>Sound system and mood lighting</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> Creates an entertainment hub with 70% ROI</p>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-bar.webp"
                                            alt="Basement entertainment bar area"
                                            title="Basement entertainment bar area"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 7 */}
                            <motion.section
                                id="living-space"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-living-space.webp"
                                            alt="Cozy basement living room extension"
                                            title="Cozy basement living room extension"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Extended Living Space</h3>
                                        <p className="mb-4">
                                            Create a comfortable family room that serves as an extension of your main living area.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Warm, inviting fireplace</li>
                                                <li>Sectional seating for family gatherings</li>
                                                <li>Game table area for puzzles and board games</li>
                                                <li>Built-in bookshelves and display areas</li>
                                                <li>Accent lighting for ambiance</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> 70% ROI while adding functional living space</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 8 */}
                            <motion.section
                                id="rental"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Legal Rental Unit</h3>
                                        <p className="mb-4">
                                            Transform your basement into a fully independent living space for long-term tenants or short-term rentals.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Separate entrance for privacy</li>
                                                <li>Full kitchen with appliances</li>
                                                <li>Private bathroom with shower</li>
                                                <li>Separate utilities metering</li>
                                                <li>Compliance with local rental regulations</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> 75% ROI plus $1,000-$2,000/month rental income</p>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-rental.webp"
                                            alt="Basement apartment rental unit"
                                            title="Basement apartment rental unit"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 9 */}
                            <motion.section
                                id="hobby-room"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-hobby-room.webp"
                                            alt="Craft and hobby room in basement"
                                            title="Craft and hobby room in basement"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Hobby & Craft Room</h3>
                                        <p className="mb-4">
                                            Create a dedicated space for your passions, whether it's woodworking, painting, music, or crafts.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Durable, easy-to-clean surfaces</li>
                                                <li>Specialized storage for tools and materials</li>
                                                <li>Proper ventilation for fumes/dust</li>
                                                <li>Task lighting focused on work areas</li>
                                                <li>Soundproofing for noisy hobbies</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> Creates dedicated space for creative pursuits</p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Idea 10 */}
                            <motion.section
                                id="multi-functional"
                                className="mb-12 scroll-mt-24"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex flex-col md:flex-row gap-8 mb-6">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Multi-Functional Flex Space</h3>
                                        <p className="mb-4">
                                            Create a versatile area that can adapt to your changing needs with smart design solutions.
                                        </p>
                                        <div className="bg-gray-50 p-4 mb-4">
                                            <h4 className="font-bold text-lg mb-2">Key Features:</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Movable partitions or room dividers</li>
                                                <li>Convertible furniture (fold-down desks, Murphy beds)</li>
                                                <li>Multi-purpose storage solutions</li>
                                                <li>Zoned lighting for different activities</li>
                                                <li>Flexible technology infrastructure</li>
                                            </ul>
                                        </div>
                                        <p><strong>Value Add:</strong> Adaptable space that evolves with your family's needs</p>
                                    </div>
                                    <div className="md:w-1/3">
                                        <img
                                            src="/basement-flex-space.webp"
                                            alt="Multi-functional basement flex space"
                                            title="Multi-functional basement flex space"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.section>
                        </motion.section>

                        {/* ROI Section */}
                        <motion.section
                            id="roi"
                            className="mb-16 scroll-mt-24"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The ROI of Basement Remodeling</h2>
                            <p className="mb-6">
                                Understanding the return on investment helps justify your basement renovation. Here's what you need to know:
                            </p>

                            <motion.div
                                className="bg-b1 p-8 text-white mb-8"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Basement ROI Formula</h3>
                                <div className="bg-white/20 p-6 mb-4">
                                    <div className="text-center text-xl md:text-2xl font-bold font-mono">
                                        ROI % = [(
                                        <span className="text-yellow-300">Increased Home Value</span>
                                        +
                                        <span className="text-green-300"> Annual Savings/Income</span>
                                        ) -
                                        <span className="text-red-300"> Remodel Cost</span>
                                        ] ÷
                                        <span className="text-red-300"> Remodel Cost</span>
                                        × 100
                                    </div>
                                </div>
                                <p className="text-blue-100 text-center">
                                    Most basement remodels deliver 70-75% ROI when you sell, plus ongoing benefits while you live there
                                </p>
                            </motion.div>

                            <div className="bg-white shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study: Charlotte Family Basement Remodel</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-3 px-4 text-left">Metric</th>
                                                <th className="py-3 px-4 text-left">Pre-Remodel</th>
                                                <th className="py-3 px-4 text-left">Post-Remodel</th>
                                                <th className="py-3 px-4 text-left">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Home Value</td>
                                                <td className="py-3 px-4 border-b">$450,000</td>
                                                <td className="py-3 px-4 border-b">$510,000</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$60,000</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">Remodel Cost</td>
                                                <td className="py-3 px-4 border-b">-</td>
                                                <td className="py-3 px-4 border-b">$40,000</td>
                                                <td className="py-3 px-4 border-b">-</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Added Value</td>
                                                <td className="py-3 px-4 border-b">-</td>
                                                <td className="py-3 px-4 border-b">$60,000</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$60,000</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="py-3 px-4 border-b">Net Gain</td>
                                                <td className="py-3 px-4 border-b">-</td>
                                                <td className="py-3 px-4 border-b">$20,000</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$20,000</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 border-b">Annual Rental Income</td>
                                                <td className="py-3 px-4 border-b">$0</td>
                                                <td className="py-3 px-4 border-b">$12,000</td>
                                                <td className="py-3 px-4 border-b font-bold text-green-600">+$12,000</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="py-3 px-4 font-bold">First Year ROI</td>
                                                <td className="py-3 px-4" colSpan="3">
                                                    [($60,000 + $12,000) - $40,000] ÷ $40,000 × 100 = <span className="font-bold">80%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <p className="text-yellow-800">
                                    <strong>Pro Tip:</strong> Focus on quality finishes and proper waterproofing to maximize your basement remodel's ROI. These elements reassure buyers and increase your home's value.
                                    <br />
                                    <Link href="/services/basement-remodeling" className="text-yellow-900 font-semibold underline ml-1 hover:text-yellow-700">
                                        Explore our Basement Remodeling Services
                                    </Link>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Transform Your Space, Maximize Your Value</h2>
                            <p className="mb-4">
                                Your basement represents one of the most valuable yet underutilized spaces in your home. By implementing any of these 10 remodeling ideas, you can transform dark, unused square footage into functional living space that enhances your daily life while significantly increasing your property value.
                            </p>
                            <p className="mb-4">
                                Remember that the key to a successful basement remodel lies in proper planning, quality waterproofing, and professional execution. Whether you choose to create a cozy family room, a income-generating rental unit, or a specialized hobby space, a well-executed basement renovation typically returns 70-75% of your investment when you sell, plus provides years of enjoyment while you live in your home.
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
                                        Ready to Transform Your Basement?
                                    </motion.h3>

                                    <motion.p
                                        className="text-lg text-blue-100 mb-8"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Our remodeling experts specialize in basement transformations that maximize both space and value. Schedule a consultation to discuss your project.
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
                                                Get a Free Quote →
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
                                Don't let valuable square footage go to waste. With careful planning and professional execution, your basement can become one of the most valuable and enjoyable spaces in your home. Start exploring the possibilities today!
                            </p>
                        </motion.section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;