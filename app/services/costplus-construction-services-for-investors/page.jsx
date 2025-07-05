import Comp1 from "../../nopage/service/personalpage/costplus-construction-services-for-investors";
import Head from "next/head";

export const metadata = {
  title: "Cost-Plus Construction Services for Investors in North Carolina | Sovanoca",
  description:
    "Sovanoca offers transparent cost-plus construction services for real estate investors across North Carolina—maximize ROI with flexible, scalable building solutions.",
  keywords: [
    "cost-plus construction North Carolina",
    "construction for investors NC",
    "real estate investor services NC",
    "construction management North Carolina",
    "Sovanoca cost-plus building",
    "transparent construction pricing NC",
  ],
  alternates: {
    canonical: "/services/costplus-construction-services-for-investors",
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
    title: "Cost-Plus Construction for Real Estate Investors in NC | Sovanoca",
    description:
      "Partner with Sovanoca for cost-plus construction services in North Carolina tailored for real estate investors. Transparent pricing, full control, scalable growth.",
    url: "https://sovanoca.com/services/costplus-construction-services-for-investors",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Cost-Plus Construction Services for Investors – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost-Plus Construction Services in NC | Real Estate Investors | Sovanoca",
    description:
      "Sovanoca delivers cost-plus construction services for investors in North Carolina. Transparent billing, flexible execution, and proven construction expertise.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cost-Plus Construction for Real Estate Investors",
    "serviceType": "Cost-Plus Construction; Investor Construction Services",
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
    "description": "Sovanoca provides cost-plus construction services for real estate investors across North Carolina, offering transparent pricing, control over materials, and scalable project support.",
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
