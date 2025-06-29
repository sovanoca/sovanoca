"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function AboutUsHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // triggers when 20% is visible

    return (
        <div
            ref={ref}
            className="min-h-screen mt-4 bg-white px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
            {/* Left: Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center flex-col"
            >
                <div className=" overflow-hidden w-full max-w-md md:max-w-full lg:p-20">
                    <Image
                        src="/Engineer-photo.png"
                        alt="Construction Workers"
                        width={400}
                        height={500}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
            >
                <h3 className=" text-b1 font-bold uppercase">About Us</h3>
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    Trusted Construction Company in North Carolina — Building to Last

                </h2>
                At Sovanoca, we specialize in building residential and commercial spaces that stand the test of time. Based in Greensboro, we combine expert planning, skilled craftsmanship, and modern design to deliver exceptional construction services across North Carolina.


                <div className="bg-blue-50 p-4  space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Residential & Commercial Construction Experts </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Skilled Team & Modern Building Techniques </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Clear Project Timelines and Honest Communication </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/get-quote"
                            className="bg-b1 shine-button text-white font-bold px-6 py-3 flex items-center gap-2"
                        >
                            Get Free Quote <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <Link href="tel:+15512001350" passHref>
                        <motion.p
                            className="bg-white text-b1 border-2 border-b1 font-bold px-6 py-3 hover:bg-gray-100 transition flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Us: (551) 200-1350
                        </motion.p>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
