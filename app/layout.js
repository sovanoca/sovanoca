import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/component/navbar"
import Footer from "./nopage/component/footer"

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
