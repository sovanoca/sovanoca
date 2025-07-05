import Project1 from "../nopage/project/project1";
import Head from "next/head";

export const metadata = {
  title: "Construction Projects in North Carolina | Sovanoca Portfolio",
  description:
    "View our completed construction projects across North Carolina. Sovanoca specializes in residential, commercial, and remodeling projects with quality craftsmanship.",
  keywords: [
    "construction projects North Carolina",
    "residential construction portfolio",
    "commercial building projects NC",
    "Sovanoca construction work",
    "project gallery",
    "construction company work samples",
  ],
  alternates: {
    canonical: "/projects",
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
    title: "Construction Projects in North Carolina | Sovanoca Portfolio",
    description:
      "Explore Sovanoca’s construction portfolio featuring completed residential and commercial projects across North Carolina. Proven results. Trusted quality.",
    url: "https://sovanoca.com/projects",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp",
        alt: "Sovanoca Completed Projects in North Carolina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovanoca - Completed Construction Projects in NC",
    description:
      "Browse through our portfolio of completed residential, commercial, and remodeling projects across North Carolina. Quality work by Sovanoca.",
    images: ["https://sovanoca.com/opengraph.webp"],
    creator: "@sovanoca_team",
  },
  metadataBase: new URL("https://sovanoca.com"),
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Construction Project Portfolio - Sovanoca",
    "description":
      "A portfolio of Sovanoca’s construction projects in North Carolina including residential homes, commercial buildings, and remodeling transformations.",
    "url": "https://sovanoca.com/projects",
    "publisher": {
      "@type": "Organization",
      "name": "Sovanoca",
      "url": "https://sovanoca.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sovanoca.com/opengraph.webp"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Completed Construction Projects",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Residential Construction",
          "url": "https://sovanoca.com/projects#residential"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Commercial Projects",
          "url": "https://sovanoca.com/projects#commercial"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Remodeling Work",
          "url": "https://sovanoca.com/projects#remodeling"
        }
      ]
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

      <Project1 />
    </>
  );
}
