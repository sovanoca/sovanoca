import Blog from "../../nopage/blog/how-much-does-it-cost-to-renovate-a-house-in-nc";
import Head from "next/head";

export const metadata = {
    title: "How Much Does It Cost to Renovate a House in North Carolina? (2025 Guide)",
    description:
        "Discover the average home renovation costs in North Carolina for 2025. Learn about pricing by room, square footage, and materials — plus smart budgeting tips for homeowners.",
    keywords: [
        "house renovation cost North Carolina",
        "home remodeling NC",
        "North Carolina renovation prices",
        "average home renovation cost NC",
        "bathroom remodel cost NC",
        "kitchen renovation cost NC",
        "home improvement North Carolina",
        "cost to renovate a house NC",
        "Sovanoca construction",
        "home renovation contractor NC"
    ],
    alternates: {
        canonical: "/blogs/how-much-does-it-cost-to-renovate-a-house-in-nc",
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
        title: "How Much Does It Cost to Renovate a House in North Carolina? (2025 Guide)",
        description:
            "A complete guide to house renovation costs in North Carolina — from kitchen and bathroom remodels to full home renovations. Plan your budget smartly with expert insights.",
        url: "https://sovanoca.com/blogs/how-much-does-it-cost-to-renovate-a-house-in-nc",
        siteName: "Sovanoca",
        images: [
            {
                url: "https://sovanoca.com/how-much-does-it-cost-to-renovate-a-house-in-nc.webp",
                width: 1200,
                height: 630,
                alt: "North Carolina home renovation cost guide",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How Much Does It Cost to Renovate a House in North Carolina? (2025 Guide)",
        description:
            "Explore real home renovation costs in North Carolina. Get insights into room-wise pricing, materials, and budget planning for homeowners.",
        images: ["https://sovanoca.com/how-much-does-it-cost-to-renovate-a-house-in-nc.webp"],
        creator: "@sovanoca_team",
    },
    metadataBase: new URL("https://sovanoca.com"),
};

export default function Page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://sovanoca.com/blogs/how-much-does-it-cost-to-renovate-a-house-in-nc"
        },
        "headline": "How Much Does It Cost to Renovate a House in North Carolina? (2025 Guide)",
        "description": "Discover the average cost to renovate a house in North Carolina for 2025, including room-specific costs and smart budgeting insights.",
        "image": "https://sovanoca.com/how-much-does-it-cost-to-renovate-a-house-in-nc.webp",
        "author": {
            "@type": "Organization",
            "name": "Sovanoca",
            "url": "https://sovanoca.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sovanoca",
            "url": "https://sovanoca.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sovanoca.com/opengraph.webp"
            }
        },
        "datePublished": "2025-10-18",
        "dateModified": "2025-10-18",
        "keywords": [
            "house renovation cost North Carolina",
            "home remodeling NC",
            "North Carolina renovation prices",
            "average home renovation cost NC",
            "bathroom remodel cost NC",
            "kitchen renovation cost NC",
            "home improvement North Carolina",
            "cost to renovate a house NC",
            "Sovanoca construction",
            "home renovation contractor NC"
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <Blog />
        </>
    );
}
