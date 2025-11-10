'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
const icon = "tolak-icons-two-sign-in-alt1";
import image from "@/assets/images/hidden-costs.jpg";
import imageCustomer from "@/assets/images/customer-journey-customer-experience-home.jpg"


const AttributionHiddenCosts = () => {

    return (
        <section className="" id="about">
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">The Hidden Costs of Broken Data</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='mt-md-5 py-5 home-page-container'>
                <Row>
                    <Col md={6} className='text-center order-2 order-md-1'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={image} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                    <Col className='order-1 order-md-2' data-aos='fade-left' data-aos-delay="200">
                        <h6 className="sec-title-four__tagline">
                            <span className="sec-title-four__tagline__left-border"></span>
                            Here's the kicker
                        </h6>
                        <p className='my-3'>
                            This isn't just about messy numbers or annoying legal paperwork—it's actively costing you millions in lost revenue. Here's how:
                        </p>

                        <ul className="about-six__content__list long">
                            <li>
                                <h3 className="about-six__content__list__title">
                                    <i className={icon}></i>
                                    Wasted Ad Spend
                                </h3>
                                <p className="about-six__content__list__text">
                                    Unreliable attribution means you're pouring money into campaigns that might not even be working.
                                </p>
                            </li>
                            <li>
                                <h3 className="about-six__content__list__title">
                                    <i className={icon}></i>
                                    Lost Sales Opportunities
                                </h3>
                                <p className="about-six__content__list__text">
                                    Broken tracking leads to missed customer journeys, lost retargeting opportunities, and lower conversion rates.
                                </p>
                            </li>
                            <li>
                                <h3 className="about-six__content__list__title">
                                    <i className={icon}></i>
                                    Legal Exposure
                                </h3>
                                <p className="about-six__content__list__text">
                                    Non-compliance isn’t just risky; it’s a financial and reputational time bomb, with fines reaching tens or even hundreds of thousands of dollars.
                                </p>
                            </li>
                            <li>
                                <h3 className="about-six__content__list__title">
                                    <i className={icon}></i>
                                    Inefficient Decision-Making
                                </h3>
                                <p className="about-six__content__list__text">
                                    Conflicting or incomplete data forces your team to make gut-based decisions instead of data-backed ones, which can tank growth.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <h2 className="main-title" data-aos='zoom-in-up' data-aos-delay="200">
                <span className="main-title-border"></span>
                <span className="main-title-content">And It’s Not Just About the Numbers</span>
                <span className="main-title-border"></span>
            </h2>

            <Container className='mt-md-5 py-5 home-page-container'>
                <Row>
                    <Col className='' data-aos='fade-left' data-aos-delay="200">
                        <p className='my-3'>
                            When your data is messy, it’s not just your decisions that suffer—<b>it’s your customers</b>. If you can’t see the full picture, you lose sight of the paths your customers take, the friction they encounter, and the reasons they leave before converting.
                        </p>
                        <p>
                            This is where the <b>customer journey</b> comes in. Every ad they see, every page they visit, and every checkout form they abandon tells a story. But if your data is unreliable, that story is incomplete. You’re left guessing why they drop off or what brought them to your site in the first place.
                        </p>
                        <p>
                            And it’s not just about tracking the journey—it’s about shaping the experience. If your messaging feels disjointed or your offers don’t hit the mark, customers won’t stick around long enough to become loyal.
                        </p>
                        <p>
                            The truth is, without clear, reliable data, your <b>customer journey</b> is a blind spot, and the <b>customer experience</b> you’re delivering is at best inconsistent, at worst frustrating.
                        </p>
                        <p>
                            Your ability to scale doesn’t just depend on driving traffic or increasing ad spend. It depends on how well you understand the people behind the clicks—their behaviors, their needs, and what keeps them coming back. Without this, you’re not just losing customers—you’re losing opportunities to build loyalty and long-term revenue.
                        </p>
                    </Col>
                    <Col md={6} className='text-center order-2 order-md-1'>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={imageCustomer} alt="Zaronology will fix your muddy data" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default AttributionHiddenCosts;
