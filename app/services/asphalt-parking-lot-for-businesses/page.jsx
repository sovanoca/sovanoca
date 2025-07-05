import Comp1 from "../../nopage/service/personalpage/asphalt-parking-lot-for-businesses";
import Head from "next/head";

export const metadata = {
  title: "Asphalt Parking Lot Services for North Carolina Businesses | Sovanoca",
  description:
    "Sovanoca offers durable and professionally paved asphalt parking lots for businesses across North Carolina. Improve curb appeal, safety, and functionality today.",
  keywords: [
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
    title: "Asphalt Parking Lot Services for NC Businesses | Sovanoca",
    description:
      "Reliable asphalt parking lot services for businesses across North Carolina. Paving, resurfacing & maintenance. Contact Sovanoca for a free quote.",
    url: "https://sovanoca.com/services/asphalt-parking-lot-for-businesses",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Asphalt Parking Lot Paving – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Parking Lot Services for NC Businesses | Sovanoca",
    description:
      "Need a durable asphalt parking lot for your business in NC? Sovanoca provides expert commercial paving services tailored to your needs.",
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
