import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsletterData from "@/data/NewsletterData";
import SidebarNewsletter from "./SidebarNewsletter";

const { image, title, author, href, text } = NewsletterData;

const Newsletter = () => {
  return (
    <section className="cta-three">
      <div className="cta-three-inner">
        <div className="cta-three__bg">
          <Container>
            <Row>
              <Col xl={6} md={5} xs={12}>
                <div className="cta-three__image">
                  <Image
                    className="dave-newsletter"
                    src={image}
                    alt="Dave Zaron, Founder Zaronology Inc"
                  />
                </div>
              </Col>
              <Col xl={6} md={7} xs={12}>
                <div className="cta-three__content">
                  <h4 className="cta-three__content__title">{title}</h4>
                  <p>{text}</p>
                  <div className="newsletter-form-wrapper">
                    <SidebarNewsletter page="Newsletter" />
                  </div>
                </div>
              </Col>
              <Col>
                <div className="newsletter-mobile">
                  <Image
                    className="dave-newsletter-mobile"
                    src={image}
                    alt="Dave Zaron, Founder Zaronology Inc"
                  />
                  <div>
                    <SidebarNewsletter page="Newsletter" />
                    <div className="mc-form__response"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
