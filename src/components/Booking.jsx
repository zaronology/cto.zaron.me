"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import BookingForm from "./BookingForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck as icon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/regular";

const Booking = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        AOS.refresh();
      }, 400);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="pt-5 mt-5 bg-booking booking">
      <Container className="py-md-5 home-page-container">
        <Row>
          <Col md={6} className="mb-5 mb-md-0">
            <div>
              <h6 className="sec-title-four__tagline d-none d-md-block">
                <span className="sec-title-four__tagline__left-border"></span>
                Increase ROI. Scale Faster. Grow Smarter.
              </h6>
              <h2 className="">Stop Guessing. Start Growing.</h2>
              <p>
                You’re making million-dollar decisions—but are they based on
                truth or assumptions?
              </p>
              <p>
                Most brands scale by trial and error, burning cash on what seems
                to work instead of what actually works. The result? Wasted
                budget, unreliable reports, and missed revenue hiding in plain
                sight.
              </p>
              <p>
                Zaronology helps you see the full picture. We uncover where your
                sales are really coming from, which marketing efforts are
                actually profitable, and where you’re leaving money on the
                table—so you can grow with confidence.
              </p>
              <p>
                If you’re tired of second-guessing your numbers, let’s fix it.
              </p>
              {/* <ul className="nice-list">
                <li>
                  <FontAwesomeIcon icon={icon} className="txt-base" />
                  <span className="txt-blue">
                    Is your tech the right fit for your business?
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={icon} className="txt-base" />
                  <span className="txt-blue">
                    Are your processes efficient?
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={icon} className="txt-base" />
                  <span className="txt-blue">
                    Are you getting the data you actually need?
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={icon} className="txt-base" />
                  <span className="txt-blue">
                    Are you able to leverage that data to maximize your
                    profitability?
                  </span>
                </li>
              </ul> */}

              <p>Book a call now and take control of your growth. →</p>
            </div>
            <ClientLogoGrid />
          </Col>
          <Col md={6}>
            <BookingForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Booking;
