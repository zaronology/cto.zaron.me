"use client";

import clientCarouselData from "@/data/ClientCarouselData";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
import JarallaxImage from "./JarallaxImage";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const { title, carouselData } = clientCarouselData;
const ClientCarousel = ({ pageTitle, dark }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const settings = {
    gutter: 0,
    loop: true,
    // autoWidth:true,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayButtonOutput: false,
    controls: false,
    nav: false,
    speed: 3250,
    autoplayTimeout: 0,
    preventActionWhenRunning: true,
    mouseDrag: false,

    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      575: {
        items: 3,
      },
      710: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };
  return (
    <section className="client-carousel-section">
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center cnter"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>
      <div className={`client-carousel client-carousel--six`}>
        <div className="sec-title text-center pb-0">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {title}
            <span className="sec-title__tagline__right"></span>
          </h6>
        </div>
        <div className="bkgd-white-cover">
          <div className="carousel-overlay"></div>

          <TinySlider settings={settings} className="client-carousel__one">
            {carouselData.map(({ id, logo, alt, width }) => (
              <div key={id}>
                <div className="client-carousel__one__item">
                  <Image
                    className="client-carousel__one__item__normal"
                    src={logo}
                    alt={alt}
                  />
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
