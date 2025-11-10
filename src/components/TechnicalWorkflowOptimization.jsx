"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import Image from "next/image";
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/technical-workflow-optimization/seamless-technology-systems.jpg";

import FeaturesGrid from "./FeaturesGrid";

const TechnicalWorkflowOptimization = () => {
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
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline txt-blue">
          <span className="sec-title__tagline__left"></span>
          Features And Benefits
          <span className="sec-title__tagline__right"></span>
        </h6>
        <h3 className="sec-title__title txt-base">
          Technical Workflow Optimization
        </h3>
      </div>
      <FeaturesGrid />
    </section>
  );
};

export default TechnicalWorkflowOptimization;
