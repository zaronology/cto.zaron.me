"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "react-circular-progressbar/dist/styles.css";
import "@/assets/vendors/animate/animate.min.css";
import ThemeProvider from "@/Provider/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/assets/css/main.css";
import "@/assets/css/zaronology.css";
import { Suspense, useEffect } from "react";
import TermlyCMP from "@/components/TermlyCMP";
import { Poppins, Titillium_Web } from "next/font/google";

import Head from "next/head";
import Preloader from "@/components/Preloader";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const titillium = Titillium_Web({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-titillium",
});

export default function RootLayout({ children }) {
  const WEBSITE_UUID = "32f7b240-e9f3-4e8b-8a18-c8e511ddc2fc";

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" className={`${titillium.variable} ${poppins.variable}`}>
      <head>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
      </head>
      <GoogleAnalytics gaId="G-1Y70J1NJSX" />
      <body>
        <Preloader />
        <ThemeProvider>{children}</ThemeProvider>
        <Suspense fallback={<Preloader />}>
          <TermlyCMP websiteUUID={WEBSITE_UUID} />
        </Suspense>
      </body>
    </html>
  );
}
