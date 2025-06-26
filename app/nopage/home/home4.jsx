// components/WhyChooseUs.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Modern & Efficient Approach",
      description: "We leverage the latest construction technologies and methodologies to deliver projects faster and more efficiently than traditional contractors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      stat: "Cutting-Edge Tech"
    },
    {
      title: "Personalized Service",
      description: "As a dedicated team, we provide dedicated attention to every project. You'll work directly with the owners from start to finish.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stat: "Direct Access"
    },
    {
      title: "Quality Without Compromise",
      description: "We may be newer, but we never cut corners. Our work meets the highest standards with comprehensive quality checks at every stage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stat: "Premium Materials"
    },
    {
      title: "Safety-First Culture",
      description: "Our commitment to safety is unwavering. We maintain rigorous protocols to ensure every project is accident-free.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stat: "0 Major Incidents"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 bg-orange-100 rounded-full -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-32 h-32 bg-orange-200 rounded-full -z-10 opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-lg md:text-xl font-medium text-orange-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why choose us
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why we're your <span className="text-orange-500">best choice</span>
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-orange-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Features Grid */}
          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'ring-2 ring-orange-500 shadow-xl' : 'hover:shadow-xl'
                }`}
                variants={item}
                whileHover={{ y: -10 }}
                onClick={() => setActiveFeature(index)}
              >
                {/* Feature icon */}
                <motion.div 
                  className={`p-3 rounded-full w-max mb-5 ${
                    activeFeature === index 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-orange-100 text-orange-500'
                  }`}
                  whileHover={{ rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <motion.div 
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full ${
                    activeFeature === index 
                      ? 'bg-orange-500' 
                      : 'bg-orange-100'
                  } opacity-10`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div 
                  className="text-orange-500 font-bold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {feature.stat}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Highlighted Feature */}
          <motion.div 
            className="lg:w-1/2 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden h-full w-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture.png')] opacity-10" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-300 rounded-full opacity-20" />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl font-bold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {features[activeFeature].title}
                </motion.div>
                
                <motion.p 
                  className="text-lg text-orange-100 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {features[activeFeature].description}
                </motion.p>
                
                <motion.div 
                  className="text-5xl font-bold mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: 0.7
                  }}
                >
                  {features[activeFeature].stat}
                </motion.div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-white/30 mb-8 rounded-full"
                >
                  <div className="h-full bg-white rounded-full" style={{ width: `${(activeFeature + 1) * 25}%` }} />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <button className="bg-white shine-button1 text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center gap-2">
                    Start Your Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Value Proposition Banner */}
        <motion.div 
          className="mt-20 bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="text-orange-500">Fresh Perspective</span> with Proven Results
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  While we may be newer to the industry, our innovative approach has already delivered exceptional results for our clients. We bring modern solutions without the overhead of larger firms.
                </motion.p>
                
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Competitive Pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Flexible Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Quick Response Time</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-gray-800/50 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">11+</div>
                  <div className="text-gray-300">Projects</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/50 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">3+</div>
                  <div className="text-gray-300">Years</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/50 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">100%</div>
                  <div className="text-gray-300">Satisfaction</div>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/50 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">0</div>
                  <div className="text-gray-300">Major Incidents</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;