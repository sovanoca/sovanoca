"use client"
import { useState, useEffect } from 'react';

const ContactUs = () => {
    // State for form fields with new fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        pincode: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const email = "infosovanoca@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validation - check if required fields are filled
        if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.pincode || !formData.message) {
            setSubmitMessage("Please fill in all required fields.");
            setIsSubmitting(false);
            return;
        }

        // Save to localStorage
        const savedContacts = JSON.parse(localStorage.getItem('contactFormData') || '[]');
        const newContacts = [...savedContacts, formData];
        localStorage.setItem('contactFormData', JSON.stringify(newContacts));

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitMessage("Thanks for reaching out! We'll get back to you soon.");
                setFormData({ 
                    name: '', 
                    phone: '', 
                    email: '', 
                    address: '', 
                    pincode: '', 
                    message: '' 
                });

                // 🔹 Trigger Google Ads conversion
                if (typeof gtag_report_conversion === 'function') {
                    gtag_report_conversion();
                }
            } else {
                setSubmitMessage("Failed to send message. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            setSubmitMessage("Error occurred. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-white py-4 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto ">
                {/* Header */}
                <div className="bg-b1 text-white py-16 px-6 relative overflow-hidden mb-8">
                    {/* Left circular decoration */}
                    <div className="absolute left-[-60px] top-[-60px] w-60 h-60 border-4 border-[#339DFF] opacity-40" />
                    <div className="absolute left-[-30px] top-[-30px] w-40 h-40 border-4 border-[#339DFF] opacity-40" />

                    {/* Right circular decoration */}
                    <div className="absolute right-[-60px] bottom-[-60px] w-60 h-60 border-4 border-[#339DFF] opacity-40" />
                    <div className="absolute right-[-30px] bottom-[-30px] w-40 h-40 border-4 border-[#339DFF] opacity-40" />

                    <div className="relative z-10 text-center">
                        <button className="bg-white text-[#007AFF] px-6 py-2 mb-4 shadow-lg hover:bg-blue-100 transition">
                            WRITE TO US
                        </button>
                        <h2 className="text-3xl md:text-4xl ">Get In Touch</h2>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-10">
                    {/* Contact Information */}
                    <div className="flex flex-col overflow-hidden lg:w-2/5 h-auto">
                        {/* Contact Methods */}
                        <div className="p-8 bg-white border border-gray-200 ">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

                            <div className="space-y-4">
                                {/* WhatsApp */}
                                <a
                                    href="tel:+13365003171"
                                    title="company's phone number"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 transition"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2">
                                            <svg className="h-6 w-6 text-b1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Call us</h3>
                                            <p className="text-gray-600">(336) 500-3171</p>
                                        </div>
                                    </div>
                                </a>

                                {/* Email */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-4 bg-blue-50 hover:bg-blue-100 transition">
                                    <a href={`mailto:${email}`} title="company's email" className="flex items-start sm:items-center gap-4">
                                        <div className="p-2">
                                            <svg className="h-6 w-6 text-b1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                                            <p className="text-gray-600">{email}</p>
                                        </div>
                                    </a>

                                    {/* Copy Button */}
                                    <button
                                        onClick={handleCopy}
                                        className="text-sm text-b1 hover:text-blue-800 px-3 py-1 bg-white border border-blue-200 w-fit"
                                    >
                                        {copied ? "Copied!" : "Copy"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Text */}
                        <div className="p-8 bg-b1 text-white flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold">Let&apos;s Build Your Vision, Brick by Brick</h2>
                            <p className="text-lg opacity-90">
                                Whether you're planning a new home, commercial space, or renovation project — SOVANOCA Construction is here to turn your ideas into reality with precision, quality, and care.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-3/5">
                        <div className="bg-white shadow-xl p-8 border border-gray-200 ">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Quote</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                            <p className="text-sm text-red-600 mb-4">* All fields are required</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="John Doe"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone Field */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="+1 (555) 123-4567"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="you@example.com"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Address Field */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Address *
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Street address, City, State"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Pincode Field */}
                                    <div>
                                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                                            Pincode/ZIP Code *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="123456"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Project Details / Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tell us about your construction project requirements..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 text-white font-medium transition-all ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-b1 hover:bg-blue-700 hover:shadow-lg'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Get Quote'
                                        )}
                                    </button>

                                    {submitMessage && (
                                        <div className={`mt-4 p-4 ${submitMessage.includes('Thanks') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                            {submitMessage}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                We typically respond within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;