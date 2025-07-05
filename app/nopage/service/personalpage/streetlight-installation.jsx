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

    // FAQ data specific to streetlight installation
    const faqs = [
        {
            question: "How long does commercial streetlight installation take?",
            answer: "Most commercial streetlight projects take 1-3 weeks depending on the scale. Small parking lot installations may take 3-5 days, while large commercial developments can take 2-4 weeks. We provide a detailed timeline after assessing your property's specific requirements."
        },
        {
            question: "What types of streetlights do you install?",
            answer: "We install various commercial-grade lighting including LED fixtures, solar-powered lights, decorative street lamps, high-mast lighting, and smart lighting systems with motion sensors. All our fixtures meet North Carolina's commercial lighting standards and energy efficiency requirements."
        },
        {
            question: "Will streetlight installation disrupt my business operations?",
            answer: "We minimize disruption through careful planning. Most installations are completed during business hours with minimal impact. For parking lot lighting, we work in sections to maintain access. We coordinate closely with property managers to ensure smooth operations."
        },
        {
            question: "Do you handle permits for streetlight installations?",
            answer: "Yes, we manage all necessary permits including electrical, right-of-way, and municipal approvals. Our team is familiar with North Carolina's commercial lighting regulations and handles all paperwork, including coordination with local utility companies when needed."
        },
        {
            question: "What are the benefits of LED streetlights?",
            answer: "LED streetlights offer 50-70% energy savings, longer lifespan (50,000+ hours), better light quality, reduced maintenance costs, and improved safety with brighter, more uniform illumination. They also qualify for many energy rebate programs in North Carolina."
        },
        {
            question: "Can you integrate smart lighting controls?",
            answer: "Absolutely. We install smart lighting systems with dimming controls, motion sensors, daylight harvesting, and remote monitoring capabilities. These systems can reduce energy costs by up to 80% while improving security and maintenance efficiency."
        },
        {
            question: "What maintenance do streetlights require?",
            answer: "LED streetlights typically need minimal maintenance. We recommend annual inspections to check fixtures, wiring, and poles. Our maintenance services include bulb replacements, photocell repairs, pole straightening, and electrical component servicing with 24/7 emergency support."
        },
        {
            question: "What warranty do you offer on streetlight installations?",
            answer: "We provide a 5-year warranty on materials and workmanship for new installations, covering fixtures, poles, and electrical components. LED fixtures typically come with 10-year manufacturer warranties. We provide complete warranty documentation."
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
                                <span className=" text-lg lg:text-2xl font-medium text-white">Streetlight Installation</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl  lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Commercial Streetlight Installation in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/streetlight.webp"
                                        alt="Commercial streetlight installation service"
                                        title="Professional streetlight installation"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-72"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Professional Lighting Solutions</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Illuminate your commercial property with our professional streetlight installation services. 
                                Serving businesses across North Carolina, we specialize in energy-efficient, 
                                code-compliant lighting solutions for parking lots, roadways, and commercial developments.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Energy-efficient LED solutions",
                                    "Smart lighting controls available",
                                    "Full permit acquisition",
                                    "5-year installation warranty",
                                    "24/7 emergency service",
                                    "Free lighting assessment"
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
                                        src="/streetlight.webp"
                                        alt="Commercial streetlight installation"
                                        title="Professional streetlight installation services"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-[70vh]"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">Commercial Lighting Experts</h3>
                                    <p className="text-blue-100">Illuminating North Carolina properties since 2023</p>
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
                            Professional Streetlight Installation Services
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Enhance Safety and Security</h3>
                            <p className="text-gray-700 mb-6">
                                Our commercial streetlight installation services provide optimal illumination for your property, 
                                improving safety, security, and nighttime visibility. Proper lighting reduces accident risks, 
                                deters criminal activity, and extends your business hours by creating a welcoming environment 
                                after dark.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Serving commercial properties throughout North Carolina, we design lighting solutions for 
                                parking lots, roadways, walkways, and building perimeters. Our team handles everything from 
                                new installations to retrofits and smart lighting upgrades, ensuring compliance with all 
                                local lighting ordinances.
                            </p>

                            <div className="bg-b1/10 p-6  border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Benefits of Professional Streetlight Installation</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Reduces liability risks from poor lighting",
                                        "Improves customer and employee safety",
                                        "Enhances property aesthetics and value",
                                        "Lowers energy costs with LED technology",
                                        "Meets ADA and municipal lighting requirements",
                                        "Increases nighttime business activity"
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Installation Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Site Assessment & Lighting Plan",
                                        description: "We evaluate your property's lighting needs, create photometric plans, and design optimal fixture placement for uniform illumination."
                                    },
                                    {
                                        title: "Permit Acquisition",
                                        description: "Handle all necessary electrical and municipal permits, including coordination with utility companies when required."
                                    },
                                    {
                                        title: "Infrastructure Preparation",
                                        description: "Install conduit, electrical connections, and foundations according to engineering specifications."
                                    },
                                    {
                                        title: "Pole & Fixture Installation",
                                        description: "Erect poles and mount energy-efficient LED fixtures with precise aiming for optimal light distribution."
                                    },
                                    {
                                        title: "Electrical Connection & Testing",
                                        description: "Complete all wiring, connect to power sources, and test lighting controls and photocells."
                                    },
                                    {
                                        title: "Final Inspection & Demonstration",
                                        description: "Conduct nighttime verification, adjust fixtures as needed, and demonstrate control systems."
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
                                <h4 className="font-bold text-gray-900 mb-2">Commercial Lighting Services</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Parking Lot Lighting", "Roadway Lighting", "LED Retrofits",
                                        "Solar Streetlights", "Decorative Lighting", "Smart Lighting Systems",
                                        "Security Lighting", "Sports Field Lighting", "Area Flood Lighting",
                                        "Pathway Lighting", "Pole Replacement", "Lighting Maintenance"
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
                            Streetlight Installation FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about our commercial streetlight services
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
                                Need Professional Streetlight Installation?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Contact us today for a free lighting assessment and quote for your commercial property.
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