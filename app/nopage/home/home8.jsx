// components/FAQSection.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Based on common construction industry FAQs
    const faqs = [
        {
            question: "What types of construction projects do you handle?",
            answer: "We specialize in both residential and commercial construction projects. Our expertise includes new home construction, home renovations and additions, commercial buildings, retail spaces, office renovations, and industrial facilities. We also handle specialized projects like kitchen and bathroom remodels, foundation work, and exterior improvements."
        },
        {
            question: "How long does a typical construction project take?",
            answer: "Project timelines vary significantly based on scope and complexity. A bathroom remodel might take 2-4 weeks, while a custom home build typically takes 6-12 months. Commercial projects can range from 3 months to over a year. After reviewing your project details, we'll provide a detailed timeline with milestones during the planning phase."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed, bonded, and insured. Our company maintains general liability insurance, workers' compensation coverage, and builder's risk insurance. We can provide certificates of insurance upon request. All our subcontractors are also vetted to ensure they meet our insurance and licensing standards."
        },
        {
            question: "Do you provide free estimates?",
            answer: "We offer complimentary initial consultations and project estimates. After discussing your project requirements, we'll provide a detailed written estimate that outlines costs, materials, and timelines. For complex projects, we may charge a small fee for comprehensive feasibility studies that inform more accurate budgeting."
        },
        {
            question: "How do you handle project changes or modifications?",
            answer: "We have a formal change order process to handle modifications. Any requested changes are documented in writing, with associated costs and timeline impacts clearly outlined. We require client approval before implementing changes. This process ensures transparency and prevents misunderstandings while keeping your project on track."
        },
        {
            question: "What warranties do you offer on your work?",
            answer: "We provide a comprehensive warranty package: 1-year workmanship warranty on all projects, 2-year warranty on mechanical systems, and up to 10-year structural warranty depending on the project. We also honor manufacturer warranties on all materials and products installed. All warranties are provided in writing upon project completion."
        },
        {
            question: "How do you ensure safety on the construction site?",
            answer: "Safety is our top priority. We implement OSHA-compliant safety protocols, conduct daily safety briefings, provide specialized training for all crew members, and perform regular site safety inspections. We maintain a strict drug-free workplace policy and require all personnel to use proper personal protective equipment at all times."
        },
        {
            question: "Can I see examples of your previous work?",
            answer: "Absolutely! We maintain a comprehensive portfolio of completed projects on our website. We can also arrange site visits to recently completed projects (with owner permission) or provide references from past clients. For projects similar to yours, we can share detailed case studies showing our process and results."
        }
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

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
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
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Construction Questions Answered
                    </motion.h1>
                    <motion.div
                        className="h-1 w-20 bg-b1 mx-auto "
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    className="space-y-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200  shadow-sm overflow-hidden"
                            variants={item}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-b1 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>
                            </button>

                            <motion.div
                                className="overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="p-6 pt-0 bg-white border-t border-gray-100">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 bg-b1  shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
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
                            Still have questions about your construction project?
                        </motion.h3>

                        <motion.p
                            className="text-lg text-orange-100 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Our construction experts are ready to answer all your questions and provide personalized advice for your project.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button
                                className=" border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3  hover:bg-white/10 transition flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request a Quote →
                            </motion.button>
                           <Link href="tel:+15512001350" passHref>
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
                                </Link>


                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;