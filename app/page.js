import Home1 from "./nopage/home/home1"
import Home2 from "./nopage/home/home2"
import Home3 from "./nopage/home/home3"
import Home4 from "./nopage/home/home4"
import Home5 from "./nopage/home/home5"
import Home6 from "./nopage/home/home6"
import Home7 from "./nopage/home/home7"
import Home8 from "./nopage/home/home8"
import Head from "next/head"

export const metadata = {
  title: "Construction Company in North Carolina | Sovanoca",
  description:
    "Sovanoca is a trusted construction company in North Carolina specializing in residential, commercial, and remodeling services. Get a free quote today!",
  keywords: [
    "construction company in North Carolina",
    "residential construction",
    "commercial construction",
    "remodeling contractor",
    "general contractor NC",
    "home builder North Carolina",
    "sovanoca",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Sovanoca", url: "https://sovanoca.com" }],
  creator: "Sovanoca",
  publisher: "Sovanoca",
  openGraph: {
    title: "Construction Company in North Carolina | Sovanoca",
    description:
      "Trusted construction company offering quality commercial and residential services across North Carolina. Free estimates available!",
    url: "https://sovanoca.com",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp", // Replace with actual OG image path
        alt: "Sovanoca Construction Company North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovanoca - Trusted Construction Company in NC",
    description:
      "Looking for reliable construction services in North Carolina? Sovanoca delivers exceptional residential & commercial work. Get a quote now!",
    images: ["https://sovanoca.com/opengraph.webp"], // Replace with actual image
    creator: "@sovanoca_team", // Optional if you have a handle
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sovanoca - Construction Company North Carolina",
    "url": "https://sovanoca.com",
    "description":
      "Sovanoca is a full-service construction company serving North Carolina, offering residential and commercial building solutions, remodeling, and project management.",
    "publisher": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp"
      }
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Residential & Commercial Construction Services",
      "description": "From new builds to full remodels, Sovanoca provides end-to-end construction services tailored to your needs.",
      "provider": {
        "@type": "Organization",
        "name": "Sovanoca",
        "url": "https://sovanoca.com"
      },
      "areaServed": {
        "@type": "State",
        "name": "North Carolina"
      },
      "serviceType": "General Contracting & Construction",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://sovanoca.com/contact-us",
        "availableLanguage": ["English"]
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Carolina",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "infosovanoca@gmail.com",
      "url": "https://sovanoca.com/contact-us"
    },
    // "sameAs": [
    //   "https://www.instagram.com/sovanoca",  // Replace with real socials
    //   "https://x.com/sovanoca"
    // ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Home1 />
      <Home4 />
      <Home2 />
      <Home3 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
    </>
  );
}
