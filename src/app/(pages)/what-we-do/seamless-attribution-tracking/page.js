import Layout from "@/components/Layout";
import React, { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import SeamlessAttributionTracking from "@/components/SeamlessAttributionTracking";
import fav from "@/assets/images/favicons/favicon.png";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Seamless Attribution, CRO, & Scalable Tech Solutionss",
  description:
    "Specializing in Seamless Attribution Tracking, Conversion Rate Optimization, and Customer Journey Mapping, Zaronology helps $5M+ DTC brands gain clarity, improve data accuracy, and create seamless interactions. By uncovering actionable insights and streamlining processes, we empower businesses to boost efficiency, drive customer loyalty, and significantly increase profit margins.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical:
      "https://zaronology.com/what-we-do/seamless-attribution-tracking",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <SeamlessAttributionTracking />
      <Suspense fallback={<Preloader />}>
        <Faqs />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <FooterMain />
      </Suspense>
    </Layout>
  );
};

export default page;
