import FooterMain from "@/components/FooterMain";
import HeaderSixCloned from "@/components/HeaderMain";
import Layout from "@/components/Layout";
import React from "react";
import CtaPrimary from "@/components/CtaPrimary";
import TestimonialsMain from "@/components/TestimonialsMain";
import Faqs from "@/components/Faqs";
import fav from "@/assets/images/favicons/favicon.png";
import WhyPageContent from "@/components/WhyPageContent";
import Newsletter from "@/components/Newsletter";
import WhyZaronology from "@/components/WhyZaronology";
import OurProcess from "@/components/OurProcess";
import PageHeroSlider from "@/components/PageHeroSlider";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const metadata = {
  title: "Why || Zaronology",
  description:
    "We remove obstacles, so you can focus on growth. Our solutions empower you to scale seamlessly and reach new heights",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/why",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderSixCloned />
      <PageHeroSlider />
      <WhyPageContent />
      <WhyZaronology />
      <OurProcess />
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
