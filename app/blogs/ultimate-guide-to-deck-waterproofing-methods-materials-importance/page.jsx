import Blog from "../../nopage/blog/ultimate-guide-to-deck-waterproofing-methods-materials-importance";
import Head from "next/head";

export const metadata = {
    title: "Deck Waterproofing Ultimate Guide: Methods, Materials, and Why It's Crucial",
    description:
        "Learn everything about deck waterproofing — the best methods, materials, and why it's essential to protect your outdoor spaces from leaks, rot, and long-term damage.",
    keywords: [
        "deck waterproofing",
        "deck waterproofing services Greensboro",
        "deck waterproofing Greensboro",
        "best deck waterproofing methods",
        "deck waterproofing materials",
        "waterproof outdoor deck",
        "deck leak prevention",
        "deck protection solutions",
        "Sovanoca deck waterproofing",
    ],
    alternates: {
        canonical: "/blogs/ultimate-guide-to-deck-waterproofing-methods-materials-importance",
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
        title: "Deck Waterproofing Ultimate Guide: Methods, Materials, and Why It's Crucial",
        description:
            "Discover the ultimate guide to deck waterproofing — proven methods, the right materials, and why waterproofing is crucial for protecting your outdoor investment.",
        url: "https://sovanoca.com/blogs/ultimate-guide-to-deck-waterproofing-methods-materials-importance",
        siteName: "Sovanoca",
        images: [
            {
                url: "https://sovanoca.com/ultimate-guide-to-deck-waterproofing.webp",
                width: 1200,
                height: 630,
                alt: "Deck waterproofing methods and materials",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Deck Waterproofing Ultimate Guide: Methods, Materials, and Why It's Crucial",
        description:
            "Explore methods, materials, and reasons why deck waterproofing is essential. Protect your deck from leaks, mold, and long-term damage.",
        images: ["https://sovanoca.com/ultimate-guide-to-deck-waterproofing.webp"],
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
            "@id": "https://sovanoca.com/blogs/ultimate-guide-to-deck-waterproofing-methods-materials-importance"
        },
        "headline": "The Ultimate Guide to Deck Waterproofing: Methods, Materials, and Why It's Crucial",
        "description": "Learn everything about deck waterproofing — the best methods, materials, and why it's essential to protect your outdoor spaces from leaks, rot, and long-term damage.",
        "image": "https://sovanoca.com/ultimate-guide-to-deck-waterproofing.webp",
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
        "datePublished": "2025-08-24",
        "dateModified": "2025-08-24",
        "keywords": [
            "deck waterproofing",
            "deck waterproofing services Greensboro",
            "deck waterproofing Greensboro",
            "best deck waterproofing methods",
            "deck waterproofing materials",
            "waterproof outdoor deck",
            "deck leak prevention",
            "deck protection solutions",
            "Sovanoca deck waterproofing"
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
