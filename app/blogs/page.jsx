import Blog1 from "../nopage/blog/blog1"

export const metadata = {
    title: "Web Design & SEO Blog – Tips, Trends & Insights | Designuix",
    description:
        "Read expert articles from Designuix on web design, SEO, and digital growth. Stay ahead with actionable insights, tutorials, and strategies for building high-converting websites.",
    keywords: [
        "web design blog",
        "seo tips",
        "website development insights",
        "digital marketing blog",
        "web development articles",
        "website optimization",
        "seo for small businesses",
        "custom website blog",
        "Designuix blog",
        "web strategy tips",
        "Designuix",
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
    authors: [{ name: "Designuix", url: "https://designuix.com" }],
    creator: "Designuix",
    publisher: "Designuix",
    openGraph: {
        title: "Web Design & SEO Blog – Tips, Trends & Insights | Designuix",
        description:
            "Explore the Designuix blog for expert insights on web design, SEO, ecommerce, and digital growth strategies. Learn how to improve your online presence.",
        url: "https://designuix.com/blogs",
        siteName: "Designuix",
        images: [
            {
                url: "https://designuix.com/opengraph-designuix.png", // ✅ Replace with actual OG image
                alt: "Designuix Blog - Web Design & SEO Insights",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design & SEO Blog – Tips, Trends & Insights | Designuix",
        description:
            "Get practical tips and strategies from the Designuix team on web design, SEO, and online growth. Perfect for startups, founders, and marketers.",
        images: ["https://designuix.com/opengraph-designuix.png"], // ✅ Replace if you have a better blog OG image
        creator: "@designuix_team",
    },
    metadataBase: new URL("https://designuix.com"),
};



export default function Page(){
    return(
        <>
        <Blog1/>
        </>
    )
};