"use client";
import React, { useEffect, useState, lazy } from "react";
import Preloader from "./Preloader";

const MobileNav = lazy(() => import("@/components/MobileNav"));
const ScrollTop = lazy(() => import("@/components/ScrollTop"));

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // AOS.init({
    //   offset: 0,
    //   anchorPlacementment: "top-bottom",
    //   once: false,
    //   mirror: true,
    // });
    // setTimeout(() => {
    //   AOS.refresh();
    // }, 400);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Preloader />
      <main className="page-wrapper">{children}</main>
      <MobileNav />
      <ScrollTop />
      {/* <Toaster position="top-right" /> */}
    </>
  );
};

export default Layout;
