import Comp1 from "../../nopage/service/personalpage/architectural-and-interior-design-consulting";
import Head from "next/head";

export const metadata = {
  title: "Architectural & Interior Design Consulting in North Carolina | Sovanoca",
  description:
    "Sovanoca offers professional architectural and interior design consulting across North Carolina. From concept to execution, elevate your space with expert design guidance.",
  keywords: [
    "architectural consulting North Carolina",
    "interior design consulting NC",
    "architectural services NC",
    "interior design North Carolina",
    "Sovanoca design consulting",
    "NC architecture consultant",
  ],
  alternates: {
    canonical: "/services/architectural-interior-design-consulting",
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
    title: "Architectural & Interior Design Consulting in NC | Sovanoca",
    description:
      "Expert architectural & interior design consulting in North Carolina – from space planning to material selection. Contact Sovanoca to refine your vision.",
    url: "https://sovanoca.com/services/architectural-interior-design-consulting",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Architectural and Interior Design Consulting – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural & Interior Design Consulting in NC | Sovanoca",
    description:
      "Transform your project in North Carolina with expert architectural and interior design consulting from Sovanoca. Get your free consultation today!",
    images: ["https://sovanoca.com/opengraph.webp"],
    
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Architectural & Interior Design Consulting",
    "serviceType": "Architectural Design; Interior Design Consulting",
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
    "description": "Sovanoca provides expert architectural and interior design consulting services across North Carolina, including space planning, material selection, and project guidance.",
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
