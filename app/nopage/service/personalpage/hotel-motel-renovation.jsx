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

    // FAQ data specific to hotel/motel renovation
    const faqs = [
        {
            question: "How long does a typical hotel renovation take?",
            answer: "Project timelines vary based on size and scope. A full renovation typically takes 4-12 weeks. We can phase projects to keep portions of your property operational. For urgent renovations, we offer expedited 2-4 week turnaround options for key areas like lobbies or guest rooms."
        },
        {
            question: "Do you work with historic hotel properties?",
            answer: "Yes, we specialize in preserving historic character while modernizing facilities. Our team is experienced with North Carolina's historic preservation guidelines and can help navigate any special requirements while maintaining your property's unique charm."
        },
        {
            question: "Will renovations disrupt my hotel operations?",
            answer: "We minimize disruption through careful planning. For occupied hotels, we work floor-by-floor or wing-by-wing. We coordinate with management to schedule noisy work during low-occupancy periods and always maintain clean, safe pathways for guests and staff."
        },
        {
            question: "What areas of hotels do you typically renovate?",
            answer: "We renovate all areas including guest rooms, lobbies, restaurants, pools, conference spaces, and exteriors. Common projects include bathroom remodels, flooring upgrades, lighting modernization, facade improvements, and ADA compliance updates."
        },
        {
            question: "Do you help with design and material selection?",
            answer: "Absolutely. We offer full design-build services with selections tailored to hospitality needs - durable, attractive materials that withstand heavy use while creating welcoming spaces. Our designers stay current on hospitality trends to maximize guest appeal."
        },
        {
            question: "How do you handle permits and inspections?",
            answer: "We manage all permitting and coordinate inspections, including specialized hospitality requirements like fire safety systems. Our team is familiar with North Carolina's commercial building codes and hospitality-specific regulations."
        },
        {
            question: "What COVID-related renovations are you seeing?",
            answer: "We're implementing touchless fixtures, antimicrobial surfaces, enhanced HVAC systems, redesigned lobbies for social distancing, and converting spaces to accommodate remote workers. These upgrades help properties meet new guest expectations."
        },
         {
            question: "Why should I choose hotel renovation companies NC like yours?",
            answer: "As one of the trusted hotel renovation companies in NC, we combine deep knowledge of the hospitality industry with local expertise. Our team delivers end-to-end solutions—from design and permits to construction and finishing—helping North Carolina hotels enhance guest experience, improve efficiency, and boost long-term property value."
        },
        {
            question: "Do you offer financing options for renovations?",
            answer: "Yes, we partner with several lenders specializing in hospitality projects. We can help you explore options like renovation loans, equipment financing, and energy efficiency rebates to make improvements more affordable."
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
                                <span className=" text-lg lg:text-2xl font-medium text-white">Hotel renovation companies nc</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl  lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Hotel Renovation company in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/hotel-renovation.jpg"
                                        alt="Hotel renovation and remodeling services"
                                        title="Professional hotel renovation"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-72"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Premium Hospitality Renovations</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Transform your hospitality property with our comprehensive renovation solutions. As one of the trusted hotel renovation companies NC, we serve hotels across North Carolina, specializing in guest room updates, lobby transformations, and facility upgrades that enhance both guest experience and property value.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Hospitality-specific design expertise",
                                    "Minimal operational disruption",
                                    "Durable, guest-friendly materials",
                                    "ADA compliance specialists",
                                    "In-house design-build team",
                                    "Financing options available"
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
                                        src="/hotel-renovation.jpg"
                                        alt="Hotel renovation and remodeling"
                                        title="Professional hotel renovation services"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-[70vh]"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">Hospitality Renovation Experts</h3>
                                    <p className="text-blue-100">Transforming NC hotels since 2023</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section>
            <Home4 />

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
                            Professional Hotel & Motel Renovation
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Revitalize Your Hospitality Property</h3>
                            <p className="text-gray-700 mb-6">
                                As one of the top hotel renovation companies NC, our renovation services are designed to modernize your property while maximizing return on investment. We specialize in understanding the hospitality industry's unique needs—delivering spaces that are not only visually appealing but also durable, functional, and fully compliant with regulations.
                            </p>
                            <p className="text-gray-700 mb-6">
                                As one of the leading hotel renovation companies NC, we serve properties across North Carolina, from boutique hotels to national chains. Our expertise lies in renovations that enhance guest satisfaction, improve operational efficiency, and maximize revenue potential. From cosmetic updates to complete property transformations, our team delivers solutions tailored to your hospitality needs.
                            </p>

                            <div className="bg-b1/10 p-6  border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Why Renovate Your Hotel or Motel?</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Increase average daily rates by 15-30%",
                                        "Extend asset lifespan and reduce maintenance",
                                        "Improve guest satisfaction scores",
                                        "Meet brand standards for franchise properties",
                                        "Address changing guest expectations post-COVID",
                                        "Qualify for higher star ratings and awards"
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Renovation Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Needs Assessment & Planning",
                                        description: "We evaluate your property's condition, identify improvement opportunities, and develop a strategic renovation plan aligned with your business goals."
                                    },
                                    {
                                        title: "Design & Material Selection",
                                        description: "Our hospitality designers create attractive, functional spaces using durable materials that withstand heavy guest use while maintaining aesthetic appeal."
                                    },
                                    {
                                        title: "Phased Implementation",
                                        description: "We develop a customized schedule to minimize disruption, often working floor-by-floor or during seasonal closures."
                                    },
                                    {
                                        title: "Quality Construction",
                                        description: "Our skilled tradespeople execute renovations with hotel-quality craftsmanship, paying special attention to noise control and cleanliness."
                                    },
                                    {
                                        title: "Systems Integration",
                                        description: "We coordinate all mechanical, electrical, and technology upgrades to ensure seamless operation."
                                    },
                                    {
                                        title: "Final Inspection & Training",
                                        description: "We conduct thorough quality checks and provide staff training on any new systems or features."
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
                                <h4 className="font-bold text-gray-900 mb-2">Hotel Renovation Services</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Guest Room Remodels", "Lobby Transformations", "Bathroom Renovations",
                                        "Exterior Facelifts", "Restaurant & Bar Updates", "Pool Area Upgrades",
                                        "Meeting Space Modernization", "ADA Compliance", "Lighting Upgrades",
                                        "Flooring Replacement", "HVAC Improvements", "Signage Installation"
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
            <section className="container mx-auto bg-white border  shadow-md p-6 my-12">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Image */}
                    <div className="overflow-hidden">
                        <Image
                            src="/hotel-renovation-benefits-vs-cost-north-carolina-guide.jpg"
                            alt="Hotel Renovation Benefits vs. Cost"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-sm text-gray-500 mb-2">Published on July 11, 2025</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Hotel Renovation Benefits vs. Cost: A North Carolina Owner's Strategic Guide
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Discover the true value of hotel renovations in North Carolina. Learn how strategic upgrades can boost guest satisfaction, increase bookings, and outweigh renovation costs in the long run.
                        </p>
                        <Link
                            href="/blogs/hotel-renovation-benefits-vs-cost-north-carolina-guide"
                            className="inline-block bg-black text-white px-5 py-2  hover:bg-gray-800 transition"
                        >
                            Read Full Guide
                        </Link>
                    </div>
                </div>
            </section>

            <Home5 />
            <Home6 />
            <Home7 />


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
                            Hotel Renovation FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about our hospitality renovation services
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
                                Ready to Transform Your Hotel or Motel?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Contact us today for a free property assessment and renovation consultation.
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
                </div>
            </section>
        </div>
    );
}