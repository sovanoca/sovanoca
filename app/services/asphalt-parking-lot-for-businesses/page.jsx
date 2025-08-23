import Comp1 from "../../nopage/service/personalpage/asphalt-parking-lot-for-businesses";
import Head from "next/head";

export const metadata = {
  title: "Commercial Parking Lot Installation | Sovanoca",
  description:
    "Sovanoca provides expert commercial parking lot installation tailored to your business needs. Work with affordable parking lot contractors in North Carolina to get durable, high-quality asphalt without breaking your budget.",
  keywords: [
    "commercial parking lot installation",
    "affordable parking lot contractors",
    "asphalt parking lot North Carolina",
    "commercial asphalt paving NC",
    "business parking lot installation",
    "asphalt contractors NC",
    "parking lot paving company North Carolina",
    "Sovanoca asphalt services",
  ],
  alternates: {
    canonical: "/services/asphalt-parking-lot-for-businesses",
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
    title: "Commercial Parking Lot Installation | Sovanoca",
    description:
      "Get professional commercial parking lot installation from affordable parking lot contractors in North Carolina. Durable, safe, and cost-effective asphalt solutions for businesses of all sizes.",
    url: "https://sovanoca.com/services/asphalt-parking-lot-for-businesses",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Commercial Parking Lot Installation – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Parking Lot Installation | Sovanoca",
    description:
      "Looking for commercial parking lot installation? Our affordable parking lot contractors in North Carolina deliver durable, high-quality asphalt parking lots that meet your budget and needs.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};


export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Asphalt Parking Lot Installation & Maintenance",
    "serviceType": "Asphalt Paving; Commercial Parking Lot Services",
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
    "description": "Sovanoca installs and maintains high-quality asphalt parking lots for businesses across North Carolina, offering paving, resurfacing, and repair solutions.",
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
