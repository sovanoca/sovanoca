import Comp1 from "../../nopage/service/personalpage/hotel-motel-renovation";
import Head from "next/head";

export const metadata = {
  title: "Hotel & Motel Renovation Services in North Carolina | Sovanoca",
  description:
    "Upgrade your hospitality property with Sovanoca’s expert hotel & motel renovation services in North Carolina. From interior makeovers to structural updates, we do it all.",
  keywords: [
    "hotel renovation North Carolina",
    "motel renovation services NC",
    "hospitality renovation contractor NC",
    "hotel remodeling North Carolina",
    "motel upgrades NC",
    "Sovanoca hotel services",
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
    title: "Hotel & Motel Renovation Services in NC | Sovanoca",
    description:
      "Sovanoca offers professional hotel and motel renovation services across North Carolina. Interior upgrades, exterior improvements, and full-scale remodeling available.",
    url: "https://sovanoca.com/services/hotel-motel-renovation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Hotel & Motel Renovation – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel & Motel Renovation Services in NC | Sovanoca",
    description:
      "Renovate your hotel or motel in North Carolina with Sovanoca’s expert construction and remodeling services. Start your hospitality upgrade today.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel & Motel Renovation Services",
    "serviceType": "Hospitality Renovation; Hotel and Motel Remodeling",
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
