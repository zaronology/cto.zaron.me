'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/tech-problems-cost.jpg";

const HomeSectionTwo = () => {

    return (
        <section className="" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">The Hidden Cost of Tech Bottlenecks</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='py-5 my-md-5 home-page-container'>
                <Row>

                    <Col md={6} className='mt-5' data-aos='fade-up' data-aos-delay="200">
                        <div className="about-six__content">

                            <p className="about-six__content__text">
                            These issues aren’t just frustrating—they’re costly. Every inaccurate data point, every misfired email, and every system failure silently drains your revenue. The result? Missed opportunities, wasted spend, and decisions made on faulty insights.

                            </p>
                            <p>
                            Your team, instead of driving strategic growth, is stuck putting out fires. And the worst part? You know things could be better, but you don’t have the bandwidth to figure it out.
                            </p>
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                The Struggle Is Real
                            </h6>
                            <ul className="about-six__content__list long mt-3">
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Losing revenue due to bad data and guesswork.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Teams distracted by troubleshooting instead of focusing on growth.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Stalled progress, watching competitors move ahead while you’re stuck.
                                    </h3>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} className='text-center'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeSectionTwo;
