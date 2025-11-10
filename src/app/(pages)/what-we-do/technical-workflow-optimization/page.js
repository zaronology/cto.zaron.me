import Layout from "@/components/Layout";
import React, { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import TechnicalWorkflowOptimization from "@/components/TechnicalWorkflowOptimization";
import fav from "@/assets/images/favicons/favicon.png";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Technical Workflow Optimization | Work Smarter, Not Harder",
  description:
    "Streamline your business operations with Zaronology’s Technical Workflow Optimization services. Discover how we align your teams, automate repetitive tasks, and simplify processes to reduce inefficiencies, save time, and create workflows that scale effortlessly with your business growth.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical:
      "https://zaronology.com/what-we-do/technical-workflow-optimization",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <TechnicalWorkflowOptimization />
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
