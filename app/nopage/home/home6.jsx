"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-b1 text-white px-6 lg:px-16 h-auto pt-10 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full items-center">

        {/* Text Content */}
        <div className="space-y-6 flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            North Carolina Construction Experts You Can Trust
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Ready to take your commercial or residential project to the next level? Partner with Buildup — a trusted construction service provider in North Carolina — for reliable execution, transparent pricing, and top-quality results.
          </p>
<div className="flex">

          <Link href="/get-quote" className="mt-4 bg-white hover:bg-blue-100 text-[#0D1B2A] font-bold py-4 px-6 shine-button1 flex items-center gap-2 transition">
            Get Free Quote <ArrowRight size={20} />
          </Link>
</div>
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
