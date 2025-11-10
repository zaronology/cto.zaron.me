import Layout from "@/components/Layout";
import React from "react";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import CustomerLoyaltyRetention from "@/components/CustomerLoyaltyRetention";
import fav from "@/assets/images/favicons/favicon.png";

export const metadata = {
  title: "Customer Journey and Customer Experience",
  description: "",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical:
      "https://zaronology.com/what-we-do/customer-journey-and-experience",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <CustomerLoyaltyRetention />
    </Layout>
  );
};

export default page;
