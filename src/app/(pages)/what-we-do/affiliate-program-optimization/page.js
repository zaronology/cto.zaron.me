import Layout from "@/components/Layout";
import React, { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import AffiliateProgramDevelopment from "@/components/AffiliateProgramDevelopment";
import fav from "@/assets/images/favicons/favicon.png";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Affiliate Program Development and Optimization",
  description:
    "Whether starting from scratch or optimizing an existing program, we specialize in tailored strategies that align with your business goals. From payout structuring and offer configuration to dynamic payout support, workflow optimization, and automation, our approach ensures accurate tracking and seamless performance. We integrate and troubleshoot affiliate tracking tools to eliminate discrepancies, prevent revenue leakage, and deliver reliable performance data.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical:
      "https://zaronology.com/what-we-do/affiliate-program-systems-optimization",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <AffiliateProgramDevelopment />
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
