import Comp1 from "../../nopage/service/personalpage/hotel-motel-renovation";
import Head from "next/head";

export const metadata = {
  title: "Hotel Renovation company in North Carolina | Sovanoca",
  description:
    "Upgrade your hospitality property with Sovanoca’s expert hotel renovation company in North Carolina. From interior makeovers to structural updates, we do it all.",
  keywords: [
    "hotel renovation companies nc",
    "hotel renovation contractors nc",
    "hotel renovation in north carolina",
    "hotel renovation North Carolina",
    "hotel remodeling services",
    "hotel renovation",
    "hotel renovation solutions",
    "hotel remodeling specialists",
    "hotel renovation services",
    "hotel remodeling",
    "hotel renovation specialists",
    "hotel remodeling companies"
  ],
  alternates: {
    canonical: "/services/hotel-motel-renovation",
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
    title: "Hotel Renovation company in North Carolina | Sovanoca",
    description:
      "Sovanoca offers professional hotel renovation services across North Carolina. Interior upgrades, exterior improvements, and full-scale remodeling available.",
    url: "https://sovanoca.com/services/hotel-motel-renovation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Hotel Renovation – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Renovation company in North Carolina | Sovanoca",
    description:
      "Renovate your hotel in North Carolina with Sovanoca’s expert construction and remodeling services. Start your hospitality upgrade today.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel Renovation Company",
    "serviceType": "Hospitality Renovation; Hotel Remodeling",
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
    "description": "Sovanoca delivers hotel and motel renovation services in North Carolina including interior remodeling, façade upgrades, and full property overhauls for hospitality businesses.",
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
