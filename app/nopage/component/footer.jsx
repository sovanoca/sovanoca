'use client';
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
    FaFacebookF,
    FaXTwitter,
    FaGithub,
    FaLinkedinIn,
    FaInstagram
} from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0D1B2A] text-gray-300 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Description */}
                <div>
                    <Link href="/" title="Sovanoca Construction Home" aria-label="Sovanoca Construction Home">
                        <div className="w-24 h-auto mb-4">
                            <Image
                                src="/construction-company-logo.png"
                                alt="Sovanoca Construction Logo"
                                title="Sovanoca Construction Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Transforming visions into reality with quality construction services that stand the test of time.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl text-white mt-4">
                        <Link href="https://instagram.com" target="_blank" title="Instagram" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" title="Facebook" aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" title="Twitter" aria-label="Twitter">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" title="LinkedIn" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "Painting Services", href: "/services/exterior-painting-services" },
                            { name: "Waterproofing", href: "/services/waterproofing" },
                            { name: "Flooring", href: "/services/flooring" },
                            { name: "Consulting", href: "/services/preacquisition-property-estimates-consulting" },
                            { name: "Home Alteration", href: "/services/home-layout-alteration" },
                        ].map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} title={`${link.name}`} className="hover:text-blue-300">
                                     {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { name: "Services", href: "/services" },
                            { name: "About Us", href: "/about-us" },
                            { name: "Projects", href: "/projects" },
                            // { name: "Blogs", href: "/blogs" },
                            { name: "Contact", href: "/contact-us" },
                        ].map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="hover:text-blue-300">
                                     {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3 items-start">
                            <FaPhone className="text-white mt-1" />
                            <div>
                                <div className="font-medium text-white">Phone</div>
                                <div>+1 809 120 6705</div>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <FaEnvelope className="text-white mt-1" />
                            <div>
                                <div className="font-medium text-white">Email</div>
                                <div>infosovanoca@gmail.com</div>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <FaMapMarkerAlt className="text-white mt-1" />
                            <div>
                                <div className="font-medium text-white">Location</div>
                                <div>
                                    7 Dundas Circle Suite G, <br />
                                    Greensboro, NC 27403
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <span className="text-gray-400 mb-4 md:mb-0">
                    © {currentYear} Sovanoca Construction. All rights reserved.
                </span>
                {/* <div className="flex gap-4">
                    <Link href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-blue-300">Terms of Service</Link>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
