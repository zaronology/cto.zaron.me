import "@/assets/vendors/bootstrap-select/bootstrap-select.min.css";
import React, { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import HeaderMain from "@/components/HeaderMain";

import fav from "@/assets/images/favicons/favicon.png";
import PageSlider from "@/components/PageHeroSlider";
import Preloader from "@/components/Preloader";

const SuccessStoriesFeatured = lazy(() =>
  import("@/components/SuccessStoriesFeatured")
);
const HomeSolution = lazy(() => import("@/components/HomeSolution"));
const ClientCarousel = lazy(() => import("@/components/ClientCarousel"));
const CaseStudiesGrid = lazy(() => import("@/components/CaseStudiesGrid"));
const WhyZaronology = lazy(() => import("@/components/WhyZaronology"));
const OurProcess = lazy(() => import("@/components/OurProcess"));
const CtaPrimary = lazy(() => import("@/components/CtaPrimary"));
const AboutPageContent = lazy(() => import("@/components/AboutPageContent"));

const TestimonialsMain = lazy(() => import("@/components/TestimonialsMain"));
const Newsletter = lazy(() => import("@/components/Newsletter"));
const Faqs = lazy(() => import("@/components/Faqs"));
const FooterMain = lazy(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Fix Your Tracking, Own Your Data, and Scale With Confidence",
  description:
    "Your data is muddy, and it’s draining cash from your business. Zaronology ensures accurate tracking, proper attribution, and complete data ownership—so you can stop guessing and start scaling with confidence.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com",
  },
};
const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageSlider />
      <Suspense fallback={<Preloader />}>
        <ClientCarousel />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <AboutPageContent />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <SuccessStoriesFeatured />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <WhyZaronology />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <OurProcess />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <TestimonialsMain />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <HomeSolution />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <CaseStudiesGrid />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <CtaPrimary />
      </Suspense>
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
