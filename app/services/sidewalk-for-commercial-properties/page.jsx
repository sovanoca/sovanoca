import Comp1 from "../../nopage/service/personalpage/sidewalk-for-commercial-properties";
import Head from "next/head";

export const metadata = {
  title: "Commercial Sidewalk Construction in North Carolina | Sovanoca",
  description:
    "Sovanoca offers expert commercial sidewalk construction across North Carolina. Durable, ADA-compliant pathways for businesses, complexes, and public spaces.",
  keywords: [
    "commercial sidewalk construction North Carolina",
    "sidewalk contractors NC",
    "ADA compliant sidewalks NC",
    "business property sidewalk construction",
    "concrete sidewalks NC",
    "Sovanoca sidewalk services",
  ],
  alternates: {
    canonical: "/services/sidewalk-for-commercial-properties",
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
    title: "Commercial Sidewalk Construction in NC | Sovanoca",
    description:
      "Reliable sidewalk construction for commercial properties across North Carolina. From layout to finish, Sovanoca ensures safety and durability.",
    url: "https://sovanoca.com/services/sidewalk-for-commercial-properties",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Commercial Sidewalk Construction – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Sidewalk Construction in NC | Sovanoca",
    description:
      "Need professional sidewalks for your commercial space in North Carolina? Sovanoca builds ADA-compliant, long-lasting pathways. Book a consultation today.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Sidewalk Construction",
    "serviceType": "Concrete Sidewalk Construction",
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
    "description": "Sovanoca specializes in commercial sidewalk construction services across North Carolina, delivering ADA-compliant and durable paths for all types of business properties.",
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
