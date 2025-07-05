import Comp1 from "../../nopage/service/personalpage/hvac-mini-split-installation";
import Head from "next/head";

export const metadata = {
  title: "HVAC Mini-Split Installation Services in North Carolina | Sovanoca",
  description:
    "Sovanoca provides expert HVAC mini-split installation services across North Carolina. Energy-efficient climate control solutions for homes and businesses.",
  keywords: [
    "HVAC mini-split installation North Carolina",
    "mini-split installation NC",
    "ductless AC install NC",
    "HVAC services North Carolina",
    "Sovanoca HVAC",
    "ductless heating and cooling NC",
  ],
  alternates: {
    canonical: "/services/hvac-mini-split-installation",
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
    title: "HVAC Mini-Split Installation in NC | Sovanoca",
    description:
      "Professional mini-split installation services for efficient home and office cooling in North Carolina. Contact Sovanoca for reliable HVAC solutions.",
    url: "https://sovanoca.com/services/hvac-mini-split-installation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "HVAC Mini-Split Installation – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Mini-Split Installation in NC | Sovanoca",
    description:
      "Get expert HVAC mini-split installation services in North Carolina. Ductless, energy-efficient, and perfectly installed by the Sovanoca team.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Mini-Split Installation",
    "serviceType": "Ductless Mini-Split HVAC Installation",
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
    "description": "Sovanoca offers professional HVAC mini-split installation services across North Carolina for efficient and ductless heating and cooling solutions.",
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
