import featureOneData from "@/data/OurProcessData";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bkgdImg from "@/assets/images/cta-bkgd.jpg";

const { tagLine, title, items } = featureOneData;

const OurProcess = () => {
  return (
    <section className="our-process">
      <div
        className="our-process-bkgd"
        style={{ backgroundImage: `url(${bkgdImg.src})` }}
      ></div>

      <div className="angle-top-right"></div>
      <Container>
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {tagLine}
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title">{title}</h3>
        </div>
        <Row className="gutter-y-30">
          {items.map(({ id, daIcon, title, text, shape }) => (
            <Col key={id} md={6} xl={3}>
              <div className="our-process__item text-center">
                <div className="our-process__item__number"></div>
                <div className="our-process__item__icon">{daIcon}</div>
                <h4 className="our-process__item__title">{title}</h4>
                <p className="our-process__item__text">{text}</p>
                {shape && (
                  <div
                    className="our-process__item__arrow"
                    style={{ backgroundImage: `url(${shape.src})` }}
                  ></div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurProcess;
