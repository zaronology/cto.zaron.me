import solutionData from "@/data/HomeSolutionData";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const { image, tagLine, shape, title, text, text2, text3, text4, text5 } =
  solutionData;

const HomeSolution = ({ Two }) => {
  return (
    <section className="our-solution">
      <Container className="py-md-5 mt-5">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {tagLine}
            <span className="sec-title__tagline__right"></span>
          </h6>
        </div>

        <Row>
          <Col lg={5} xs={12} className="">
            <div className="our-solution__image">
              <Image src={image} alt="Zaronology will fix your muddy data" />
            </div>
          </Col>
          <Col lg={7} xs={12} className="">
            <div className="our-solution__content">
              <div className="sec-title text-left">
                <h3 className="sec-title__title">{title}</h3>
              </div>
              <p className="our-solution__content__text">{text}</p>
              <p className="our-solution__content__text">{text2}</p>
              <p className="our-solution__content__text">{text3}</p>
              <p className="our-solution__content__text">{text4}</p>
              <p className="our-solution__content__text">{text5}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSolution;
