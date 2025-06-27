// components/Footer.js
'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        duration: 0.8 
      } 
    }
  };

  return (
    <footer className="bg-[#0D1B2A] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Logo + Intro */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 10 }}
                className="bg-[#0D1B2A] p-2 rounded-lg border border-blue-400"
              >
                <Image
                  src="/construction-company-logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className=""
                />
              </motion.div>
              
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Transforming visions into reality with quality construction services 
              that stand the test of time.
            </p>
            
            <motion.div 
              className="flex gap-4 text-blue-400 text-lg mt-6"
              variants={fadeIn}
            >
              <motion.a 
                whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
                className="cursor-pointer transition-all"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
                className="cursor-pointer transition-all"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
                className="cursor-pointer transition-all"
              >
                <FaXTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
                className="cursor-pointer transition-all"
              >
                <FaLinkedinIn />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={item}>
            <h3 className="text-blue-400 font-semibold text-lg mb-6 pb-2 border-b border-gray-700">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {["Building Construction", "Architecture Design", "Building Renovation", 
                "Flooring & Roofing", "Building Maintenance"].map((service, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ 
                    x: 10,
                    color: "#93c5fd"
                  }}
                  className="flex items-center gap-2 transition-colors cursor-pointer text-gray-300"
                >
                  <span className="text-blue-400">→</span> {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h3 className="text-blue-400 font-semibold text-lg mb-6 pb-2 border-b border-gray-700">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Services", "Projects", "Testimonials", "Contact"].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ 
                    x: 10,
                    color: "#93c5fd"
                  }}
                  className="flex items-center gap-2 transition-colors cursor-pointer text-gray-300"
                >
                  <span className="text-blue-400">→</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={item}>
            <h3 className="text-blue-400 font-semibold text-lg mb-6 pb-2 border-b border-gray-700">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm text-gray-300">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#0D1B2A] p-2 rounded-full border border-blue-400">
                  <FaPhone className="text-blue-400 mt-0.5" />
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div>+1 809 120 6705</div>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#0D1B2A] p-2 rounded-full border border-blue-400">
                  <FaEnvelope className="text-blue-400 mt-0.5" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>info@Sovanoca.com</div>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="bg-[#0D1B2A] p-2 rounded-full border border-blue-400">
                  <FaMapMarkerAlt className="text-blue-400 mt-0.5" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div>
                    37 San Juan Lane Graaf<br />
                    Florisstraat 22A, 3021 CH
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-700 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <span>Copyright © {new Date().getFullYear()} Sovanoca Construction.</span>

            <motion.a 
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
          
          <motion.div 
            className="flex gap-4 text-blue-400 text-lg"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a 
              whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
              className="cursor-pointer transition-all"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
              className="cursor-pointer transition-all"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
              className="cursor-pointer transition-all"
            >
              <FaXTwitter />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "#93c5fd", scale: 1.2 }}
              className="cursor-pointer transition-all"
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;