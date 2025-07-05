// app/about-us/page.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
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

    // Core values
    const coreValues = [
        {
            title: "Integrity",
            description: "We operate with honesty and transparency in all our dealings."
        },
        {
            title: "Excellence",
            description: "We strive for perfection in every project we undertake."
        },
        {
            title: "Innovation",
            description: "We embrace new technologies and construction methods."
        },
        {
            title: "Safety",
            description: "We prioritize the safety of our team and clients above all."
        }
    ];

    // Timeline items
    const timeline = [
        {
            year: "2022",
            title: "Company Founded",
            description:
                "Sovanoca Construction was established with a vision to transform the construction landscape."
        },
        {
            year: "2023",
            title: "First Major Project",
            description:
                "Successfully completed a 50,000 sq ft commercial office project, marking our entry into large-scale builds."
        },
        {
            year: "2023",
            title: "Expansion",
            description:
                "Extended our services across North Carolina, handling both residential and commercial developments."
        },
        {
            year: "2024",
            title: "Sustainability Focus",
            description:
                "Launched our green building initiative, incorporating eco-friendly materials and energy-efficient practices."
        },
        {
            year: "2025",
            title: "Industry Recognition",
            description:
                "Awarded the Excellence in Construction Award for innovation and sustainable design."
        }
    ];


    // Team members
    const teamMembers = [
        {
            name: "Harshil Paresh Patel",
            role: "Founder & CEO",
            img:"/ceo.png"
        },
        {
            name: "Vijay Patel",
            role: "CFO",
            img:"/cfo.jpeg"
        },
        {
            name: "Jeel Shah",
            role: "Architect/Head Designer",
            img:"/jeel.jpeg"
        },
        {
            name: "Samuel Thorn",
            role: "Civil Engineer/Estimator",
            img:"/construction-company-logo.png"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-b1 text-white">


                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Building Excellence Since <span className="text-blue-300">2022</span>
                            </h1>
                            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100">
                                SOVANOCA Construction: Transforming visions into reality with quality construction services that stand the test of time.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-b1 font-bold px-8 py-3  shadow-lg"
                                    >
                                    Our Projects
                                </motion.button>
                                    </Link>
                                    <Link href="/contact-us">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 "
                                    >
                                    Contact Us
                                </motion.button>
                                    </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                {/* <div className="absolute lg:-top-6 lg:-left-6 w-full h-full border-4 border-b1 z-0"></div> */}
                                <div className="relative z-10">
                                    <Image
                                        src="/construction-team.webp"
                                        alt="SOVANOCA Construction Team"
                                        title="SOVANOCA Construction Team"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover border-4 border-b1"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-b1">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Founded in 2022, SOVANOCA Construction started as a small team of passionate builders aiming to redefine construction excellence in North Carolina. With a focus on craftsmanship and client satisfaction, we quickly gained recognition in the local market.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                In just a few years, we've completed a wide range of successful projects — from modern residential homes to mid-sized commercial developments. Our dedication to quality, transparency, and innovation continues to drive our growth and reputation across the state.
                            </p>



                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-b1 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Mission & Vision
                        </motion.h2>
                        <div className="h-1 w-24 bg-b1 mx-auto "></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            className="bg-white p-8  shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-b1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-b1 mb-4">Our Mission</h3>
                            <p className="text-gray-700">
                                Building Your Dreams, Sustainably: We partner with clients to transform their visions into reality, while promoting responsible practices for a lasting impact.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8  shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="text-b1 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-b1 mb-4">Our Vision</h3>
                            <p className="text-gray-700">
                                Building a Legacy of Excellence: We strive to be a leader in the construction industry, renowned for exceptional quality and innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-b1 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Core Values
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The foundation of everything we do at SOVANOCA Construction
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto  mt-4"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white p-8  shadow-md border-t-4 border-b1 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl font-bold text-b1 mb-4">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-b1 mb-4">{value.title}</h3>
                                <p className="text-gray-700">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-b1 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Journey
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Key milestones in our company's history
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto  mt-4"></div>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-b1 z-0 hidden md:block"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative z-10 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="bg-white p-6  shadow-lg">
                                            <div className="text-2xl font-bold text-b1 mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-gray-700">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-b1  flex items-center justify-center text-white font-bold z-20">
                                        {index + 1}
                                    </div>

                                    <div className="md:w-1/2 p-4"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-b1 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Leadership Team
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The experienced professionals driving our success
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto mt-4"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white overflow-hidden shadow-md"
                            >
                                <div className="relative h-80 bg-gray-100">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        title={member.name}
                                        fill
                                        className="object-fit"
                                    />
                                </div>
                                <div className="p-6 border-t-4 border-b1">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-b1 font-medium">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Associated Sub-Contractors Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-b1 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Associated Sub-Contractors
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our trusted partners in delivering exceptional results
                        </p>
                        <div className="h-1 w-24 bg-b1 mx-auto mt-4"></div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                name: "H.B Bro's Construction",
                                image: "/hb.jpeg"
                            },
                            {
                                name: "Martinaze Remodeling",
                                image: "/mar.png"
                            },
                            {
                                name: "Teo Home & Repairs",
                                image: "/teo.jpeg"
                            },
                            {
                                name: "C&K Home Improvements",
                                image: "/ck.jpeg"
                            }
                        ].map((contractor, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white overflow-hidden shadow-md"
                            >
                                <div className="relative h-64 bg-gray-100">
                                    <Image
                                        src={contractor.image}
                                        alt={contractor.name}
                                        title={contractor.name}
                                        fill
                                        className="object-fit"
                                    />
                                </div>
                                <div className="p-6 border-t-4 border-b1">
                                    <h3 className="text-xl font-bold text-gray-900">{contractor.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <motion.div
                className="mt-16 bg-b1 mb-10 max-w-4xl mx-auto shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
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
                        {/* <Link href="tel:+15512001350" title="Construction company's Phone number"  passHref>
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
    );
}