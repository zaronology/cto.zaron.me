import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import HeaderMain from "@/components/HeaderMain";
import PageHeroSlider from "@/components/PageHeroSlider";
import fav from "@/assets/images/favicons/favicon.png";
import Resources from "@/components/Resources";
const ResourcesGrid = dynamic(() => import("@/components/ResourcesGrid"));
const FooterMain = dynamic(() => import("@/components/FooterMain"));

export const metadata = {
  title: "Resources by Zaronology",
  description:
    "Scaling a brand isn’t just about working harder—it’s about working smarter. Our resources give you actionable insights, proven strategies, and expert frameworks to help you eliminate inefficiencies, maximize profitability, and build a growth engine that lasts.",
  icons: {
    icon: fav.src,
  },
  alternates: {
    canonical: "https://zaronology.com/resources",
  },
};

const page = () => {
  return (
    <Layout>
      <HeaderMain />
      <PageHeroSlider />
      <Resources />
      <ResourcesGrid />
      <FooterMain />
    </Layout>
  );
};

export default page;
