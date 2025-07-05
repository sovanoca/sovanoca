'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Home4 from "../../home/home4"
import Home5 from "../../home/home5"
import Home6 from "../../home/home6"
import Home7 from "../../home/home7"

export default function ServiceHero() {
    const [activeFAQ, setActiveFAQ] = useState(null);

    // FAQ data specific to architectural and interior design consulting
    const faqs = [
        {
            question: "What services do you offer in architectural and interior design consulting?",
            answer: "We provide comprehensive design services including space planning, architectural design, interior styling, lighting design, material selection, and project management. Our services cover residential, commercial, and hospitality projects throughout North Carolina."
        },
        {
            question: "How does the design process work with your firm?",
            answer: "Our process begins with an initial consultation to understand your vision, followed by concept development, design refinement, and final implementation. We maintain clear communication throughout and provide 3D visualizations to help you envision the final result before any construction begins."
        },
        {
            question: "Do you work with existing structures or only new construction?",
            answer: "We specialize in both new construction and renovations/remodels. Our team can transform existing spaces with creative solutions that maximize functionality and aesthetic appeal while respecting the building's original character."
        },
        {
            question: "How do you incorporate North Carolina's architectural styles?",
            answer: "We blend contemporary design with traditional NC influences like coastal, mountain, and historic styles. Our designs consider local climate, materials, and regional aesthetics while meeting modern living standards."
        },
        {
            question: "What's included in your interior design packages?",
            answer: "Our packages include space planning, furniture layouts, color schemes, material selections, lighting plans, and custom millwork designs. We also provide procurement services and can oversee installation for a turnkey solution."
        },
        {
            question: "How do you handle sustainable design practices?",
            answer: "We prioritize eco-friendly materials, energy-efficient solutions, and passive design strategies. Many of our projects incorporate LEED principles, local sourcing, and renewable materials tailored to North Carolina's climate."
        },
        {
            question: "Can you help with obtaining permits and approvals?",
            answer: "Yes, we navigate the permit process and ensure designs comply with local NC building codes, zoning laws, and HOA requirements. We handle all necessary documentation and coordinate with local authorities."
        },
        {
            question: "What makes your NC design services unique?",
            answer: "Our deep understanding of North Carolina's diverse regions—from coastal areas to urban centers to mountain communities—allows us to create designs that are both beautiful and perfectly suited to their environment and local lifestyle."
        }
    ];

    // Animation for FAQ items
    const faqItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    // Toggle FAQ accordion
    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };
    return (
        <div className="bg-white text-gray-900">
            <section className="relative overflow-hidden bg-white text-black">


                <div className="relative z-10 container mx-auto px-8 py-4  lg:py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Content */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-block bg-b1 px-4 py-2  mb-2 lg:mb-6"
                            >
                                <span className=" text-lg lg:text-2xl font-medium text-white">Architectural & Interior Design Consulting</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl  lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Architectural & Interior Design Consulting in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/design-consulting.jpg"
                                        alt="Modern interior design in North Carolina"
                                        title="Architectural and interior design consulting services"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-72"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Premium Design Solutions</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Transform your spaces with our expert architectural and interior design consulting services. 
                                Serving clients across North Carolina, we create functional, beautiful environments that 
                                reflect your vision while respecting the region's unique character and climate.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Full-service design solutions",
                                    "3D visualization technology",
                                    "Local material expertise",
                                    "Sustainable design practices",
                                    "Space optimization strategies",
                                    "Custom furniture design"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <h3 className="text-black">{item}</h3>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/get-quote" title='get free quote' passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-52 bg-b1 shine-button text-white font-bold py-3 px-8 text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                                    >
                                        Request a Quote
                                    </motion.button>
                                </Link>

                                <Link href="/projects" passHref>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-52 bg-white text-b1 font-bold py-3 px-8 text-lg border border-b1 flex items-center justify-center gap-2 transition-all duration-300"
                                    >
                                        View Projects
                                    </motion.button>
                                </Link>


                            </motion.div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            className="lg:w-1/2 hidden lg:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/design-consulting.jpg"
                                        alt="Modern architectural design in North Carolina"
                                        title="Architectural design consulting services"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-96"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">NC Design Experts</h3>
                                    <p className="text-blue-100">Creating beautiful, functional spaces since 2023</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>


            </section>
            <Home4/>
            
            {/* Service Description Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Comprehensive Design Consulting Services
                        </motion.h2>
                        <div className="h-1 w-24 bg-b1 mx-auto "></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transform Your Living or Work Spaces</h3>
                            <p className="text-gray-700 mb-6">
                                Our architectural and interior design consulting services are tailored to create spaces that 
                                inspire while meeting practical needs. Whether modern minimalism or traditional Southern charm, 
                                we design environments that reflect your personality and lifestyle while incorporating North 
                                Carolina's unique architectural heritage.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Serving residential and commercial clients throughout North Carolina, our team brings expertise 
                                in space planning, material selection, and innovative design solutions. We work with homeowners, 
                                developers, and business owners to create spaces that are both beautiful and functional.
                            </p>

                            <div className="bg-b1/10 p-6  border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Benefits of Professional Design Consulting</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Increases property value by up to 20%",
                                        "Optimizes space utilization and flow",
                                        "Reduces costly design mistakes",
                                        "Creates cohesive aesthetic appeal",
                                        "Incorporates sustainable practices",
                                        "Saves time and reduces stress"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-b1 font-bold mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Design Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Initial Consultation",
                                        description: "We listen to your vision, needs, and budget to understand your project goals and preferences."
                                    },
                                    {
                                        title: "Concept Development",
                                        description: "Creation of preliminary designs, mood boards, and space plans that reflect your style."
                                    },
                                    {
                                        title: "Design Refinement",
                                        description: "We refine concepts based on your feedback, developing detailed plans and material selections."
                                    },
                                    {
                                        title: "3D Visualization",
                                        description: "Advanced renderings help you visualize the final result before implementation."
                                    },
                                    {
                                        title: "Implementation Planning",
                                        description: "Detailed drawings, specifications, and project timelines for contractors."
                                    },
                                    {
                                        title: "Project Oversight",
                                        description: "Optional supervision during construction to ensure design integrity is maintained."
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-b1 text-white font-bold w-8 h-8  flex items-center justify-center mr-4 flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-white border border-gray-200  p-6 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Design Services We Offer</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Residential Design", "Commercial Spaces", "Kitchen Remodeling",
                                        "Bathroom Design", "Whole-House Renovation", "Space Planning",
                                        "Lighting Design", "Custom Millwork", "Material Selection",
                                        "Color Consultation", "Furniture Design", "Historic Preservation"
                                    ].map((item, index) => (
                                       <h3 key={index} className="bg-gray-100 text-gray-800 px-3 py-1  text-sm">
                                            {item}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <Home5/>
            <Home6/>
            <Home7/>


            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Design Consulting FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about our architectural and interior design services
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto  mt-4"></div>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200  overflow-hidden shadow-sm"
                                variants={faqItem}
                            >
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={activeFAQ === index}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: activeFAQ === index ? 180 : 0 }}
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
                                        height: activeFAQ === index ? "auto" : 0,
                                        opacity: activeFAQ === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className="p-6 pt-0 bg-white">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-16 bg-b1  shadow-xl p-8 text-white relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white  opacity-10" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300  opacity-20" />

                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <motion.h3
                                className="text-2xl font-bold mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Ready to Transform Your Space?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Contact us today for a free consultation about your architectural or interior design project.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link href="/get-quote" title='get free quote' passHref>
                                    <motion.p
                                        className="border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3 hover:bg-white/10 transition flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Request a Quote →
                                    </motion.p>
                                </Link>

                                {/* <Link href="tel:+15512001350" title='Call design consulting firm' passHref>
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
        </div>
    );
}