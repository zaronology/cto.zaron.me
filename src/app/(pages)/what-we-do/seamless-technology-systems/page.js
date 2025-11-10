import Layout from "@/components/Layout";
import React, { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import SeamlessTechnologySystems from "@/components/SeamlessTechnologySystems";
import fav from "@/assets/images/favicons/favicon.png";

const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Modernize, Streamline, and Scale with Confidence",
  description:
    "Transform your business operations with tailored technology solutions designed to optimize workflows, enhance efficiency, and support scalable growth. From future-proof infrastructure to intelligent automation, our expertise ensures your systems are ready to meet today’s challenges and tomorrow’s opportunities.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/what-we-do/seamless-technology-systems",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <SeamlessTechnologySystems />
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
