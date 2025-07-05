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
            question: "What types of construction projects do you handle in North Carolina?",
            answer:
                "As a leading construction company in North Carolina, we specialize in a wide range of residential and commercial construction projects. Our services include custom home construction, home remodeling, room additions, kitchen and bathroom renovations, and complete property renovations. On the commercial side, we handle office buildings, retail store fit-outs, restaurants, warehouses, and industrial facilities. We also offer foundation work, roofing, siding, and other exterior improvements tailored to North Carolina's unique climate and building codes. Whether you're in Charlotte, Raleigh, Greensboro, or anywhere else in NC, we have the experience and local expertise to deliver exceptional results."
        },
        {
            question: "How long does a typical construction project take in North Carolina?",
            answer:
                "Construction timelines vary based on the scope, size, and complexity of your project. For instance, a small bathroom remodel in Raleigh may take 2–4 weeks, while building a custom home in the suburbs of Charlotte could take anywhere from 6 to 12 months. Commercial construction projects, such as office spaces or retail stores, usually take between 3 months to over a year, depending on permits, design approvals, and structural requirements. During the initial consultation, our team will assess your specific needs and provide a customized project timeline with key milestones so you always know what to expect."
        },
        {
            question: "Are you licensed and insured to operate in North Carolina?",
            answer:
                "Yes, we are fully licensed, bonded, and insured to operate throughout North Carolina. We hold all required state and local licenses to ensure compliance with NC building codes and regulations. Our insurance coverage includes general liability, workers’ compensation, and builder’s risk policies to protect our clients and our team. All subcontractors we work with are also thoroughly vetted to ensure they meet our high standards for licensing and insurance. We’re happy to provide copies of our certifications and insurance documents upon request for your peace of mind."
        },
        {
            question: "Do you provide free estimates for construction projects in NC?",
            answer:
                "Absolutely! We offer free, no-obligation consultations and detailed estimates for all types of construction projects in North Carolina. After understanding your goals, site conditions, and budget, we prepare a comprehensive written estimate outlining labor, materials, permits, and timelines. For complex or large-scale builds, we also offer paid feasibility studies that provide deeper insight into costs and potential challenges. This transparency helps North Carolina homeowners and business owners plan their investments more effectively."
        },
        {
            question: "How do you manage design changes or modifications during a project?",
            answer:
                "We follow a structured and transparent change order process for any design or scope modifications. If you request changes during construction, we’ll document them in writing and provide an updated quote detailing any additional costs and how the timeline may be affected. No changes are implemented without your written approval. This process ensures clear communication and keeps your North Carolina construction project on budget and on schedule without surprises."
        },
        {
            question: "What kind of warranty do you offer on your construction services in NC?",
            answer:
                "We stand behind the quality of our work with a comprehensive warranty package. All projects come with a standard 1-year workmanship warranty. For systems like plumbing, HVAC, and electrical, we offer a 2-year warranty. Structural components may be covered for up to 10 years depending on the project type. We also pass along all manufacturer warranties on materials and products used in your build. These warranties are provided in writing at the end of your project for full transparency and peace of mind."
        },
        {
            question: "What safety measures do you follow on construction sites in North Carolina?",
            answer:
                "Safety is a cornerstone of our operations. All our North Carolina construction projects follow OSHA safety standards and local safety regulations. Our crew members undergo regular safety training and daily on-site briefings. We enforce strict safety protocols, including the use of personal protective equipment (PPE), secure job site access, and regular inspections. We also maintain a drug-free workplace policy. These measures ensure a safe working environment for our team and a secure construction site for you and your neighbors."
        },
        {
            question: "Can I view your past construction projects in North Carolina?",
            answer:
                "Yes! We proudly showcase our work through a portfolio of completed construction projects across North Carolina, including cities like Raleigh, Durham, Wilmington, Asheville, and more. You can view our photo gallery and project case studies on our website. For serious inquiries, we can also arrange site visits (with prior client approval) or connect you with past clients for references. These examples demonstrate our craftsmanship, attention to detail, and the quality of service you can expect when working with us."
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
        </section>
    );
};

export default FAQSection;