import Blog1 from "../nopage/blog/blog1"

export const metadata = {
  title: "Construction Blog – Renovation Tips, Real Estate ROI & Strategy | Sovanoca",
  description:
    "Explore expert articles from Sovanoca on hotel renovations, residential remodeling, and construction ROI strategies in North Carolina. Stay informed and maximize your property value.",
  keywords: [
    "construction blog",
    "hotel renovation tips",
    "residential remodeling strategies",
    "real estate ROI North Carolina",
    "renovation insights",
    "contractor advice",
    "property value improvement",
    "North Carolina construction trends",
    "Sovanoca blog",
    "commercial renovation blog",
  ],
  alternates: {
    canonical: "/blogs",
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
    title: "Construction Blog – Renovation Tips, Real Estate ROI & Strategy | Sovanoca",
    description:
      "Get expert insights on hotel and residential renovations, North Carolina market dynamics, and maximizing ROI through strategic construction projects.",
    url: "https://sovanoca.com/blogs",
    siteName: "Sovanoca",
    images: [
      {
        url: "https://sovanoca.com/opengraph.webp", // Use your OG blog image
        alt: "Sovanoca Blog - Construction Insights and Renovation Strategy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Blog – Renovation Tips, Real Estate ROI & Strategy | Sovanoca",
    description:
      "Sovanoca shares renovation strategy, real estate tips, and expert construction insights tailored for property owners in North Carolina.",
    images: ["https://sovanoca.com/opengraph.webp"],
    creator: "@sovanoca_team",
  },
  metadataBase: new URL("https://sovanoca.com"),
};




export default function Page(){
    return(
        <>
        <Blog1/>
        </>
    )
};