import Quoat1 from "../nopage/quoat/quoat1";
import Head from "next/head";

export const metadata = {
  title: "Contact Us | Sovanoca Construction Company North Carolina",
  description:
    "Get in touch with Sovanoca for residential and commercial construction services in North Carolina. Request a free quote or consultation today.",
  keywords: [
    "contact construction company North Carolina",
    "construction quote NC",
    "free consultation construction",
    "Sovanoca contact",
    "construction services NC",
    "residential contractor contact",
    "commercial construction inquiry",
  ],
  alternates: {
    canonical: "/contact-us",
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
    title: "Contact Sovanoca | Construction Company in North Carolina",
    description:
      "Need residential or commercial construction services in NC? Contact Sovanoca for a free quote and expert consultation.",
    url: "https://sovanoca.com/contact-us",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Contact Sovanoca Construction Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Construction Quote | Contact Sovanoca",
    description:
      "Sovanoca offers expert residential and commercial construction in NC. Reach out to request a quote or project consultation.",
    images: ["https://sovanoca.com/opengraph.webp"],
    // creator: "@sovanoca_team",
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Sovanoca",
    "url": "https://sovanoca.com/contact-us",
    "description": "Contact Sovanoca for professional construction services in North Carolina. We handle residential, commercial, and remodeling projects.",
    "publisher": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
    //   "telephone": "+1-XXX-XXX-XXXX", // Replace with your actual number
      "email": "infosovanoca@gmail.com",
      "url": "https://sovanoca.com/contact-us",
      "areaServed": "North Carolina",
      "availableLanguage": ["English"]
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

      <Quoat1 />
    </>
  );
}
