'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/tech-headache.jpg";

const HomeSectionOne = () => {

    return (
        <section className="mt-5" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">Feeling Stuck, Frustrated, and Losing Momentum?</span>
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
                            {/* <h6 className="sec-title-four__tagline">
                                <span className="sec-title-four__tagline__left-border"></span>
                                Your Data May Be Lying to You
                            </h6> */}

                            <p>
                                Every day you spend troubleshooting tech issues, you’re bleeding time, energy, and revenue. Broken attribution, misconfigured systems, and operational inefficiencies are costing you growth opportunities. Our expert advisors work alongside your team to identify what’s slowing you down, prioritize what matters most, and implement solutions quietly and efficiently—so you can focus on growth without distractions.
                            </p>
                            <p>
                                You’re losing sleep over problems that shouldn’t exist—wondering why your reports don’t make sense, questioning your marketing decisions, and feeling stuck without clear answers. No matter how much you invest in tools and strategies, something always seems off.
                            </p>
                            <p>
                                The frustration isn’t just about the tech—it’s the uncertainty. The feeling of running in circles, wasting money, and not knowing what’s broken or how to fix it.
                            </p>
                            <ul className="about-six__content__list long mt-5">
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        You’re second-guessing your data every day.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Your team is overwhelmed, stuck fixing the same issues.
                                    </h3>
                                </li>
                                <li>
                                    <h3 className="about-six__content__list__title">
                                        <i className={icon}></i>
                                        Marketing budgets wasted because attribution is unclear.
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

export default HomeSectionOne;
