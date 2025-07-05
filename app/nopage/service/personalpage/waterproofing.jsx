// components/ServiceHero.js
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

    // Updated FAQ data for waterproofing services
    const faqs = [
        {
            question: "What areas of my property can be waterproofed?",
            answer: "We waterproof all critical areas including basements, foundations, crawl spaces, roofs, decks, balconies, and retaining walls. Our solutions protect both above and below-grade structures from water intrusion."
        },
        {
            question: "How long does waterproofing last?",
            answer: "Our waterproofing systems typically last 10-15 years. We use premium materials specifically designed for North Carolina's climate, including heavy rainfall and humidity. Our warranty covers materials and workmanship for 10 years."
        },
        {
            question: "Can waterproofing be done without disrupting my business?",
            answer: "Yes, we minimize disruption through careful planning. Most exterior waterproofing requires minimal interior access. We work efficiently and coordinate with you to schedule work during off-hours when needed."
        },
        {
            question: "What signs indicate I need waterproofing?",
            answer: "Look for: water stains on walls/floors, musty odors, peeling paint, efflorescence (white powder on concrete), mold growth, cracking foundations, or pooling water around your foundation. We offer free inspections to assess your property."
        },
        {
            question: "How does North Carolina's climate affect waterproofing needs?",
            answer: "NC's high humidity, heavy rainfall, and clay soil create ideal conditions for water intrusion. Our solutions address hydrostatic pressure, soil expansion, and humidity control specific to our region."
        },
        {
            question: "Do you offer interior and exterior waterproofing?",
            answer: "Yes, we provide comprehensive solutions: exterior (drainage systems, membranes, sealants) and interior (sump pumps, vapor barriers, sealants). We determine the best approach based on your specific situation."
        },
        {
            question: "Can waterproofing help with mold issues?",
            answer: "Absolutely. By eliminating moisture sources, waterproofing is the first line of defense against mold. We also offer mold remediation services to complement our waterproofing solutions."
        },
        {
            question: "How much does commercial waterproofing cost?",
            answer: "Costs vary based on property size, foundation type, and solution complexity. Most commercial projects range from $8,000 to $25,000. We provide detailed quotes after a thorough inspection. Investing in waterproofing prevents costly structural damage down the line."
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
                                <span className=" text-lg lg:text-2xl font-medium text-white">Waterproofing</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl  lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Waterproofing Services in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/commercial-waterproofing.webp"
                                        alt="Commercial building waterproofing"
                                        title="Professional waterproofing services for businesses"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-72"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Water Intrusion Experts</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Protect your commercial property from water damage with our comprehensive waterproofing solutions. 
                                Serving businesses across North Carolina, we prevent leaks, foundation damage, and mold growth 
                                while preserving your property's structural integrity.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Foundation waterproofing experts",
                                    "Interior & exterior solutions",
                                    "Minimal business disruption",
                                    "10-year warranty on work",
                                    "Mold prevention specialists",
                                    "Free moisture inspection"
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
                                        src="/commercial-waterproofing.webp"
                                        alt="Commercial building waterproofing application"
                                        title="Professional waterproofing for business properties"
                                        width={800}
                                        height={600}
                                        className="object-fit w-full h-[70vh]"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">Water Intrusion Experts</h3>
                                    <p className="text-blue-100">Protecting NC properties since 2023</p>
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
                            Professional Waterproofing Solutions
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Property Investment</h3>
                            <p className="text-gray-700 mb-6">
                                Our commercial waterproofing services are designed to safeguard your property against water damage, 
                                foundation issues, and mold growth. We understand that water intrusion can cause significant structural 
                                damage and health hazards, and we're committed to providing long-lasting solutions that protect your investment.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Serving businesses throughout North Carolina, our team specializes in waterproofing solutions 
                                for retail centers, office buildings, industrial facilities, multi-unit properties, and historical structures. 
                                We address the unique challenges of NC's climate including heavy rainfall, high humidity, and clay soil expansion.
                            </p>

                            <div className="bg-b1/10 p-6  border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Why Waterproofing is Essential in NC?</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Prevents foundation damage costing $10,000+ in repairs",
                                        "Reduces mold remediation costs by 60-80%",
                                        "Protects inventory and equipment from water damage",
                                        "Maintains property value and structural integrity",
                                        "Creates healthier indoor environments",
                                        "Meets building code and insurance requirements"
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Waterproofing Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Comprehensive Moisture Assessment",
                                        description: "We conduct thorough inspections using moisture meters, thermal imaging, and visual checks to identify water entry points."
                                    },
                                    {
                                        title: "Customized Solution Design",
                                        description: "We create tailored waterproofing plans based on your building's construction, soil conditions, and water pressure."
                                    },
                                    {
                                        title: "Surface Preparation",
                                        description: "Proper cleaning, repair of cracks, and surface priming ensure optimal adhesion of waterproofing materials."
                                    },
                                    {
                                        title: "Waterproofing Application",
                                        description: "Expert installation of membranes, sealants, drainage systems, and vapor barriers."
                                    },
                                    {
                                        title: "Drainage System Installation",
                                        description: "French drains, sump pumps, and gutter systems to redirect water away from foundations."
                                    },
                                    {
                                        title: "Final Inspection & Maintenance Plan",
                                        description: "We verify system performance and provide maintenance recommendations to ensure long-term protection."
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
                                <h4 className="font-bold text-gray-900 mb-2">Our Waterproofing Services</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Foundation Waterproofing", "Basement Waterproofing", "Crawl Space Encapsulation",
                                        "Roof Waterproofing", "Balcony & Deck Waterproofing", "Plaza Deck Waterproofing",
                                        "Parking Garage Waterproofing", "Exterior Wall Waterproofing", "Interior Sealants",
                                        "French Drain Installation", "Sump Pump Systems", "Vapor Barrier Installation",
                                        "Concrete Waterproofing", "Expansion Joint Sealing", "Mold Remediation"
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
                            Waterproofing FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about our commercial waterproofing services
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
                                Ready to Protect Your Property from Water Damage?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Contact us today for a free inspection and waterproofing assessment.
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

                                {/* <Link href="tel:+15512001350" title='Call construction company' passHref>
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