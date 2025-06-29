// components/WhyChooseUs.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WhyChooseUs = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
        title: "Commitment to Site Safety",
        description: "As a trusted construction company, we uphold the highest safety protocols on every project to protect our workers and clients.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l9 4.5v5.25c0 5.25-3.75 10.5-9 12-5.25-1.5-9-6.75-9-12V6.5L12 2z" />
                </svg>
            ),
            stat: "Zero Accidents Goal"
        },
        {
        title: "Superior Construction Quality",
        description: "We deliver premium craftsmanship, durable materials, and quality control checks that ensure long-lasting structures with zero compromise.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m1.5-6.5a9 9 0 11-7 0" />
                </svg>
            ),
            stat: "Built to Last"
        },
        {
        title: "Transparent & Ethical Practices",
        description: "Our team operates with honesty and accountability, earning client trust across all stages of construction and renovation.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 10l5 5 5-5" />
                </svg>
            ),
            stat: "Trusted Partnerships"
        },
        {
        title: "Green Building Experts",
        description: "We use sustainable construction techniques and eco-friendly materials to reduce environmental impact and meet green building standards.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 0v10m0 0h10" />
                </svg>
            ),
            stat: "Eco-Friendly Builds"
        }
    ];


    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Decorative elements */}
                <motion.div
                    className="absolute top-20 left-10 w-24 h-24 bg-blue-100  -z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.div
                    className="absolute bottom-40 right-10 w-32 h-32 bg-blue-200  -z-10 opacity-30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-lg md:text-xl font-medium text-b1 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Why choose us
                    </motion.h2>
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Why we're your <span className="text-b1">best choice</span>
                    </motion.h2>
                    <motion.div
                        className="h-1 w-20 bg-b1 mx-auto "
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Features Grid */}
                    <motion.div
                        className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white  shadow-lg p-6 relative overflow-hidden cursor-pointer transition-all duration-300 ${activeFeature === index ? 'ring-2 ring-b1 shadow-xl' : 'hover:shadow-xl'
                                    }`}
                                variants={item}
                                whileHover={{ y: -10 }}
                                onClick={() => setActiveFeature(index)}
                            >
                                {/* Feature icon */}
                                <motion.div
                                    className={`p-3  w-max mb-5 ${activeFeature === index
                                            ? 'bg-b1 text-white'
                                            : 'bg-blue-100 text-b1'
                                        }`}
                                    whileHover={{ rotate: 10 }}
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-4">{feature.description}</p>

                                <motion.div
                                    className={`absolute -bottom-4 -right-4 w-24 h-24  ${activeFeature === index
                                            ? 'bg-b1'
                                            : 'bg-blue-100'
                                        } opacity-10`}
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <motion.div
                                    className="text-b1 font-bold text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {feature.stat}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Highlighted Feature */}
                    <motion.div
                        className="lg:w-1/2 flex items-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-b1  shadow-2xl p-8 text-white relative overflow-hidden h-full w-full">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture.png')] opacity-10" />
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white  opacity-10" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300  opacity-20" />

                            <div className="relative z-10">
                                <motion.div
                                    className="text-4xl font-bold mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {features[activeFeature].title}
                                </motion.div>

                                <motion.p
                                    className="text-lg text-blue-100 mb-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {features[activeFeature].description}
                                </motion.p>

                                <motion.div
                                    className="text-5xl font-bold mb-8"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        delay: 0.7
                                    }}
                                >
                                    {features[activeFeature].stat}
                                </motion.div>

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="h-1 bg-white/30 mb-8 "
                                >
                                    <div className="h-full bg-white " style={{ width: `${(activeFeature + 1) * 25}%` }} />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    <button className="bg-white shine-button1 text-b1 font-bold px-8 py-3  hover:bg-gray-100 transition flex items-center gap-2">
                                        Start Your Project
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Value Proposition Banner */}
                <motion.div
                    className="mt-20 bg-b1  shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="absolute inset-0  opacity-20" />
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <motion.h3
                                    className="text-2xl md:text-3xl font-bold mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <span className="text-white">Fresh Perspective</span> with Proven Results
                                </motion.h3>

                                <motion.p
                                    className="text-gray-300 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    While we may be newer to the industry, our innovative approach has already delivered exceptional results for our clients. We bring modern solutions without the overhead of larger firms.
                                </motion.p>

                                <motion.div
                                    className="grid grid-cols-2 gap-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <div className="flex items-center">
                                        <div className="bg-b1  p-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>100% Satisfaction Guarantee</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-b1  p-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>Competitive Pricing</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-b1  p-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>Flexible Solutions</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-b1  p-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>Quick Response Time</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    className="bg-white  p-6 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-b1">11+</div>
                                    <div className="text-gray-800">Projects</div>
                                </motion.div>
                                <motion.div
                                    className="bg-white  p-6 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-b1">3+</div>
                                    <div className="text-gray-800">Years</div>
                                </motion.div>
                                <motion.div
                                    className="bg-white  p-6 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-b1">100%</div>
                                    <div className="text-gray-800">Satisfaction</div>
                                </motion.div>
                                <motion.div
                                    className="bg-white  p-6 text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-b1">0</div>
                                    <div className="text-gray-800">Major Incidents</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;