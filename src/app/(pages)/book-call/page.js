import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import HeaderMain from "@/components/HeaderMain";
import Booking from "@/components/Booking";
import fav from "@/assets/images/favicons/favicon.png";
import Newsletter from "@/components/Newsletter";
import Faqs from "@/components/Faqs";
import SuccessStoriesFeatured from "@/components/SuccessStoriesFeatured";
const CaseStudiesGrid = dynamic(() => import("@/components/CaseStudiesGrid"));
const TestimonialsMain = dynamic(() => import("@/components/TestimonialsMain"));
const FooterMain = dynamic(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Book Your Clarity Call With Zaronology",
  description:
    "Congratulations on taking the first step toward transforming your business. By addressing attribution clarity, you’re paving the way for optimized systems, actionable insights, and a customer journey that drives sustainable growth.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <Booking />
      <SuccessStoriesFeatured />
      <TestimonialsMain />
      <Faqs />
      <Newsletter />
      <FooterMain />
    </Layout>
  );
};

export default page;
