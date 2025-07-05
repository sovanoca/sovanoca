import Comp1 from "../../nopage/service/personalpage/multifamily-renovation";
import Head from "next/head";

export const metadata = {
  title: "Multifamily Renovation Services in North Carolina | Sovanoca",
  description:
    "Upgrade your property with Sovanoca’s expert multifamily renovation services in North Carolina. We handle everything from exterior facelifts to full-unit remodels.",
  keywords: [
    "multifamily renovation North Carolina",
    "apartment renovation NC",
    "building renovation services",
    "multifamily remodeling contractor",
    "exterior and interior renovation NC",
    "Sovanoca renovation services",
  ],
  alternates: {
    canonical: "/services/multifamily-renovation",
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
    title: "Multifamily Renovation Services in NC | Sovanoca",
    description:
      "Sovanoca specializes in multifamily renovation services across North Carolina — revitalizing apartment buildings, condos, and more with expert design and construction.",
    url: "https://sovanoca.com/services/multifamily-renovation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Multifamily Renovation Project by Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multifamily Renovation Services in NC | Sovanoca",
    description:
      "Enhance your multifamily property with Sovanoca's renovation services in North Carolina. Interior, exterior, and full building upgrades done right.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Multifamily Renovation Services",
    "serviceType": "Renovation & Remodeling",
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
    "description": "Sovanoca provides expert multifamily renovation services in North Carolina, including full-unit remodels, common area upgrades, exterior improvements, and modern design implementation.",
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
