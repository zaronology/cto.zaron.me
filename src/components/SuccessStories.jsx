"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import successStoriesData from "@/data/SuccessStories";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck as iconImpact } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faArrowRight as arrow } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";
import { faWandMagicSparkles as iconBefore } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import { faCheckDouble as iconAction } from "@awesome.me/kit-d469f7d4aa/icons/duotone/solid";
import Pagination from "./Pagination";
import logoIcon from "@/assets/images/zaronology-logo-icon.png";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls-lng.jpg";
import JarallaxImage from "./JarallaxImage";
import Image from "next/image";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});
const SuccessStories = () => {
  const data = successStoriesData;
  const stories = data.stories;
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pNum = searchParams.get("page") || 1;
    setPageNumber(parseInt(pNum) || 1);
  }, [searchParams]);

  return (
    <>
      <section className={`success-stories-section`}>
        <Jarallax
          className="matrix-background-img-container-img"
          speed={0.3}
          imgPosition="center cnter"
        >
          <JarallaxImage src={matrixBkgd.src} />
        </Jarallax>
        <div className="success-stories-section-inner">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">
              <span className="sec-title__tagline__left"></span>
              {data.tagline}
              <span className="sec-title__tagline__right"></span>
            </h6>
            <h3 className="sec-title__title txt-blue">{data.title}</h3>
            <p>
              Real growth doesn’t happen by accident. These brands scaled
              smarter, increased profitability, and built a foundation for
              long-term success with the right strategies in place.
            </p>
          </div>

          {stories
            .filter((story) => story.page === parseInt(pageNumber))
            .map((item, idx) => (
              <div key={idx} className="success-stories-section-split">
                <div
                  className={`sec-title ${
                    idx % 2 === 0 ? "left-side" : "right-side"
                  } success-stories-split-title`}
                >
                  <h6 className="sec-title__tagline">{item.brandName}</h6>
                  <h3
                    className="txt-blue sec-title__title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                  <p></p>
                </div>
                <div className="stories-container">
                  <div className="success-story">
                    <div className="success-story-bkgd"></div>
                    <div className="success-story-inner">
                      <div className="success-story-content">
                        <div className="brand-section">
                          {item.logo && (
                            <Image src={item.logo} alt={item.logoAlt} />
                          )}
                        </div>
                        <div className="before">
                          <p>{item.before.text}</p>
                          <p>{item.before.text2}</p>
                          <ul className="nice-list icon-base">
                            {item.before.bullets.map((beforeItem, idx) => (
                              <li key={idx}>
                                <FontAwesomeIcon icon={iconBefore} size="2x" />
                                <span>{beforeItem}</span>
                              </li>
                            ))}
                          </ul>
                          <p>{item.before.text3}</p>
                        </div>
                        <div className="what-we-did">
                          <div className="the-actions">
                            <p>{item.after.text}</p>
                            <ul className="nice-list">
                              {item.after.bullets.map((afterItem, idx) => (
                                <li key={idx}>
                                  <FontAwesomeIcon
                                    icon={iconAction}
                                    size="2x"
                                  />
                                  <span>{afterItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="impact">
                            <h4>The IMPACT</h4>
                            <ul className="nice-list">
                              {item.impact.map((impactItem, idx) => (
                                <li key={idx}>
                                  <FontAwesomeIcon
                                    icon={iconImpact}
                                    size="2x"
                                  />
                                  <span>{impactItem}</span>
                                </li>
                              ))}
                            </ul>
                            {item.href && item.href !== "" ? (
                              <div className="learn-more-btn mt-5">
                                <a
                                  className="zaron-btn-two transparent"
                                  href={item.href}
                                  target="_blank"
                                >
                                  <span>
                                    Read The Full Case Study&nbsp;
                                    <FontAwesomeIcon icon={arrow} />
                                  </span>
                                </a>
                              </div>
                            ) : null}
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
                </div>
              </div>
            ))}
        </div>
      </section>
      <Pagination totalPages={data.pages} />
    </>
  );
};

export default SuccessStories;
