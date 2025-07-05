import Comp1 from "../../nopage/service/personalpage/electrical-upgrades";
import Head from "next/head";

export const metadata = {
  title: "Electrical Upgrades Services in North Carolina | Sovanoca",
  description:
    "Upgrade your home's electrical system with Sovanoca's expert services across North Carolina. From panel upgrades to rewiring, ensure safety and efficiency.",
  keywords: [
    "electrical upgrades North Carolina",
    "home electrical rewiring NC",
    "electrical panel upgrade North Carolina",
    "licensed electrician NC",
    "residential electrical upgrades",
    "Sovanoca electrical services",
  ],
  alternates: {
    canonical: "/services/electrical-upgrades",
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
    title: "Electrical Upgrades Services in NC | Sovanoca",
    description:
      "Reliable electrical upgrades and panel replacements in North Carolina. Sovanoca ensures your home meets modern safety and power standards.",
    url: "https://sovanoca.com/services/electrical-upgrades",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Electrical Upgrades Services by Sovanoca in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Upgrades Services in NC | Sovanoca",
    description:
      "Need electrical upgrades in North Carolina? Sovanoca offers expert rewiring, panel upgrades, and energy-efficient electrical solutions.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electrical Upgrades Services",
    "serviceType": "Electrical Panel Upgrade; Home Rewiring",
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
    "description": "Sovanoca offers licensed electrical upgrades services across North Carolina including panel replacements, rewiring, and safety inspections.",
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
