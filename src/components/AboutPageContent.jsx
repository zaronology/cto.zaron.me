"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPieSimpleCircleDollar as iconOne } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faWandMagicSparkles as iconTwo } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faGaugeMax as iconThree } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";

import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls-lng.jpg";
import JarallaxImage from "./JarallaxImage";
import Image from "next/image";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const AboutPageContent = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {}, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="who-we-serve">
      <Jarallax className="matrix-background-img-container-img" speed={0.3} imgPosition="center cnter">
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>

      <div className="sec-title text-center">
        <h6 className="sec-title__tagline txt-blue">
          <span className="sec-title__tagline__left"></span>
          Clarity is what makes scale sustainable
          <span className="sec-title__tagline__right"></span>
        </h6>
        <h3 className="sec-title__title txt-blue"></h3>
        <p className="txt-blue">
          The biggest bottlenecks in your business aren’t always visible. They show up as friction, false starts, and never-ending
          fixes, until progress stalls and no one can tell you why.
        </p>
        <p className="txt-blue">
          You don’t have a people problem. You have a system that was never built to carry this kind of weight. The tools you
          chose made sense when you were smaller. But now? They’re holding you back.
        </p>
        <p>Most teams don’t realize how much they’re compensating for bad architecture.</p>
        <p>They throw more bodies at the problem. More meetings. More maybes.</p>
        <p>But until the foundation is solid, growth only creates more drag.</p>
        <p>This is where everything changes.</p>
      </div>
      <div className="who-we-serve-content">
        <div className="who-we-serve-item">
          <div className="who-we-serve-item-top">
            <FontAwesomeIcon icon={iconOne} />

            <h3 className="">Clarity That Drives Confident Decisions</h3>
          </div>
          <div className="who-we-serve-item-content">
            <p className="">
              See exactly what’s working, what’s broken, and what to do next, without guessing, second opinions, or waiting on
              your team to explain it.
            </p>
          </div>
        </div>
        <div className="who-we-serve-item">
          <div className="who-we-serve-item-top">
            <FontAwesomeIcon icon={iconTwo} />
            <h3 className="">Systems That Scale Without Stress</h3>
          </div>

          <div className="who-we-serve-item-content">
            <p className="">
              Clean handoffs, connected tools, and smooth operations that don’t melt down when things get busy. No more
              scrambling. No more duct tape.
            </p>
          </div>
        </div>

        <div className="who-we-serve-item">
          <div className="who-we-serve-item-top">
            <FontAwesomeIcon icon={iconThree} />
            <h3 className="">Growth That Doesn’t Burn Out Your Team</h3>
          </div>
          <div className="who-we-serve-item-content">
            <p className="">
              Your business moves faster, without turning your team into firefighters. They finally get to focus on growth, not
              patching problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageContent;
