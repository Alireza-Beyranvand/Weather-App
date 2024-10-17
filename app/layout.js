import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutComponent from "@/components/layout/LayoutComponent";
import ReduxProvider from "@/lib/redux/reduxProvider/ReduxProvider";
import NavbarContainer from "@/components/containers/NavbarContainer";
import FooterContainer from "@/components/containers/FooterContainer";
import Loading from "./loading";

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
  description: "Weather App",
  // manifest: "/manifest.json",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} >
        <ReduxProvider>
          <NavbarContainer />
          <div className='mt-3.5'>
            {children}
          </div>
          <FooterContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
