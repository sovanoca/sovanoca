import Comp1 from "../../nopage/service/personalpage/waterproofing";
import Head from "next/head";

export const metadata = {
  title: "Waterproofing Services in North Carolina | Sovanoca",
  description:
    "Protect your property with Sovanoca’s expert waterproofing services in North Carolina. We prevent leaks, mold, and structural damage with proven solutions.",
  keywords: [
    "waterproofing services North Carolina",
    "basement waterproofing NC",
    "roof waterproofing North Carolina",
    "leak prevention NC",
    "waterproofing contractors NC",
    "Sovanoca waterproofing",
  ],
  alternates: {
    canonical: "/services/waterproofing",
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
    title: "Waterproofing Services in North Carolina | Sovanoca",
    description:
      "Sovanoca provides reliable waterproofing solutions in North Carolina to protect homes and buildings from water damage. Get a free quote today!",
    url: "https://sovanoca.com/services/waterproofing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Waterproofing Services in North Carolina – Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing Services in North Carolina | Sovanoca",
    description:
      "Need waterproofing in North Carolina? Sovanoca prevents leaks and moisture damage with professional solutions. Request your consultation now!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Waterproofing Services",
    "serviceType": "Residential & Commercial Waterproofing",
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
    "description": "Sovanoca offers comprehensive waterproofing services across North Carolina, including basement, roof, and exterior waterproofing to protect against moisture, leaks, and structural damage.",
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
