import Comp1 from "../../nopage/service/personalpage/home-layout-alteration";
import Head from "next/head";

export const metadata = {
  title: "Home Layout Alteration Services in North Carolina | Sovanoca",
  description:
    "Sovanoca offers expert home layout alteration services across North Carolina. Reconfigure spaces for improved functionality and aesthetics with professional remodeling.",
  keywords: [
    "home layout alteration NC",
    "interior layout remodeling North Carolina",
    "space reconfiguration NC",
    "home renovation services North Carolina",
    "layout modification contractor",
    "Sovanoca home remodeling",
  ],
  alternates: {
    canonical: "/services/home-layout-alteration",
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
    title: "Home Layout Alteration Services in North Carolina | Sovanoca",
    description:
      "Maximize your home’s space and efficiency with expert layout alterations by Sovanoca. Serving North Carolina with customized remodeling solutions.",
    url: "https://sovanoca.com/services/home-layout-alteration",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Home Layout Alteration Services – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Layout Alteration in North Carolina | Sovanoca",
    description:
      "Need to change your home’s layout? Sovanoca provides professional layout alteration and remodeling services in North Carolina. Book a consultation today!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Layout Alteration Services",
    "serviceType": "Interior Remodeling; Layout Modification",
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
    "description": "Sovanoca specializes in home layout alterations across North Carolina, offering personalized remodeling services to improve space functionality and flow.",
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
