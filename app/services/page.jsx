import Service1 from "../nopage/service/service1";
import Service2 from "../nopage/service/service2";
import Head from "next/head";

export const metadata = {
  title: "Construction Services in North Carolina | Sovanoca",
  description:
    "Explore Sovanoca's residential and commercial construction services across North Carolina. From new builds to remodeling — quality guaranteed.",
  keywords: [
    "construction services North Carolina",
    "residential construction NC",
    "commercial construction NC",
    "remodeling services North Carolina",
    "general contracting NC",
    "Sovanoca construction services",
  ],
  alternates: {
    canonical: "/services",
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
    title: "Construction Services in North Carolina | Sovanoca",
    description:
      "Sovanoca offers expert construction services including residential builds, commercial projects, and remodeling in North Carolina. Contact us today!",
    url: "https://sovanoca.com/services",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Construction Services by Sovanoca in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovanoca - Professional Construction Services in NC",
    description:
      "Need expert construction services in North Carolina? Sovanoca provides top-tier residential and commercial solutions. Get your free estimate today.",
    images: ["https://sovanoca.com/opengraph.webp"],
    creator: "@sovanoca_team",
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Services",
    "serviceType": "Residential and Commercial Construction",
    "provider": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "North Carolina"
    },
    "description": "Sovanoca offers residential and commercial construction services including new builds, remodeling, and full project management in North Carolina.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sovanoca.com/contact-us",
      "availableLanguage": ["English"]
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
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Service1 />
      <Service2 />
    </>
  );
}
