import Comp1 from "../../nopage/service/personalpage/basement-remodeling";
import Head from "next/head";

export const metadata = {
  title: "Basement Remodeling Services in North Carolina | Sovanoca",
  description:
    "Transform your basement with Sovanoca’s expert remodeling services in North Carolina. From design to completion, we turn unused spaces into functional living areas.",
  keywords: [
    "basement remodeling North Carolina",
    "basement finishing NC",
    "basement renovation services",
    "home remodeling NC",
    "Sovanoca basement services",
    "basement upgrades North Carolina",
  ],
  alternates: {
    canonical: "/services/basement-remodeling",
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
    title: "Basement Remodeling Services in NC | Sovanoca",
    description:
      "Professional basement remodeling in North Carolina. Sovanoca converts basements into livable, stylish spaces. Contact us for a free quote.",
    url: "https://sovanoca.com/services/basement-remodeling",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Basement Remodeling by Sovanoca in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basement Remodeling in North Carolina | Sovanoca",
    description:
      "Upgrade your basement with Sovanoca's expert remodeling services in NC. Custom designs, added value. Free consultation available.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Remodeling Services",
    "serviceType": "Basement Remodeling and Finishing",
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
    "description": "Sovanoca offers expert basement remodeling services across North Carolina, including layout design, waterproofing, finishing, and custom construction to enhance living space.",
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
