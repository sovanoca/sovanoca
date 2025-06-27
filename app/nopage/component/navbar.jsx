"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from "../../../public/construction-company-logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Services', href: '/services', title: 'Our Construction Company Services' },
        { name: 'About Us', href: '/about-us', title: 'Learn About Sovanoca Construction Company' },
        { name: 'Projects', href: '/projects', title: 'View Our Construction Projects' },
        { name: 'Blogs', href: '/blogs', title: 'Construction Tips & Industry Insights' },
        { name: 'Contact Us', href: '/contact-us', title: 'Get in Touch with Sovanoca Construction Company' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16 lg:h-20 px-2 lg:px-0">
                    {/* Logo */}
                    <div className="m-0 p-0 text-lg font-semibold">
                        <Link href="/" title="Sovanoca Construction Company - Home">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative w-[80px] lg:w-[100px] h-[50px] lg:h-[60px] cursor-pointer"
                            >
                                <Image
                                    src={Logo}
                                    alt="Sovanoca Construction Company Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                    title="Sovanoca - Reliable Construction Company"
                                />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex space-x-10"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                                        <Link
                                            href={item.href}
                                            title={item.title}
                                            className="text-b1 text-md transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ x: 20 }}
                            animate={{ x: 0 }}
                            className="ml-8 flex items-center"
                        >
                            <Link
                                href="/get-quote"
                                title="Request a Construction Quote from Sovanoca"
                                className="shine-button bg-b1 text-white hover:bg-white hover:text-b1 border border-b1 px-4 font-medium py-3  hover:scale-105 transition-all text-md shadow-lg relative z-10"
                            >
                                Request a Quote →
                            </Link>

                        </motion.div>
                    </nav>
                   

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                         <motion.div
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="ml-8 flex items-center lg:hidden"
                    >
                        <Link
                            href="/get-quote"
                            title="Request a Construction Quote from Sovanoca"
                            className="shine-button bg-b1 text-white hover:bg-white hover:text-b1 border border-b1 px-4 font-medium py-3  hover:scale-105 transition-all text-md shadow-lg relative z-10"
                        >
                            Request a Quote →
                        </Link>

                    </motion.div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-b1 focus:outline-none p-2"
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
                        aria-label="Mobile Navigation"
                    >
                        <div className="pt-2 pb-4 space-y-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    title={item.title}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b block text-b1 hover:text-blue-600 px-4 py-3 font-2xl hover:bg-gray-50 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/get-quote"
                                title="Request a Quote from Sovanoca Construction Company"
                                className="shine-button bg-b1 text-white hover:bg-white hover:text-b1 border border-b1 block text-center px-6 py-3 -lg transition-colors font-semibold shadow-md"
                            >
                                Request a Quote →
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
