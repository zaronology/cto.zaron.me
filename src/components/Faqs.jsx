"use client";
import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import FaqsData from "@/data/FaqsData";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
import JarallaxImage from "./JarallaxImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck as iconOne } from "@awesome.me/kit-d469f7d4aa/icons/duotone/solid";
import { faChevronsDown as iconTwo } from "@awesome.me/kit-d469f7d4aa/icons/duotone/solid";

const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const Faqs = () => {
  const pathname = usePathname();
  const data =
    FaqsData.find((d) => d.id == pathname) ||
    FaqsData.find((d) => d.id == "default");
  const { title, text, tagLine, accordionData } = data;
  const [activeKey, setActiveKey] = useState("0"); // default active key
  return (
    <section className="faq-three" style={{ paddingTop: "1px" }}>
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center top"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>
      <Container>
        <Row className="pt-5">
          <Col
            xl={8}
            lg={10}
            className="offset-xl-2 offset-lg-1 mt-5 faq-container"
          >
            <div className="sec-title text-center">
              <h6 className="sec-title__tagline txt-blue">
                <span className="sec-title__tagline__left"></span>
                {tagLine}
                <span className="sec-title__tagline__right"></span>
              </h6>
            </div>
            <p className="faq-three__text">{text}</p>
            <div
              className="faq-three__accordion tolak-accrodion"
              data-grp-name="tolak-accrodion"
            >
              <Accordion
                activeKey={activeKey}
                onSelect={(key) => setActiveKey(key)}
              >
                {accordionData.map(({ title, text, id, image }) => (
                  <Accordion.Item
                    key={id}
                    eventKey={id.toString()}
                    className={activeKey === id.toString() ? "active" : ""}
                  >
                    <Accordion.Header>
                      <FontAwesomeIcon icon={iconOne} /> {title}
                      <FontAwesomeIcon
                        icon={iconTwo}
                        className="accordion-title__icon"
                      />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="inner">
                        {/* <div className="inner__image">
                                                    <Image src={image} alt="accordion-logo" />
                                                </div> */}
                        <div dangerouslySetInnerHTML={{ __html: text }}></div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            {data.showCTA && (
              <div className="mt-5 text-center">
                <a
                  href="#"
                  className="zaron-btn-two zaron-btn-two--home-six"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                >
                  <span className="zaron-btn-two__left-star"></span>
                  <span>
                    Book Clarity Call{" "}
                    <i className="tolak-icons-two-arrow-right-short"></i>
                  </span>
                  <span className="zaron-btn-two__right-star"></span>
                </a>
              </div>
            )}
          </Col>
          {/* <Col lg={6} >
                        <div className="faq-three__image">

                            <div className="faq-three__image__left wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                                <Image src={faqImage1} alt="tolak" />
                                <Image src={faqImage2} alt="tolak" />
                            </div>
                            <div className="faq-three__image__right wow fadeInUp" data-aos="fade-up" data-aos-delay="200">
                                <Image src={faqImage3} alt="tolak" />
                            </div>
                        </div>
                    </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
