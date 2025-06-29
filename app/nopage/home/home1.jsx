'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
    };

    return (
        <section className="w-full h-full lg:h-[90vh] overflow-hidden bg-white pt-4">
            <div className="max-w-7xl mx-auto h-full flex flex-col px-4 lg:px-8 py-4">
                <motion.div
                    className="flex flex-col lg:flex-row flex-none gap-4 lg:gap-6 h-auto lg:h-[35%]"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Left Text */}
                    <motion.div className="flex w-full lg:w-1/2 items-end p-2 lg:p-4" variants={item}>
                        <div>
                            <motion.h1 className="text-xs text-center lg:text-left sm:text-sm font-medium text-b1" variants={item}>
                                Trusted Construction Company in North Carolina
                            </motion.h1>
                            <motion.h2 className="text-3xl text-center lg:text-left lg:text-5xl font-bold leading-tight" variants={item}>
                                We build high-quality spaces
                                <span className="text-gray-800"> </span>{' '}
                                <span className="text-gray-500 font-bold">with smart and modern design.</span>
                            </motion.h2>
                        </div>

                    </motion.div>

                    {/* Right Text */}
                    <motion.div className="hidden lg:flex w-full lg:w-1/2 items-end pl-20" variants={item}>
                        <motion.p className="text-gray-600 text-base lg:text-lg" variants={item}>
                            Based in Greensboro, North Carolina, we proudly serve clients across the state—delivering exceptional craftsmanship, reliable project management, and on-time results.

                            From new home construction to commercial renovations, we're the construction company North Carolina trusts for dependable service and lasting results.
                        </motion.p>

                    </motion.div>
                </motion.div>

                {/* Bottom Section - Images */}
                {/* Bottom Section - Images */}
                <motion.div
                    className="flex-grow min-h-0 pt-4 lg:pt-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="flex flex-col-reverse lg:flex-row h-full gap-4 lg:gap-6">
                        {/* Left Image */}
                        <motion.div
                            className="lg:w-1/2 clip-hex  hidden lg:flex relative w-full h-64 sm:h-72 lg:h-full overflow-hidden -xl shadow-lg"
                            variants={scaleUp}
                            initial="hidden"
                            animate="show"
                        >
                            <Image
                                src="/under-construction-building.webp"
                                alt="Construction site in Greensboro"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Text for Mobile */}
                        <motion.div
                            className="flex lg:hidden w-full lg:w-1/2 items-end p-2 lg:p-4"
                            variants={item}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.p className="text-gray-600 text-base lg:text-lg" variants={item}>
                            Based in Greensboro, North Carolina, we proudly serve clients across the state—delivering exceptional craftsmanship, reliable project management, and on-time results.

                            From new home construction to commercial renovations, we're the construction company North Carolina trusts for dependable service and lasting results.
                        </motion.p>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            className="flex lg:w-1/2 flex-col h-full gap-4 lg:gap-6"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {/* Right Image */}
                            <motion.div
                                className="clip-hex relative w-full h-48 sm:h-56 lg:h-2/3 overflow-hidden -xl shadow-lg"
                                variants={scaleUp}
                                initial="hidden"
                                animate="show"
                            >
                                <Image
                                    src="/Engineers-discussing-projects1.webp"
                                    alt="Construction engineers in Greensboro"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-3 lg:gap-4"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                <motion.button
                                    className="flex-1 shine-button bg-b1 text-white text-base sm:text-xl lg:text-2xl font-medium px-4 py-3 sm:py-4 lg:py-6  hover:bg-b1 transition shadow-md"
                                    variants={item}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request a Quote
                                </motion.button>
                                <motion.button
                                    className="flex-1 bg-white text-gray-800 text-base sm:text-xl lg:text-2xl font-medium px-4 py-3 sm:py-4 lg:py-6  border border-gray-300 hover:bg-gray-50 transition shadow-md"
                                    variants={item}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Projects
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}