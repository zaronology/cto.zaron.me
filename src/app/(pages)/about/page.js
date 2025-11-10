import FooterMain from "@/components/FooterMain";
import HeaderMain from "@/components/HeaderMain";
import Layout from "@/components/Layout";
import React from "react";
import CtaPrimary from "@/components/CtaPrimary";
import TestimonialsMain from "@/components/TestimonialsMain";
import fav from "@/assets/images/favicons/favicon.png";
import AboutPageContent from "@/components/AboutPageContent";
import Newsletter from "@/components/Newsletter";
import OurProcess from "@/components/OurProcess";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import WhyZaronology from "@/components/WhyZaronology";
import Faqs from "@/components/Faqs";
import PageHeroSlider from "@/components/PageHeroSlider";
import HowWeServe from "@/components/HowWeServe";

export const metadata = {
  title: "About Us || Zaronology",
  description:
    "Zaronology bridges gaps and delivers clarity with tailored solutions that optimize attribution, streamlines tracking, and empower confident, scalable growth.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/about",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <AboutPageContent />
      <HowWeServe />
      <CaseStudiesGrid />
      <TestimonialsMain />
      <CtaPrimary />
      {/* <VideoFour /> */}
      <Faqs />
      <Newsletter />
      <FooterMain />
    </Layout>
  );
};

export default page;
