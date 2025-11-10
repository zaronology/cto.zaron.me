"use client";
import caseStudiesData from "@/data/CaseStudiesData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";

const CaseStudiesPage = () => {
  const pathname = usePathname();
  const data =
    caseStudiesData.find((d) => d.id == pathname) ||
    caseStudiesData.find((d) => d.id == "default");
  const carouselData = data.carouselData;
  return (
    <section className="case-studies-container">
      <div className="case-studies case-studies-page">
        <div className="sec-title text-center mb-5">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {data.title}
            <span className="sec-title__tagline__right"></span>
          </h6>
        </div>

        <Container className="home-page-container">
          <Row className="gutter-y-30">
            {carouselData.map(({ id, image, href, title, text, target }) => (
              <Col key={id} md={6} lg={4}>
                <div className="blog-card-three">
                  <div className="blog-card-three__image">
                    <Image src={image} alt={title} style={{ height: "auto" }} />
                    <Image src={image} alt={title} style={{ height: "auto" }} />
                    <Link
                      href={href}
                      target={target}
                      className="blog-card-three__image__link"
                    >
                      <i className="icon-right-arrow"></i>
                      <span className="sr-only">{title}</span>
                    </Link>
                  </div>
                  <div className="blog-card-three__content">
                    <h3 className="blog-card-three__title">
                      <a href={href} target={target}>
                        {title}
                      </a>
                    </h3>
                    <p
                      className="blog-card-three__text"
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {data.viewMoreBtn && (
            <Row className="mt-5 pt-5">
              <Col>
                <div className="text-center">
                  <a
                    href="/case-studies"
                    className="zaron-btn-two zaron-btn-two--home-six"
                  >
                    <span className="zaron-btn-two__left-star"></span>
                    <span>
                      View More Case Studies{" "}
                      <i className="tolak-icons-two-arrow-right-short"></i>
                    </span>
                    <span className="zaron-btn-two__right-star"></span>
                  </a>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
