"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { useRef } from "react";

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
                <div className="rounded-3xl overflow-hidden w-full max-w-md md:max-w-full lg:p-20">
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
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Crafting structures that <br /> last a lifetime
                </h1>
                <p className="text-gray-600 text-lg">
                    Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design, regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.
                </p>

                <div className="bg-blue-50 p-4 rounded-xl space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Comprehensive Services</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Advanced Technology</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Transparent Communication</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-b1 shine-button text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2"
                    >
                        Get Free Quote <ArrowRight size={20} />
                    </motion.button>

                    <div className="flex items-center gap-3 text-gray-700">
                        <PhoneCall className="text-b1 text-2xl" />
                        <div>
                            <p className="text-sm">call support center 24x7</p>
                            <p className="font-bold text-lg">+1 809 120 6705</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
