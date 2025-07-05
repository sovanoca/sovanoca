import Comp1 from "../../nopage/service/personalpage/commercial-roofing";
import Head from "next/head";

export const metadata = {
  title: "Commercial Roofing Services in North Carolina | Sovanoca",
  description:
    "Protect your business with Sovanoca's commercial roofing services in North Carolina. From flat roofs to metal systems, we offer reliable roofing solutions tailored to your building.",
  keywords: [
    "commercial roofing North Carolina",
    "flat roofing NC",
    "metal roofing contractor NC",
    "roofing services for businesses",
    "industrial roofing NC",
    "Sovanoca roofing company",
    "roof installation North Carolina",
  ],
  alternates: {
    canonical: "/services/commercial-roofing",
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
    title: "Commercial Roofing Services in North Carolina | Sovanoca",
    description:
      "Sovanoca offers expert commercial roofing services across NC, including installation, inspection, and repair for flat, metal, and low-slope roofs. Get a free quote today.",
    url: "https://sovanoca.com/services/commercial-roofing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Commercial Roofing Services North Carolina – Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Roofing Services in NC | Sovanoca",
    description:
      "Secure and durable commercial roofing solutions in North Carolina. Sovanoca specializes in flat, metal, and custom roofing systems for businesses. Free inspection available.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Roofing Services",
    "serviceType": "Roofing Contractor – Commercial",
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
    "description": "Sovanoca provides trusted commercial roofing services in North Carolina, including roof installations, inspections, replacements, and repairs tailored to business properties.",
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
