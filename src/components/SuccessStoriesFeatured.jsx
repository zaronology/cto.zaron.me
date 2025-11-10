"use client";
import React from "react";
import dynamic from "next/dynamic";
import successStoriesData from "@/data/SuccessStories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck as icon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faArrowRight as arrow } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import logoIcon from "@/assets/images/zaronology-logo-icon.png";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
import JarallaxImage from "./JarallaxImage";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});
const SuccessStoriesFeatured = () => {
  const data = successStoriesData;
  const stories = data.stories;

  return (
    <section className={`success-stories-section featured`}>
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center cnter"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>
      <div className="success-stories-featured-section-inner">
        <div className="sec-title sticky left-side">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {data.tagline}
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title txt-blue">{data.title}</h3>
          <p>
            Real scale doesn’t come from working harder, it comes from building
            systems that actually support it. These companies stopped patching
            symptoms and took ownership of the deeper issues slowing them
            down—unlocking clarity, efficiency, and sustainable growth in the
            process.
          </p>
        </div>
        <div className="stories-container">
          {stories
            .filter((story) => story.featured)
            .map((item, idx) => (
              <div key={idx} className="success-story featured">
                <div className="success-story-bkgd"></div>
                <div className="success-story-inner">
                  <div className="sec-title">
                    <h6 className="sec-title__tagline">
                      <span className="sec-title__tagline__left"></span>
                      {item.brandName}
                    </h6>
                  </div>
                  <h2
                    className="success-story-title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h2>
                  <div className="success-story-content">
                    <div className="what-we-did">
                      <div className="impact">
                        <ul className="nice-list">
                          {item.impact.map((impactItem, idx) => (
                            <li key={idx}>
                              <FontAwesomeIcon icon={icon} size="2x" />
                              <span>{impactItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="learn-more-btn">
                        <a
                          className="zaron-btn-two transparent"
                          href={`/case-studies`}
                        >
                          <span>
                            Learn More&nbsp;
                            <FontAwesomeIcon icon={arrow} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accent-logo-con">
                  <div
                    className="accent-logo"
                    style={{ backgroundImage: `url(${logoIcon.src})` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesFeatured;
