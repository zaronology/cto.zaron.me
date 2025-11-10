'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/plans-pricing-intro.jpg";

const PricingSectionOne = () => {

    return (
        <section className="mt-5" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">How Our Plans Work</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col md={6} className='text-center order-2 order-md-1'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                    <Col md={6} className='order-1 order-md-2' data-aos='fade-up' data-aos-delay="200">
                        <div className="about-six__content">
                            <p>
                                We understand the challenges businesses face in today's fast-paced and ever-evolving market. Whether it's troubleshooting attribution tracking systems, updating or streamling your technology, optimizing your funnels, or creating a winning affiliate program, our advisory services are designed to help you achieve clear, actionable results.
                            </p>
                            <p>
                                We combine an asynchronous, agile approach with tailored expertise to deliver outcomes that empower your team to execute at the highest level. This means you get the support you need without being bogged down by unnecessary meetings or delays.
                            </p>
                            <p>
                                Our approach is built to provide clarity, flexibility, and measurable outcomes—ensuring you receive the right solutions at the right time without disrupting your operations. Here’s what you can expect from our tailored advisory services:
                            </p>
                            <ul className="about-six__content__list long mt-5">
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Flexible, Scalable Solutions: 
                                    </h3>
                                    Our plans adapt to your evolving business needs, ensuring you get the right level of support at every stage.
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Outcome-Driven Deliverables:
                                    </h3>
                                    Each initiative is strategically designed to align with your goals, delivering measurable results without unnecessary complexity.
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Agile & Asynchronous Execution: 
                                    </h3>
                                    We work alongside your team efficiently, providing expert guidance and solutions without disrupting your operations.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingSectionOne;
