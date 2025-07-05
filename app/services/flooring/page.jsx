import Comp1 from "../../nopage/service/personalpage/flooring";
import Head from "next/head";

export const metadata = {
  title: "Flooring Services in North Carolina | Sovanoca",
  description:
    "Sovanoca provides professional flooring services across North Carolina. From hardwood to tile, trust us for expert installation and premium finishes.",
  keywords: [
    "flooring services North Carolina",
    "hardwood flooring NC",
    "tile flooring NC",
    "floor installation North Carolina",
    "residential flooring NC",
    "commercial flooring contractor NC",
    "Sovanoca flooring services",
  ],
  alternates: {
    canonical: "/services/flooring",
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
    title: "Flooring Services in North Carolina | Sovanoca",
    description:
      "Upgrade your space with expert flooring services by Sovanoca. We offer hardwood, tile, vinyl, and laminate flooring across North Carolina.",
    url: "https://sovanoca.com/services/flooring",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Flooring Installation and Services – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Services in North Carolina | Sovanoca",
    description:
      "Looking for quality flooring in North Carolina? Sovanoca offers expert installation of hardwood, tile, vinyl & more. Contact us today!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Services",
    "serviceType": "Hardwood, Tile, Vinyl, Laminate Flooring Installation",
    "provider": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "North Carolina",
    },
    "description":
      "Sovanoca offers professional flooring services including hardwood, tile, vinyl, and laminate installation across North Carolina for residential and commercial projects.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sovanoca.com/contact-us",
      "availableLanguage": ["English"],
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "infosovanoca@gmail.com",
      "url": "https://sovanoca.com/contact-us",
    },
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
