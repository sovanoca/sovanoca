import Comp1 from "../../nopage/service/personalpage/dental-clinic-daycare-renovation";
import Head from "next/head";

export const metadata = {
  title: "Dental Clinic & Daycare Renovation in North Carolina | Sovanoca",
  description:
    "Sovanoca offers specialized renovation services for dental clinics and daycare centers across North Carolina. Transform your professional space with expert design and remodeling solutions.",
  keywords: [
    "dental clinic renovation NC",
    "daycare renovation North Carolina",
    "clinic remodeling services",
    "daycare interior design NC",
    "commercial renovation NC",
    "Sovanoca renovation services",
  ],
  alternates: {
    canonical: "/services/dental-clinic-daycare-renovation",
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
    title: "Dental Clinic & Daycare Renovation in NC | Sovanoca",
    description:
      "Renovate your dental clinic or daycare center in North Carolina with Sovanoca’s expert design and construction services. Functionality meets aesthetics.",
    url: "https://sovanoca.com/services/dental-clinic-daycare-renovation",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Dental Clinic and Daycare Renovation – Sovanoca NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic & Daycare Renovation in NC | Sovanoca",
    description:
      "Upgrade your healthcare or childcare space with Sovanoca’s renovation services in North Carolina. Schedule a consultation today!",
    images: ["https://sovanoca.com/opengraph.webp"],
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dental Clinic & Daycare Renovation",
    "serviceType": "Renovation and Remodeling Services",
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
    "description": "Sovanoca provides expert renovation and interior redesign services for dental clinics and daycare centers across North Carolina, enhancing safety, comfort, and functionality.",
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
