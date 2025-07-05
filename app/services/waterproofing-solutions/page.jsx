import Comp1 from "../../nopage/service/personalpage/waterproofing-solutions";
import Head from "next/head";

export const metadata = {
  title: "Residential Waterproofing Services in North Carolina | Sovanoca",
  description:
    "Protect your home from water damage with Sovanoca’s expert residential waterproofing services across North Carolina. Basement, foundation, and roof waterproofing by professionals.",
  keywords: [
    "residential waterproofing North Carolina",
    "waterproofing services NC",
    "basement waterproofing North Carolina",
    "foundation waterproofing NC",
    "roof waterproofing NC",
    "Sovanoca waterproofing",
  ],
  alternates: {
    canonical: "/services/waterproofing-solutions",
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
    title: "Residential Waterproofing Services in NC | Sovanoca",
    description:
      "Get reliable waterproofing for basements, roofs, and foundations in North Carolina. Sovanoca ensures long-lasting protection from leaks and moisture damage.",
    url: "https://sovanoca.com/services/residential-waterproofing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Residential Waterproofing by Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Waterproofing Services in NC | Sovanoca",
    description:
      "Sovanoca offers trusted residential waterproofing in North Carolina. Prevent water damage with expert solutions for basements, roofs & foundations.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Waterproofing Services",
    "serviceType": "Basement Waterproofing; Roof Waterproofing; Foundation Waterproofing",
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
    "description": "Sovanoca provides professional residential waterproofing services throughout North Carolina. We specialize in protecting basements, foundations, and roofs from moisture damage.",
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
