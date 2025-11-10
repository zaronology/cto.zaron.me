"use client";
import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
import testimonialsMainData from "@/data/TestimonialsMainData";
import Image from "next/image";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
import JarallaxImage from "./JarallaxImage";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  items: 1,
  gutter: 30,
  loop: true,
  smartSpeed: 5000,
  nav: true,
  navPosition: "top",
  arrowKeys: true,
  controls: false,
  autoplay: false,
  responsive: {
    0: { items: 1 },
    992: { items: 2 },
  },
};

const TestimonialsMain = () => {
  const { bg, quote, tagLine, title, carouselData } = testimonialsMainData;
  const [mounted, setMounted] = useState(false);
  const [heightsAdjusted, setHeightsAdjusted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const equalizeHeights = () => {
      const testimonialCards = document.querySelectorAll(
        ".testimonials-card-four"
      );
      let maxHeight = 0;
      testimonialCards.forEach((card) => {
        card.style.height = "auto";
      });
      testimonialCards.forEach((card) => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });
      testimonialCards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    const checkHeightsOnScroll = () => {
      if (!heightsAdjusted) {
        const testimonialCards = document.querySelectorAll(
          ".testimonials-card-four"
        );
        if (testimonialCards.length > 0) {
          // Get the height of the first card
          const firstCardHeight = testimonialCards[0].offsetHeight;
          // Check if all cards have the same height
          const allEqual = Array.from(testimonialCards).every(
            (card) => card.offsetHeight === firstCardHeight
          );

          if (!allEqual) {
            equalizeHeights();
            setHeightsAdjusted(true); // Prevent further execution
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", checkHeightsOnScroll);
    window.addEventListener("resize", equalizeHeights);
    return () => {
      window.removeEventListener("resize", equalizeHeights);
    };
  }, [heightsAdjusted]);

  if (!mounted) {
    return null;
  }
  return (
    <section className="testimonials-four" id="testimonial">
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center cnter"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>

      <Container className="home-page-container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {title}
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title">{tagLine}</h3>
        </div>
        <Row>
          <Col>
            <div className="tolak-carousel--basic-nav">
              <TinySlider
                settings={settings}
                className="testimonials-four__carousel owl-carousel owl-theme"
              >
                {carouselData.map(
                  ({ id, image, content, name, designation, rating }) => (
                    <div className="item" key={id}>
                      <div className="d-flex">
                        <div className="testimonials-card-four">
                          <div className="testimonials-card-four__rating">
                            {rating.map((c, i) => (
                              <i key={i} className={c}></i>
                            ))}
                          </div>
                          <div className="testimonials-card-four__content">
                            {content}
                          </div>
                          <div className="testimonials-card-four__author">
                            <h3 className="testimonials-card-four__name">
                              {name}
                            </h3>
                            <p className="testimonials-card-four__designation">
                              {designation}
                            </p>
                          </div>
                          <div className="testimonials-card-four__quote">
                            <Image src={quote} alt="quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsMain;
