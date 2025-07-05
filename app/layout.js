import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/component/navbar"
import Footer from "./nopage/component/footer"
import Script from 'next/script';

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CBDFQD5190"></Script>
      <Script id="google-analytic">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-CBDFQD5190');
              `
        }

      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="vintage">

        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
