"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
const icon = "tolak-icons-two-sign-in-alt1";
import FeaturesGrid from "./FeaturesGrid";

const AffiliateProgramDevelopment = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        AOS.refresh();
      }, 400);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-5 mt-5">
      <Container>
        <Row>
          <Col className="mt-5 px-5">
            <div className="sec-title text-center">
              <h6 className="sec-title__tagline txt-blue">
                <span className="sec-title__tagline__left"></span>
                Affiliate program optimization
                <span className="sec-title__tagline__right"></span>
              </h6>
              <h3 className="sec-title__title txt-base">Core Services</h3>
            </div>
            <p className="txt-blue">
              At Zaronology, we focus exclusively on the technological backbone
              of your affiliate and influencer programs. Whether you’re
              launching a program or optimizing an existing one, we ensure your
              systems are designed for accuracy, scalability, and success. With
              over 10 years of experience in affiliate programs, we’ve worked
              with businesses of all sizes to tackle challenges, refine systems,
              and maximize results. Our expertise is rooted in technology,
              ensuring you’re always ahead of the curve and confident in your
              program’s foundation.
            </p>
          </Col>
        </Row>
      </Container>
      <FeaturesGrid />
    </section>
  );
};

export default AffiliateProgramDevelopment;
