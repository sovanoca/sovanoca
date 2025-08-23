import Comp1 from "../../nopage/service/personalpage/waterproofing";
import Head from "next/head";

export const metadata = {
  title: "Deck Waterproofing Services in Greensboro | Sovanoca",
  description:
    "Sovanoca offers professional deck waterproofing services in Greensboro to protect your decks from leaks, moisture, and damage. Get a free quote today!",
  keywords: [
    "deck waterproofing services Greensboro",
    "deck waterproofing Greensboro",
    "waterproofing services North Carolina",
    "basement waterproofing NC",
    "roof waterproofing North Carolina",
    "leak prevention NC",
    "waterproofing contractors NC",
    "Sovanoca waterproofing",
  ],
  alternates: {
    canonical: "/services/waterproofing",
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
    title: "Deck Waterproofing Services in Greensboro | Sovanoca",
    description:
      "Protect your deck with Sovanoca’s expert deck waterproofing services in Greensboro. Prevent leaks, moisture, and damage with our professional solutions.",
    url: "https://sovanoca.com/services/waterproofing",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Deck Waterproofing Services in Greensboro – Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Waterproofing Services in Greensboro | Sovanoca",
    description:
      "Looking for deck waterproofing in Greensboro? Sovanoca prevents leaks and moisture damage with expert solutions. Request your consultation now!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};


export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Waterproofing Services",
    "serviceType": "Residential & Commercial Waterproofing",
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
    "description": "Sovanoca offers comprehensive waterproofing services across North Carolina, including basement, roof, and exterior waterproofing to protect against moisture, leaks, and structural damage.",
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
