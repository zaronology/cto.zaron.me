'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/you-need-tech-expertiese.jpg";

const HomeSectionThree = () => {

    return (
        <section className="" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">You Need the Right Expertise</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='py-5 my-md-5 home-page-container'>
                <Row>
                    <Col md={6} className='text-center order-2 order-md-1'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                    <Col md={6} className='mt-md-5 order-1 order-md-2' data-aos='fade-up' data-aos-delay="200">
                        <div className="about-six__content">

                            <p className="about-six__content__text">
                            The problem isn’t just the technology—it’s how it’s set up and managed. Your tech stack should work for you, not against you. That’s where we come in.
                            </p>
                            <p>
                            We don’t replace your team—we empower them. Our expert advisors work alongside you to identify inefficiencies, prioritize impactful fixes, and implement solutions quietly and efficiently. We provide the clarity you need to make confident, data-driven decisions without the hassle.
                            </p>
                            <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                Here’s how we help:
                            </h6>
                            <ul className="about-six__content__list long mt-3">
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Fixing broken tracking so you can trust your numbers again.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Streamlining systems to eliminate manual work and improve efficiency.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Ensuring your tools support your goals, not hinder them.
                                    </h3>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeSectionThree;
