"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jones",
        role: "Homeowner",
        image: "/client1.jpeg",
        text: "We were so impressed with the professionalism and expertise throughout our renovation project. They kept us informed every step of the way, and the final results exceeded our expectations. We wouldn't hesitate to recommend them to anyone!",
    },
    {
        name: "Michael Lee, Architect",
        role: "Architect",
        image: "/client2.jpeg",
        text: "I've had the pleasure of collaborating with them on several projects, and their commitment to quality and safety is truly outstanding.  They are a reliable and trustworthy partner, and their dedication to innovation always leads to impressive results.",
    },
    {
        name: "Chris Carter",
        role: "Real Estate Developer",
        image: "/client3.webp",
        text: "Working with this team was a game changer. Their attention to detail, communication, and ability to deliver high-quality results on time exceeded our expectations. From concept to completion, they made the entire process smooth and stress-free."
    }

];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

export default function TestimonialSection() {
    return (
        <section className="bg-white px-6 md:px-16 py-20 text-center">
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-b1 font-semibold uppercase tracking-wide mb-2"
            >
                Testimonials
            </motion.p>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={fadeUp}
                className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] mb-4"
            >
                What people are saying about us
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                custom={2}
                variants={fadeUp}
                className="text-gray-500 max-w-2xl mx-auto mb-12"
            >
                We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
            </motion.p>

            {/* Cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index + 3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="#FFC107" stroke="#FFC107" />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-gray-600 text-sm text-left leading-relaxed mb-6">
                            {item.text}
                        </p>

                        {/* User Info */}
                        <div className="flex items-center  gap-4 border-t pt-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full object-cover"
                            />


                            <div className="text-left">
                                <p className="text-[#0D1B2A] font-bold">{item.name}</p>
                                <p className="text-gray-400 text-sm">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

          
        </section>
    );
}
