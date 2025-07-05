import Comp1 from "../../nopage/service/personalpage/landscaping-and-hardscaping";
import Head from "next/head";

export const metadata = {
  title: "Landscaping & Hardscaping Services in North Carolina | Sovanoca",
  description:
    "Transform your outdoor spaces with Sovanoca's expert landscaping and hardscaping services across North Carolina. We design and build beautiful, functional landscapes.",
  keywords: [
    "landscaping services North Carolina",
    "hardscaping NC",
    "landscape design North Carolina",
    "outdoor living spaces NC",
    "garden design North Carolina",
    "patio and walkway installation NC",
    "Sovanoca landscaping and hardscaping",
  ],
  alternates: {
    canonical: "/services/landscaping-hardscaping",
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
    title: "Landscaping & Hardscaping Services in NC | Sovanoca",
    description:
      "Professional landscaping & hardscaping services in North Carolina. From patios to retaining walls, Sovanoca brings your outdoor vision to life.",
    url: "https://sovanoca.com/services/landscaping-hardscaping",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Landscaping and Hardscaping Services – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping & Hardscaping in NC | Sovanoca",
    description:
      "Boost curb appeal with expert landscaping & hardscaping from Sovanoca. Serving all of North Carolina. Free consultation available!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscaping & Hardscaping Services",
    "serviceType": "Landscaping Design; Hardscaping Installation",
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
    "description": "Sovanoca offers landscaping and hardscaping services across North Carolina. Our team specializes in lawn design, patio installation, retaining walls, and outdoor living enhancements.",
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
