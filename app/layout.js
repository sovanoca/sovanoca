import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/component/navbar";
import Footer from "./nopage/component/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sovanoca.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (GA4 + Google Ads) */}
        {/* Google tag (GA4 + Google Ads) */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-CBDFQD5190"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // Google Analytics
    gtag('config', 'G-CBDFQD5190');

    // Google Ads
    gtag('config', 'AW-17274749876');
  `}
</Script>

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="vintage">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
