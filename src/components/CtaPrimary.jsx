"use client";
import { ctaPrimaryData } from "@/data/CtaPrimaryData";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck as icon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";

const { title, text, href, btnText, listItems, btn_modal } = ctaPrimaryData;

const CtaPrimary = () => {
  return (
    <section className="cta-primary">
      <div className="angle-top-left"></div>
      <Container className="container">
        <Row>
          <Col lg={8} className="">
            <div className="cta-primary__content">
              <h2 className="cta-primary__content__title">
                {title.split("\n").map((t, i) => (
                  <Fragment key={i}>
                    {t} <br />
                  </Fragment>
                ))}
              </h2>
              <div className="cta-primary__box">
                <div className="cta-primary__box_text">
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </div>
                {/* <ul className="nice-list two-col mt-3">
                  {listItems.map((item, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={icon} size="2x" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className=" d-flex align-items-center justify-content-center wow fadeInUp"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link
              href={href}
              className="zaron-btn-two"
              {...(btn_modal
                ? {
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#bookingModal",
                  }
                : {})}
            >
              <span className="zaron-btn-two__left-star yellow"></span>
              <span>{btnText}</span>
              <span className="zaron-btn-two__right-star yellow"></span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaPrimary;
