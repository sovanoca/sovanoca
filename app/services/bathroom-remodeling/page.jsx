import Comp1 from "../../nopage/service/personalpage/bathroom-remodeling";
import Head from "next/head";

export const metadata = {
  title: "Bathroom Remodeling Services in North Carolina | Sovanoca",
  description:
    "Upgrade your space with expert bathroom remodeling services by Sovanoca. Serving all of North Carolina with custom designs, quality finishes, and reliable execution.",
  keywords: [
    "bathroom remodeling North Carolina",
    "bathroom renovation NC",
    "bathroom contractors North Carolina",
    "custom bathroom design NC",
    "bathroom remodel Sovanoca",
    "remodeling company NC",
  ],
  alternates: {
    canonical: "/services/bathroom-remodeling",
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
    title: "Bathroom Remodeling Services in North Carolina | Sovanoca",
    description:
      "Sovanoca provides premium bathroom remodeling services in North Carolina—custom designs, top-tier materials, and flawless execution. Book your consultation today!",
    url: "https://sovanoca.com/services/bathroom-remodeling",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Bathroom Remodeling by Sovanoca in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Experts in North Carolina | Sovanoca",
    description:
      "Looking to transform your bathroom? Sovanoca delivers stylish, functional, and high-quality bathroom remodeling services across North Carolina.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Services",
    "serviceType": "Bathroom Renovation; Custom Bathroom Design",
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
    "description": "Sovanoca offers high-end bathroom remodeling services across North Carolina, including layout redesign, tile installation, fixtures upgrade, and complete renovation solutions.",
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
