'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/fix-muddy-data.jpg";

const AttributionRealProblem = () => {

    return (
        <section className="" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">The Real Problem With 3rd Party Data</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='py-5 home-page-container'>
                <Row>
                    <Col lg={12} data-aos='fade-up' data-aos-delay="200">
                        <div className="about-six__content">
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                Your Data May Be Lying to You
                            </h6>

                            <p className="about-six__content__text">With browser privacy updates and evolving compliance laws, your analytics are no longer reliable. Modern browsers like Safari, Firefox, and Chrome are implementing stricter privacy measures such as Intelligent Tracking Prevention (ITP) and Enhanced Tracking Protection (ETP). Meanwhile, platforms like Facebook and Google are reducing attribution windows, leaving your marketing stack fragmented. This means:</p>
                            <ul className="about-six__content__list long">
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Shorter Attribution Windows
                                    </h3>
                                    <p className="about-six__content__list__text">
                                        Standard third-party tracking systems like Facebook Ads Manager now operate with significantly reduced attribution windows, often limiting visibility to just 7 days. This results in incomplete insights and missed opportunities.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Cross-Attribution Noise
                                    </h3>
                                    <p className="about-six__content__list__text">
                                        Sending all your traffic—Google Ads, Facebook Ads, affiliates, and organic—into a single landing page creates data chaos. Multiple channels claim the same conversion, leaving you guessing which campaigns are actually driving sales.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Vanishing User Journeys
                                    </h3>
                                    <p className="about-six__content__list__text">
                                        Users are treated as “new visitors” across platforms due to tracking resets, breaking the continuity of your customer journey. This makes retargeting less effective and skews your insights.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AttributionRealProblem;
