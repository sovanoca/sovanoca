import Comp1 from "../../nopage/service/personalpage/kitchen-remodeling";
import Head from "next/head";

export const metadata = {
  title: "Kitchen Remodeling Services in North Carolina | Sovanoca",
  description:
    "Upgrade your kitchen with Sovanoca’s professional kitchen remodeling services in North Carolina. Custom layouts, modern designs, and quality craftsmanship.",
  keywords: [
    "kitchen remodeling North Carolina",
    "kitchen renovation NC",
    "custom kitchen design NC",
    "remodeling contractor North Carolina",
    "kitchen makeover services",
    "Sovanoca kitchen remodeling",
  ],
  alternates: {
    canonical: "/services/kitchen-remodeling",
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
    title: "Kitchen Remodeling Services in NC | Sovanoca",
    description:
      "Transform your kitchen with expert remodeling services in North Carolina. Sovanoca offers modern designs, space optimization & full renovations.",
    url: "https://sovanoca.com/services/kitchen-remodeling",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Kitchen Remodeling Services North Carolina - Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodeling Services in NC | Sovanoca",
    description:
      "Looking to upgrade your kitchen in North Carolina? Sovanoca provides expert kitchen remodeling tailored to your vision and lifestyle. Free consultation available.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling Services",
    "serviceType": "Kitchen Remodeling; Renovation",
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
    "description": "Sovanoca offers expert kitchen remodeling services in North Carolina, including custom layouts, cabinetry upgrades, countertop installation, and full kitchen renovations.",
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
