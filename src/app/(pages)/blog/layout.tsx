"use client";
import HeaderMain from "@/components/HeaderMain";
import Layout from "@/components/Layout";
import LayoutTopNav from "./_components/ui/BlogLayout/LayoutTopNav";
import Faqs from "@/components/Faqs";
import FooterMain from "@/components/FooterMain";
import Newsletter from "@/components/Newsletter";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <HeaderMain />
      <div style={{ height: "88px" }} />
      <LayoutTopNav />
      <div className="px-2 px-xl-0" style={{ flexDirection: "column", display: "flex", minHeight: "calc(100vh - 88px)" }}>
        {children}
      </div>
      <Faqs />
      <Newsletter />
      <FooterMain />
    </Layout>
  );
}
