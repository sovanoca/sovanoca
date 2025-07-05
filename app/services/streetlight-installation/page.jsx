import Comp1 from "../../nopage/service/personalpage/streetlight-installation";
import Head from "next/head";

export const metadata = {
  title: "Streetlight Installation Services in North Carolina | Sovanoca",
  description:
    "Sovanoca provides expert streetlight installation services throughout North Carolina. From planning to setup, ensure your outdoor lighting is safe and efficient.",
  keywords: [
    "streetlight installation North Carolina",
    "outdoor lighting NC",
    "streetlight contractors NC",
    "public lighting installation",
    "commercial outdoor lighting NC",
    "Sovanoca streetlight services",
  ],
  alternates: {
    canonical: "/services/streetlight-installation",
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
    title: "Streetlight Installation Services in NC | Sovanoca",
    description:
      "Looking for reliable streetlight installation in North Carolina? Sovanoca offers professional lighting solutions for safety, visibility, and compliance.",
    url: "https://sovanoca.com/services/streetlight-installation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Streetlight Installation in North Carolina – Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streetlight Installation Services in NC | Sovanoca",
    description:
      "Ensure safe and efficient streetlight installation across North Carolina with Sovanoca. Get in touch for a free consultation today!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Streetlight Installation Services",
    "serviceType": "Streetlight Installation",
    "provider": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "North Carolina",
    },
    "description":
      "Sovanoca offers reliable streetlight installation services throughout North Carolina, enhancing safety and visibility for communities, businesses, and municipalities.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sovanoca.com/contact-us",
      "availableLanguage": ["English"],
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "infosovanoca@gmail.com",
      "url": "https://sovanoca.com/contact-us",
    },
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
