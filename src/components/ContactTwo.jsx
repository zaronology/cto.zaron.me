"use client";
import contactTwoData from "@/data/ContactTwoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck as iconPhone } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const {
  bg,

  infoBoxs,

  infoText,
  infoTitle,
  socials,
  tagLine,
  text,
  title,
} = contactTwoData;
const inputs = ["name", "email", "message"];

const ContactTwo = ({ contact }) => {
  const [mounted, setMounted] = useState(false);
  const form = useRef(null);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
        }
      );

    e.target.reset();
  };
  return (
    <section
      className={`${contact === "page" ? "contact--contact-page" : ""} contact`}
      id="contact"
    >
      <Container>
        <div className="contact__wrapper">
          <Row>
            <Col xs={12}>
              <div className="sec-title text-center">
                <h6 className="sec-title__tagline">
                  <span className="sec-title__tagline__left icofont-rounded-double-left"></span>
                  {tagLine}
                  <span className="sec-title__tagline__right icofont-rounded-double-right"></span>
                </h6>
                <h3 className="sec-title__title">{title}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="contact__info">
                <div
                  className="contact__info__shape"
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <h4 className="contact__info__title">{infoTitle} :</h4>
                <p className="contact__info__text">{infoText}</p>
                <ul className="contact__info__box-wrapper">
                  {infoBoxs.map(({ id, icon, text, title, href, subHref }) => (
                    <li key={id} className="contact__info__box">
                      {/* <div className="contact__info__box__icon">
                        <i className={icon}></i>
                      </div> */}
                      <h4 className="contact__info__box__title">{title}</h4>
                      <p className="contact__info__box__text">
                        {href && subHref ? (
                          <Link href={`${subHref}:${href} `}>{text}</Link>
                        ) : (
                          text
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="contact__info__social">
                  <h5 className="contact__info__social__title">
                    Follow Social:
                  </h5>
                  <div className="contact__info__social__wrap">
                    {socials.map(({ id, link, icon, name }) => (
                      <Link key={id} href={link}>
                        <FontAwesomeIcon icon={icon} />
                        <span className="sr-only">{name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact__content">
                <div
                  style={{
                    height: "700px",
                  }}
                >
                  <iframe
                    src="https://calendly.com/zaronology/clarity-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff5334"
                    width="100%"
                    height="100%"
                    allow="fullscreen"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactTwo;
