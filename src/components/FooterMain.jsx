import footerData from "@/data/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { logo_zaronology, footerBg, aboutTwoText, widgetSocial, bottomLinks } =
  footerData;

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="main-footer">
        <div
          className="footer-bg"
          style={{ backgroundImage: `url(${footerBg.src})` }}
        ></div>
        <div className="main-footer-inner">
          <Container>
            <Row className="justify-content-center text-center">
              <Col>
                <div className="footer-widget footer-widget--about-two">
                  <Link href="/" className="footer-widget__logo">
                    <Image
                      src={logo_zaronology}
                      width={400}
                      style={{ height: "auto" }}
                      alt="Zaronology Logo"
                    />
                  </Link>
                  <p className="footer-widget--about-two__text">
                    {aboutTwoText}
                  </p>
                  <div className="footer-widget__social justify-content-center">
                    {widgetSocial.map(({ id, href, icon, title }) => (
                      <Link href={href} key={id}>
                        <FontAwesomeIcon icon={icon} />
                        <span className="sr-only">{title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="main-footer__bottom">
            <Container>
              <div className="main-footer__bottom__inner">
                <Row className="justify-content-center">
                  <Col md={6}>
                    <p className="main-footer__copyright">
                      &copy; Copyright 2015 & beyond.{" "}
                      <span className="dynamic-year">{currentYear}</span>{" "}
                      Zaronology Inc
                    </p>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled main-footer__bottom__list">
                      {bottomLinks.map(({ id, title, href }) => (
                        <li key={id}>
                          <Link href={href}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;
