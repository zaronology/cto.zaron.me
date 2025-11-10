import React from "react";
import Layout from "@/components/Layout";
import HeaderMain from "@/components/HeaderMain";
import PageTop from "@/components/PageTop";
import ContactTwo from "@/components/ContactTwo";
import FooterMain from "@/components/FooterMain";
import fav from "@/assets/images/favicons/favicon.png";

export const metadata = {
  title: "Contact Zaronology",
  description: "",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/contact",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <ContactTwo contact="page" />
      <FooterMain />
    </Layout>
  );
};

export default page;
