// components/ServiceHero.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Home4 from "../../home/home4";
import Home5 from "../../home/home5";
import Home6 from "../../home/home6";
import Home7 from "../../home/home7";

export default function ServiceHero() {
    const [activeFAQ, setActiveFAQ] = useState(null);

    // FAQ data specific to landscaping and hardscaping
   const faqs = [
  {
    question: "What's the difference between landscaping and hardscaping?",
    answer:
      "Great question! Landscaping covers all the living elements of your outdoor space — like grass, flowers, shrubs, trees, and garden beds. It brings color, life, and softness to a property. Hardscaping, on the other hand, includes the solid, man-made features like patios, walkways, retaining walls, and stonework. It's what gives structure and functionality to your yard. Together, they strike a balance between beauty and durability, making your outdoor space not only look amazing but also work for your needs."
  },
  {
    question: "How much does commercial landscaping cost in North Carolina?",
    answer:
      "The cost of commercial landscaping in North Carolina can vary quite a bit depending on the size of the property and the complexity of the design. On average, you can expect anything from $5,000 for basic projects to over $50,000 for full-scale designs with advanced features. We believe every property is unique, so we take the time to evaluate your space and your goals before providing a detailed and transparent quote — no surprises, just smart planning and expert advice."
  },
  {
    question: "What hardscaping materials work best in NC's climate?",
    answer:
      "North Carolina's climate can be a mix of hot summers, humid air, and occasional cold snaps, so it's important to choose materials that can handle all seasons. We typically recommend durable options like natural stone (for its timeless look and strength), concrete pavers (great for budget and flexibility), and composite decking (low-maintenance and weather-resistant). We always consider your specific location, drainage needs, and how the space will be used to recommend the right materials that will last for years to come."
  },
  {
    question: "Do you offer seasonal maintenance packages?",
    answer:
      "Yes, we do — and they're a game-changer for keeping your property looking sharp year-round. Our seasonal maintenance packages cover everything from spring cleanups and mulching to summer irrigation checks, fall leaf removal, and winter weather prep. We tailor each package to your property’s specific layout and needs, so you’re never overpaying for services you don’t need. Think of it as a hassle-free way to protect your landscaping investment and keep your grounds always looking professional."
  },
  {
    question: "How long does a commercial hardscaping project take?",
    answer:
      "Project timelines can vary, but we always aim to keep things efficient and on schedule. Smaller hardscaping jobs like a walkway or patio might take 1–2 weeks, while larger-scale projects — such as retaining walls, outdoor kitchens, or multi-zone layouts — could take 4–8 weeks depending on complexity and weather. We’ll always give you a clear timeline upfront, keep you updated throughout the process, and do our best to minimize disruption to your business or property access."
  },
  {
    question: "Can you handle both design and installation?",
    answer:
      "Absolutely! Our team handles everything under one roof — from creative design to hands-on installation. Our in-house landscape designers work closely with you to understand your goals and vision, and once you're happy with the plan, our skilled installation crew brings it to life with precision and care. This all-in-one approach means fewer headaches for you, faster project turnaround, and results that match your original vision — or even exceed it."
  },
  {
    question: "What sustainability practices do you implement?",
    answer:
      "Sustainability is at the heart of our approach. We use native and drought-tolerant plants that require less water and maintenance. Our irrigation systems are designed to be water-efficient, often using smart controllers and drip systems. We also favor eco-friendly solutions like permeable pavers to reduce runoff and organic treatments to improve soil health. The goal is to create beautiful landscapes that are also low-impact, long-lasting, and supportive of local ecosystems."
  },
  {
    question: "Do you offer snow removal services?",
    answer:
      "Yes, we provide reliable snow removal for commercial properties throughout North Carolina. When winter hits, we’re ready around the clock with 24/7 service. We handle everything — snow plowing, salting, de-icing, and keeping your walkways and entryways safe and accessible. Whether it’s an early morning storm or a weekend freeze, our team ensures your business stays operational and safe for employees and visitors."
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
                <div className="relative z-10 container mx-auto px-8 py-4 lg:py-10">
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
                                className="inline-block bg-b1 px-4 py-2 mb-2 lg:mb-6"
                            >
                                <span className="text-lg lg:text-2xl font-medium text-white">Landscaping & Hardscaping</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Landscaping & Hardscaping Services in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/commercial-landscaping.jpg"
                                        alt="Commercial landscaping and hardscaping services in North Carolina"
                                        title="Landscape Design & Installation in NC"
                                        width={800}
                                        height={600}
                                        className="object-fit w-full h-96 "
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Premium Landscape Solutions</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Transform your commercial property with our premium landscaping and hardscaping solutions.
                                Serving businesses across North Carolina, we create stunning outdoor environments that 
                                enhance curb appeal, increase property value, and provide functional outdoor spaces.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Custom landscape design",
                                    "Premium hardscape installation",
                                    "Seasonal maintenance programs",
                                    "Native plant selection",
                                    "Water-efficient irrigation",
                                    "5-year warranty on installations"
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
                                <Link href="/get-quote" title='Get Landscaping Quote' passHref>
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
                            <div className="relative overflow-hidden shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/commercial-landscaping.jpg"
                                        alt="Commercial landscaping and hardscaping in North Carolina"
                                        title="Professional Landscape Design & Installation"
                                        width={800}
                                        height={600}
                                        className="object-fit w-full h-[70vh]"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">Premium Landscape Solutions</h3>
                                    <p className="text-blue-100">Transforming NC properties since 2023</p>
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
                            Professional Landscaping & Hardscaping Solutions
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Transform Your Outdoor Space</h3>
                            <p className="text-gray-700 mb-6">
                                Our commercial landscaping and hardscaping services are designed to create stunning, 
                                functional outdoor environments that enhance your property's value and appeal. We combine 
                                artistic design with practical solutions to create spaces that thrive in North Carolina's 
                                unique climate.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Serving businesses throughout North Carolina, our team of landscape architects and 
                                certified installers brings expertise in sustainable design, native plant selection, 
                                and premium hardscape installation. We work with office complexes, retail centers, 
                                hospitality venues, and industrial properties.
                            </p>

                            <div className="bg-b1/10 p-6 border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Commercial Landscaping Benefits</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Increases property value by up to 20%",
                                        "Reduces maintenance costs with native plants",
                                        "Enhances brand image and customer experience",
                                        "Improves stormwater management",
                                        "Creates functional outdoor spaces",
                                        "Meets commercial zoning requirements"
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Professional Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Site Analysis & Consultation",
                                        description: "We evaluate your property's conditions, drainage, sun exposure, and business needs"
                                    },
                                    {
                                        title: "Custom Design Development",
                                        description: "Our landscape architects create detailed plans with 3D visualizations"
                                    },
                                    {
                                        title: "Material Selection",
                                        description: "We recommend premium, climate-appropriate plants and hardscape materials"
                                    },
                                    {
                                        title: "Professional Installation",
                                        description: "Our certified crews implement the design with precision and care"
                                    },
                                    {
                                        title: "Quality Assurance",
                                        description: "We conduct thorough inspections at every project phase"
                                    },
                                    {
                                        title: "Maintenance Planning",
                                        description: "We provide customized care programs for long-term beauty"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-b1 text-white font-bold w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-white border border-gray-200 p-6 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Our Services Include</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Landscape Design", "Patio Installation", "Retaining Walls",
                                        "Walkways & Pathways", "Commercial Lawn Care", "Irrigation Systems",
                                        "Seasonal Plantings", "Outdoor Lighting", "Water Features",
                                        "Snow Removal", "Tree & Shrub Care", "Permeable Paving"
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
                            Landscaping & Hardscaping FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about our landscaping services in North Carolina
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto mt-4"></div>
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
                                className="border border-gray-200 overflow-hidden shadow-sm"
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
                        className="mt-16 bg-b1 shadow-xl p-8 text-white relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300 opacity-20" />

                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <motion.h3
                                className="text-2xl font-bold mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Ready to Transform Your Property?
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Contact us today for a free consultation on your landscaping project.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link href="/get-quote" title='Get Landscaping Quote' passHref>
                                    <motion.p
                                        className="border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3 hover:bg-white/10 transition flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Request a Quote →
                                    </motion.p>
                                </Link>

                                {/* <Link href="tel:+15512001350" title='Call Landscaping Experts' passHref>
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