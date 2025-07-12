"use client";

import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Hotel Renovation Benefits vs. Cost: A North Carolina Owner's Strategic Guide",
    date: "July 11, 2025",
    link: "/blogs/hotel-renovation-benefits-vs-cost-north-carolina-guide",
    image: "/hotel-renovation-benefits-vs-cost-north-carolina-guide.jpg",
  },
  {
    title: "10 Basement Remodeling Ideas to Maximize Space & Value",
    date: "July 12, 2025",
    link: "/blogs/10-basement-remodeling-ideas-to-maximize-space-value",
    image: "/10-basement-remodeling-ideas-to-maximize-space-value.webp",
  }
];

export default function BlogPage() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Sovanoca Insights & Renovation Strategies</h2>
      <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-center">
        Explore expert advice and strategic tips from Sovanoca — North Carolina’s trusted construction and renovation company. Stay informed with real-world insights that help property owners, hoteliers, and developers make smarter renovation decisions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, idx) => (
          <article
            key={idx}
            className="border border-gray-200  shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-52 overflow-hidden ">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3 px-6 text-gray-900">{blog.title}</h3>
              {/* <p className="text-gray-600 mb-5 px-6">{blog.excerpt}</p> */}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 px-6 pb-6">
              <time>{blog.date}</time>
              <Link
                href={blog.link}
                className="text-b1 font-medium hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
