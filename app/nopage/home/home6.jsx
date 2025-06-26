"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-b1 text-white px-6 lg:px-16 h-auto pt-10 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Let's build something great together!
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Don’t wait any longer to bring your construction dreams to life. Partner with Buildup and experience unparalleled service and quality.
          </p>

          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-[#0D1B2A] font-bold py-4 px-6 rounded-md shine-button flex items-center gap-2 transition">
            Get Free Quote <ArrowRight size={20} />
          </button>
        </div>

        {/* Girl Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/cta-box-img.png" // ✅ Replace with your image path
            alt="Construction Girl"
            width={400}
            height={500}
            className="hidden lg:flex object-contain h-auto w-full max-w-sm lg:max-w-md"
            priority
          />
           <Image
            src="/cta-box-img2.webp" // ✅ Replace with your image path
            alt="Construction Girl"
            width={400}
            height={500}
            className="lg:hidden object-contain h-auto w-full max-w-sm lg:max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
