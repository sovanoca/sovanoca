import Quoat1 from "../nopage/quoat/quoat1";
import Head from "next/head";

export const metadata = {
  title: "Get a Free Construction Quote | Sovanoca",
  description:
    "Request your free construction quote from Sovanoca. We offer personalized estimates for residential, commercial, and remodeling services in North Carolina.",
  keywords: [
    "free construction quote",
    "construction estimate North Carolina",
    "residential quote",
    "commercial construction quote",
    "remodeling quote NC",
    "get a construction quote",
    "Sovanoca quote form",
  ],
  alternates: {
    canonical: "/get-quote",
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
    title: "Get a Free Construction Quote | Sovanoca",
    description:
      "Fill out our form to receive a personalized quote for your construction project. Sovanoca serves residential and commercial clients across North Carolina.",
    url: "https://sovanoca.com/get-quote",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Free Construction Quote by Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Free Construction Estimate | Sovanoca",
    description:
      "Looking for a construction quote? Sovanoca provides fast, detailed estimates for residential and commercial projects in North Carolina.",
    images: ["https://sovanoca.com/opengraph.webp"],
    // creator: "@sovanoca_team",
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Get a Free Quote | Sovanoca",
    "url": "https://sovanoca.com/get-quote",
    "description":
      "Use our quote request form to get a personalized estimate for your residential or commercial construction project in North Carolina.",
    "publisher": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp"
      }
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Free Construction Quote",
      "description": "Personalized construction quotes for residential and commercial projects in North Carolina.",
      "provider": {
        "@type": "Organization",
        "name": "Sovanoca",
        "url": "https://sovanoca.com"
      },
      "areaServed": {
        "@type": "State",
        "name": "North Carolina"
      },
      "serviceType": "Quote Request",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://sovanoca.com/get-quote",
        "availableLanguage": ["English"]
      }
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

      <Quoat1 />
    </>
  );
}
