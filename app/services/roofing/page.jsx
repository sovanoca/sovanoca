import Comp1 from "../../nopage/service/personalpage/roofing";
import Head from "next/head";

export const metadata = {
  title: "Residential Roofing Services in North Carolina | Sovanoca",
  description:
    "Sovanoca provides expert residential roofing services across North Carolina. From roof installation to repairs and inspections, trust our reliable roofing team.",
  keywords: [
    "residential roofing North Carolina",
    "roofing services NC",
    "roof installation North Carolina",
    "roof repair NC",
    "roof inspection services",
    "Sovanoca roofing contractor",
  ],
  alternates: {
    canonical: "/services/residential-roofing",
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
    title: "Residential Roofing Experts in NC | Sovanoca",
    description:
      "Protect your home with professional residential roofing services from Sovanoca. Serving North Carolina with installation, repairs, and inspections.",
    url: "https://sovanoca.com/services/residential-roofing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Residential Roofing Services – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Roofing Services in NC | Sovanoca",
    description:
      "Need roofing help in North Carolina? Sovanoca offers top-tier residential roofing services including repair, installation, and more. Request a free quote.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Roofing Services",
    "serviceType": "Roof Installation; Roof Repairs; Roof Inspections",
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
    "description": "Sovanoca delivers professional residential roofing services throughout North Carolina. Our team handles roof installation, inspection, and repair for all types of homes.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sovanoca.com/contact-us",
      "availableLanguage": ["English"]
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
      <Comp1 />
    </>
  );
}
