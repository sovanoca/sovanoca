import Comp1 from "../../nopage/service/personalpage/backyard-patio";
import Head from "next/head";

export const metadata = {
  title: "Backyard Patio Services in North Carolina | Sovanoca",
  description:
    "Sovanoca offers expert backyard patio design and installation services across North Carolina. Create stunning outdoor spaces with our custom patio solutions.",
  keywords: [
    "backyard patio North Carolina",
    "patio installation NC",
    "outdoor patio design North Carolina",
    "custom patios NC",
    "backyard remodeling NC",
    "Sovanoca patio services",
  ],
  alternates: {
    canonical: "/services/backyard-patio",
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
    title: "Backyard Patio Services in North Carolina | Sovanoca",
    description:
      "Transform your backyard with premium patio design and installation services by Sovanoca in North Carolina. Get a free consultation today!",
    url: "https://sovanoca.com/services/backyard-patio",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Backyard Patio Services North Carolina – Sovanoca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Patio Experts in North Carolina | Sovanoca",
    description:
      "Sovanoca delivers professional backyard patio design and build services in North Carolina. Upgrade your outdoor living space with us today.",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Backyard Patio Services",
    "serviceType": "Outdoor Patio Design and Installation",
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
    "description":
      "Professional backyard patio services in North Carolina including custom design, material selection, and expert installation by Sovanoca.",
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
