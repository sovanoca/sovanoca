import Comp1 from "../../nopage/service/personalpage/interior-exterior-painting";
import Head from "next/head";

export const metadata = {
  title: "Interior & Exterior Painting Services in North Carolina | Sovanoca",
  description:
    "Get professional interior and exterior painting services in North Carolina with Sovanoca. High-quality finishes, expert color consultation, and long-lasting results.",
  keywords: [
    "interior painting services North Carolina",
    "exterior painting contractors NC",
    "house painting NC",
    "residential painting North Carolina",
    "commercial painting services NC",
    "Sovanoca painting contractors",
  ],
  alternates: {
    canonical: "/services/interior-exterior-painting",
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
    title: "Interior & Exterior Painting Services in NC | Sovanoca",
    description:
      "Transform your home or commercial property with expert interior and exterior painting services from Sovanoca in North Carolina. Get a free quote today!",
    url: "https://sovanoca.com/services/interior-exterior-painting",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Interior and Exterior Painting Services – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior & Exterior Painting in North Carolina | Sovanoca",
    description:
      "Reliable interior & exterior painting for homes and businesses across North Carolina. Contact Sovanoca for long-lasting, professional paint solutions.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior & Exterior Painting Services",
    "serviceType": "Painting Services",
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
    "description": "Sovanoca provides professional interior and exterior painting services across North Carolina, specializing in residential and commercial properties with durable and aesthetic finishes.",
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
