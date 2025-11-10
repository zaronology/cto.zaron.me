'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/fix-muddy-data.jpg";

const AttributionCookieProblem = () => {

    return (
        <section className="">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">First-Party Cookies Aren’t a Silver Bullet</span>
                <span className="main-title-border"></span>
            </h2>
            <Container className='py-5 home-page-container'>
                <Row>
                    <Col md={6} data-aos='fade-right' data-aos-delay="200">
 
                        <div>
                            <p>
                                While the move away from third-party cookies has shifted the focus to first-party cookies, it’s crucial to understand their limitations. Many businesses assume that using first-party cookies eliminates privacy and tracking challenges, but the reality is more complex. Tools like analytics platforms, attribution systems, and other trackers may use first-party cookies but still operate as third-party solutions in practice. Third-party trackers, even when they leverage first-party cookies, still fall short.
                            </p>
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                Here's why
                            </h6>
                            <ul className="nice-list nopad">
                                <li><h5><i className={icon}></i>You Don’t Own the Data: </h5>When you rely on third-party trackers, the data collected is stored on their servers, not yours. This means you’re dependent on their infrastructure and policies to access, analyze, or even retain your business-critical insights. Ownership remains out of your control.</li>
                                <li><h5><i className={icon}></i>Compliance Challenges Persist: </h5>Privacy regulations like GDPR and CCPA don’t differentiate based solely on cookie types—they focus on how data is collected, processed, and shared. When your data flows through third-party trackers, you inherit their compliance risks, especially if their systems don’t fully align with the laws governing your business.</li>
                                <li><h5><i className={icon}></i>Aggregated, Not Transparent: </h5>Third-party trackers often provide you with aggregated reports rather than giving you access to the raw data. This limits your ability to validate insights, customize attribution models, or identify discrepancies across platforms. Instead, you’re left trusting their interpretation of your data.</li>
                                <li><h5><i className={icon}></i>Fragmented Attribution Models: </h5>Many trackers—whether for advertising, customer behavior, or sales—are optimized for their own ecosystem. They don’t provide a complete picture of your customer’s journey, especially when interactions span multiple platforms. This fragmentation leaves your attribution models incomplete and unreliable.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-left'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AttributionCookieProblem;
