import localFont from "next/font/local";
import "./globals.css";
import LayoutComponent from "@/components/LayoutComponent";
import ReduxProvider from "@/lib/redux/reduxProvider/ReduxProvider";

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
          <LayoutComponent>
            {children}
          </LayoutComponent>
        </ReduxProvider>
      </body>
    </html>
  );
}
