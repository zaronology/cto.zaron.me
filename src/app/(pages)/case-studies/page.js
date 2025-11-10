import FooterMain from "@/components/FooterMain";
import HeaderMain from "@/components/HeaderMain";
import Layout from "@/components/Layout";
import React from "react";
import TestimonialsMain from "@/components/TestimonialsMain";
import Faqs from "@/components/Faqs";
import fav from "@/assets/images/favicons/favicon.png";
import Newsletter from "@/components/Newsletter";
import PageHeroSlider from "@/components/PageHeroSlider";
import SuccessStories from "@/components/SuccessStories";

export const metadata = {
  title: "Case Studies || Zaronology",
  description:
    "Zaronology removes obstacles, so you can focus on growth. Our solutions empower you to scale seamlessly and reach new heights",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/case-studies",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <SuccessStories />
      <TestimonialsMain />
      {/* <VideoFour /> */}
      <Faqs />
      <Newsletter />
      <FooterMain />
    </Layout>
  );
};

export default page;
