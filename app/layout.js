import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutComponent from "@/components/LayoutComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | Weather App",
    default: "Weather App"
  },
  description: "Weather",
  // manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} md:px-3 md:pt-4 sm:px-0 sm:pt-0`}>
        <LayoutComponent>
          {children}
        </LayoutComponent>
      </body>
    </html>
  );
}
