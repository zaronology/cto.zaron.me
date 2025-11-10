"use client";
import React from "react";
import WhyZaronologyBlocks from "@/components/WhyZaronologyBlocks";
import dynamic from "next/dynamic";
import JarallaxImage from "./JarallaxImage";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const WhyZaronology = () => {
  return (
    <section className="why-zaronology">
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center cnter"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>
      <div className="why-zaronology-inner">
        <WhyZaronologyBlocks />
        <div className="sec-title right-side text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>Why Zaronology
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title">
            When your systems are unclear, every decision feels like a gamble.
          </h3>
          <p>
            Outdated tools, clunky handoffs, and misaligned reporting create
            blind spots that drain your time, energy, and margin.
          </p>
          <p>
            We help you uncover what’s really slowing things down, rebuild the
            systems you rely on, and move forward with clarity, so you can scale
            with confidence, not guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyZaronology;
