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

    // FAQ data specific to waterproofing solutions
    const faqs = [
        {
            question: "What are the signs I need waterproofing in my North Carolina home?",
            answer: "Common signs include: basement dampness or standing water, musty odors, mold growth, efflorescence (white powder on walls), cracked foundations, peeling paint, and high humidity levels. If you notice any of these in your NC home, it's time for a professional assessment."
        },
        {
            question: "How long does waterproofing last in NC's climate?",
            answer: "Our waterproofing solutions last 10-15 years on average. We use premium materials specifically engineered for North Carolina's humid climate, heavy rainfall, and occasional freeze-thaw cycles. Coastal areas may require more frequent maintenance due to higher moisture exposure."
        },
        {
            question: "Can waterproofing prevent mold in my basement?",
            answer: "Yes, proper waterproofing is the first defense against mold. By controlling moisture intrusion, we create an environment where mold can't thrive. We also install vapor barriers and recommend dehumidifiers to maintain optimal humidity levels below 50% - crucial in NC's humid climate."
        },
        {
            question: "Do you offer foundation repair services along with waterproofing?",
            answer: "Yes, we provide comprehensive solutions. Our team addresses foundation cracks, wall bowing, and structural issues before applying waterproofing treatments. We're certified in foundation stabilization methods appropriate for North Carolina soil conditions."
        },
        {
            question: "What waterproofing methods work best for North Carolina homes?",
            answer: "We use interior and exterior solutions: exterior membrane systems, French drains, sump pumps, interior drainage channels, vapor barriers, and hydraulic cement for cracks. For crawl spaces, we specialize in encapsulation systems that combat NC's high humidity."
        },
        {
            question: "How much does basement waterproofing cost in North Carolina?",
            answer: "Costs vary based on home size and solution complexity. Simple interior systems start around $3,000, while comprehensive exterior solutions range $8,000-$15,000. We provide transparent quotes after assessing your specific needs and offer financing options for NC homeowners."
        },
        {
            question: "Will waterproofing increase my home's value in North Carolina?",
            answer: "Absolutely. Waterproofing adds significant value by preventing structural damage and creating usable space. In NC's competitive housing market, waterproofed basements and crawl spaces are major selling points that can increase property value by 10-15%."
        },
        {
            question: "What warranty do you offer on waterproofing work?",
            answer: "We provide a transferable 10-year warranty covering materials and workmanship. This includes protection against water intrusion, sump pump failures, and drainage system issues. We also offer annual maintenance plans to ensure optimal performance in NC's climate."
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
                                <span className=" text-lg lg:text-2xl font-medium text-white">Waterproofing Solutions</span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl  lg:text-5xl font-bold leading-tight mb-2 lg:mb-6"
                            >
                                Residential Waterproofing Services in North Carolina
                            </motion.h1>
                            <div className="relative lg:hidden overflow-hidden  shadow-2xl border-4 border-white">
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src="/commercial-waterproofing.webp"
                                        alt="Basement waterproofing in North Carolina"
                                        title="Professional waterproofing services in NC"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-72"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-md lg:text-xl">Dry & Healthy Homes</h3>
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-sm lg:text-xl text-black mb-2 mt-4 lg:mt-0 lg:mb-8 max-w-3xl"
                            >
                                Protect your North Carolina home from water damage with our comprehensive waterproofing solutions. 
                                Serving homeowners statewide, we prevent basement flooding, control crawl space moisture, 
                                and safeguard your foundation against NC's heavy rains and high humidity.
                            </motion.p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                            >
                                {[
                                    "Basement waterproofing systems",
                                    "Crawl space encapsulation",
                                    "Foundation crack repairs",
                                    "10-year transferable warranty",
                                    "Free moisture inspections",
                                    "Mold prevention solutions"
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
                                <Link href="/get-quote" title='Get waterproofing quote' passHref>
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
                                        alt="Basement waterproofing in North Carolina"
                                        title="Professional waterproofing services in NC"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-96"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-b1/90 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl">Waterproofing Experts</h3>
                                    <p className="text-blue-100">Protecting NC homes from water damage since 2023</p>
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
                            Comprehensive Waterproofing Solutions for NC Homes
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
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Home from Water Damage</h3>
                            <p className="text-gray-700 mb-6">
                                North Carolina's heavy rainfall and high humidity create perfect conditions for basement flooding, 
                                crawl space moisture, and foundation damage. Our residential waterproofing services provide permanent 
                                solutions to keep your home dry and structurally sound. We address water intrusion at its source, 
                                protecting your biggest investment.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Serving homeowners across NC, from the mountains to the coast, our certified technicians specialize in:
                                basement waterproofing, crawl space encapsulation, foundation sealing, and mold remediation. 
                                We understand the unique waterproofing challenges presented by North Carolina's diverse climate 
                                and soil conditions.
                            </p>

                            <div className="bg-b1/10 p-6  border-l-4 border-b1">
                                <h4 className="font-bold text-gray-900 mb-2">Why Waterproofing is Essential in North Carolina</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Prevents structural damage to foundations",
                                        "Reduces risk of costly mold remediation",
                                        "Lowers humidity for improved indoor air quality",
                                        "Creates usable basement storage/living space",
                                        "Increases home value by 10-15%",
                                        "Protects against NC's heavy seasonal rains"
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
                                        description: "We inspect your property for water entry points, foundation issues, and humidity problems using specialized tools."
                                    },
                                    {
                                        title: "Custom Solution Design",
                                        description: "Receive a tailored waterproofing plan addressing your home's specific needs and NC climate challenges."
                                    },
                                    {
                                        title: "Professional Installation",
                                        description: "Our certified technicians implement solutions with minimal disruption to your household."
                                    },
                                    {
                                        title: "Drainage System Implementation",
                                        description: "We install interior/exterior drains, sump pumps, and vapor barriers as needed."
                                    },
                                    {
                                        title: "Sealing & Encapsulation",
                                        description: "Foundation cracks are sealed and crawl spaces encapsulated to block moisture."
                                    },
                                    {
                                        title: "Final Testing & Maintenance Plan",
                                        description: "We test our systems and provide maintenance guidelines for NC conditions."
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
                                <h4 className="font-bold text-gray-900 mb-2">Waterproofing Services for NC Homes</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Basement Waterproofing", "Crawl Space Encapsulation", "Foundation Sealing",
                                        "French Drain Installation", "Sump Pump Systems", "Interior Drain Tile",
                                        "Exterior Waterproofing", "Vapor Barrier Installation", "Concrete Crack Repair",
                                        "Mold Remediation", "Humidity Control", "Grading & Downspout Solutions"
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
                            Waterproofing Solutions FAQs
                        </motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Answers to common questions about residential waterproofing in North Carolina
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
                                Protect Your North Carolina Home Today
                            </motion.h3>

                            <motion.p
                                className="text-lg text-blue-100 mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Schedule a free waterproofing inspection and quote for your home.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link href="/get-quote" title='Get waterproofing quote' passHref>
                                    <motion.p
                                        className="border-2 shine-button border-white bg-b1 text-white font-bold px-8 py-3 hover:bg-white/10 transition flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Request Inspection →
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