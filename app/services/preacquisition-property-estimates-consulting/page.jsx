import Comp1 from "../../nopage/service/personalpage/preacquisition-property-estimates-consulting";
import Head from "next/head";

export const metadata = {
  title: "Preacquisition Property Estimates & Consulting in North Carolina | Sovanoca",
  description:
    "Sovanoca offers preacquisition property estimates and real estate consulting across North Carolina. Make informed buying decisions with expert evaluations.",
  keywords: [
    "preacquisition property consulting NC",
    "property estimates North Carolina",
    "real estate consulting NC",
    "property evaluation North Carolina",
    "Sovanoca property services",
    "real estate advisory NC",
  ],
  alternates: {
    canonical: "/services/preacquisition-property-estimates-consulting",
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
    title: "Preacquisition Property Estimates & Consulting in NC | Sovanoca",
    description:
      "Get accurate preacquisition property estimates and consulting services in North Carolina. Sovanoca helps buyers make confident real estate decisions.",
    url: "https://sovanoca.com/services/preacquisition-property-estimates-consulting",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Preacquisition Property Estimates & Consulting – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preacquisition Property Estimates & Consulting in NC | Sovanoca",
    description:
      "Sovanoca provides expert preacquisition property estimates and real estate consulting in North Carolina. Get clarity before your next investment.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Preacquisition Property Estimates & Consulting",
    "serviceType": "Real Estate Consulting; Property Valuation",
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
    "description": "Sovanoca offers preacquisition property estimate and real estate consulting services throughout North Carolina, helping buyers assess property value before purchase.",
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
