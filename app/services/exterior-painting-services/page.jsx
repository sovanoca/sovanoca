import Comp1 from "../../nopage/service/personalpage/exterior-painting-services";
import Head from "next/head";

export const metadata = {
  title: "Commercial Exterior Painting Services in North Carolina | Sovanoca",
  description:
    "Boost your property’s curb appeal with Sovanoca’s professional commercial exterior painting services across North Carolina. Durable finishes. Expert crews. Free estimates.",
  keywords: [
    "commercial exterior painting North Carolina",
    "professional painting services NC",
    "exterior painting contractors NC",
    "building painting North Carolina",
    "Sovanoca painting services",
    "commercial painters NC"
  ],
  alternates: {
    canonical: "/services/exterior-painting-services",
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
    title: "Commercial Exterior Painting Services in NC | Sovanoca",
    description:
      "Sovanoca offers top-tier commercial exterior painting services in North Carolina — long-lasting results, weatherproof coatings, and professional finish guaranteed.",
    url: "https://sovanoca.com/services/exterior-painting-services",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Commercial Exterior Painting Services by Sovanoca in NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Exterior Painting Services in NC | Sovanoca",
    description:
      "Reliable commercial exterior painting services across North Carolina by Sovanoca. High-performance coatings, experienced painters, and excellent results.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Exterior Painting Services",
    "serviceType": "Exterior Painting; Commercial Painting",
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
    "description": "Sovanoca provides professional commercial exterior painting services in North Carolina, including high-durability finishes, weather-resistant coatings, and expert crews.",
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
