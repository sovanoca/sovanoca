import Comp1 from "../../nopage/service/personalpage/driveway-paving-resurfacing";
import Head from "next/head";

export const metadata = {
  title: "Driveway Paving & Resurfacing Services in North Carolina | Sovanoca",
  description:
    "Sovanoca offers professional driveway paving and resurfacing services across North Carolina. Enhance curb appeal and durability with expert solutions.",
  keywords: [
    "driveway paving North Carolina",
    "driveway resurfacing NC",
    "paving services North Carolina",
    "residential driveway contractors NC",
    "Sovanoca driveway repair",
    "asphalt driveway NC",
  ],
  alternates: {
    canonical: "/services/driveway-paving-resurfacing",
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
    title: "Driveway Paving & Resurfacing in NC | Sovanoca",
    description:
      "Upgrade your property's exterior with Sovanoca's expert driveway paving and resurfacing in North Carolina. Get long-lasting results at affordable rates.",
    url: "https://sovanoca.com/services/driveway-paving-resurfacing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Driveway Paving and Resurfacing by Sovanoca in NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway Paving & Resurfacing Services in NC | Sovanoca",
    description:
      "Need a new driveway or repair? Sovanoca delivers professional driveway paving and resurfacing across North Carolina. Free consultations available.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Driveway Paving & Resurfacing Services",
    "serviceType": "Driveway Paving; Driveway Resurfacing",
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
    "description": "Sovanoca provides reliable driveway paving and resurfacing services in North Carolina using durable materials and professional techniques to ensure lasting results.",
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
