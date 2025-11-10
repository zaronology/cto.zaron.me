import Layout from "@/components/Layout";
import React, { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import ConversionRateOptimization from "@/components/ConversionRateOptimization";
import fav from "@/assets/images/favicons/favicon.png";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Conversion Rate Optimization",
  description:
    "CRO focuses on improving the efficiency and performance of your customer journey to maximize the value of your existing traffic. From auditing websites and mapping customer journeys to leveraging data-driven insights and implementing personalized experiences, our CRO services ensure every interaction drives revenue growth. Complementing enterprise tracking systems, CRO bridges the gap between accurate data and actionable strategies to optimize the customer experience.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/what-we-do/conversion-rate-optimization",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <ConversionRateOptimization />
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
