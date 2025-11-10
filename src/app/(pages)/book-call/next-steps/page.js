import React from "react";
import Layout from "@/components/Layout";
import HeaderMain from "@/components/HeaderMain";
import BookingNextSteps from "@/components/BookingNextSteps";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import TestimonialsMain from "@/components/TestimonialsMain";
import FooterMain from "@/components/FooterMain";
import Newsletter from "@/components/Newsletter";
import PageHeroSlider from "@/components/PageHeroSlider";
import fav from "@/assets/images/favicons/favicon.png";

export const metadata = {
  title: "Call Booked Next Steps",
  description:
    "This is the first step toward building systems and strategies that empower your business to scale smarter, operate more efficiently, and create lasting customer loyalty. Here’s what you can expect next and how to make the most of our conversation.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/book-call/next-steps",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <BookingNextSteps />
      <FooterMain />
    </Layout>
  );
};

export default page;
