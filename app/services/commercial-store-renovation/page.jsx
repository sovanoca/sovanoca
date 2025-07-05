import Comp1 from "../../nopage/service/personalpage/commercial-store-renovation";
import Head from "next/head";

export const metadata = {
  title: "Commercial Store Renovation Services in North Carolina | Sovanoca",
  description:
    "Sovanoca offers expert commercial store renovation services throughout North Carolina. Upgrade your retail space with professional planning, design, and execution.",
  keywords: [
    "commercial store renovation NC",
    "retail renovation North Carolina",
    "store remodeling services",
    "commercial interior renovation",
    "Sovanoca renovation services",
    "North Carolina commercial contractors",
  ],
  alternates: {
    canonical: "/services/commercial-store-renovation",
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
    title: "Commercial Store Renovation Services in NC | Sovanoca",
    description:
      "Revamp your retail business with Sovanoca's commercial store renovation services across North Carolina. Design, build, and deliver with confidence.",
    url: "https://sovanoca.com/services/commercial-store-renovation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Commercial Store Renovation - Sovanoca North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Store Renovation Services in NC | Sovanoca",
    description:
      "Upgrade your retail space in North Carolina with Sovanoca's expert commercial renovation services. Schedule a consultation today.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Store Renovation",
    "serviceType": "Retail Space Renovation; Commercial Store Remodeling",
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
    "description": "Sovanoca provides professional commercial store renovation services in North Carolina. We help businesses modernize and reimagine their retail spaces with design-driven solutions.",
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
